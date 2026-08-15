import Stripe from "stripe";
import { getProductBySlug, products } from "../../lib/products";

// ============================================================
// GASTOS DE ENVÍO — edita estos valores según lo que necesites.
// "amount" va en céntimos: 495 = 4,95 €. "minDays"/"maxDays" son
// días hábiles estimados de entrega.
// ============================================================
const SHIPPING = {
  amount: 495, // 4,95 €
  label: "Envío a Canarias",
  minDays: 3,
  maxDays: 5,
};
// ============================================================

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({
      error:
        "Falta configurar STRIPE_SECRET_KEY en el servidor. Revisa el README.",
    });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { items } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "El carrito está vacío" });
    }

    // Los precios se recalculan aquí desde el catálogo del servidor:
    // nunca confiamos en el precio que envía el navegador.
    const line_items = items.map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) throw new Error(`Producto no encontrado: ${item.id}`);
      const qty = Math.max(1, parseInt(item.qty, 10) || 1);
      return {
        quantity: qty,
        price_data: {
          currency: "eur",
          unit_amount: Math.round(product.price * 100),
          product_data: { name: product.name },
        },
      };
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${siteUrl}/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancelado`,
      // Canarias forma parte de España pero está fuera del territorio IVA
      // (aplica IGIC). Stripe no permite restringir el envío a una región
      // dentro de un país, así que se recoge la dirección de todo España
      // y conviene revisar manualmente el código postal (35xxx / 38xxx)
      // antes de confirmar el envío. Ver README para más detalle.
      shipping_address_collection: { allowed_countries: ["ES"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: SHIPPING.amount, currency: "eur" },
            display_name: `${SHIPPING.label} (${SHIPPING.minDays}-${SHIPPING.maxDays} días)`,
            delivery_estimate: {
              minimum: { unit: "business_day", value: SHIPPING.minDays },
              maximum: { unit: "business_day", value: SHIPPING.maxDays },
            },
          },
        },
      ],
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Error al crear el pago" });
  }
}
