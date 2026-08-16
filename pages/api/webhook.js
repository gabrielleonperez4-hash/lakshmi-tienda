import Stripe from "stripe";
import { products } from "../../lib/products";

// Los webhooks de Stripe necesitan el cuerpo de la petición "en crudo"
// (sin parsear) para poder verificar la firma, por eso se desactiva el
// bodyParser por defecto de Next.js en esta ruta.
export const config = {
  api: {
    bodyParser: false,
  },
};

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on("data", (chunk) =>
      chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
    );
    readable.on("end", () => resolve(Buffer.concat(chunks)));
    readable.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("Faltan STRIPE_SECRET_KEY o STRIPE_WEBHOOK_SECRET");
    return res.status(500).end("Webhook no configurado");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Firma de webhook inválida:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
        limit: 100,
      });
      await sendOrderEmail(session, lineItems.data);
    } catch (err) {
      // No devolvemos error a Stripe por un fallo de email: el pago ya se
      // ha cobrado correctamente, solo se registra el problema del aviso.
      console.error("Error enviando el email del pedido:", err);
    }
  }

  return res.status(200).json({ received: true });
}

async function sendOrderEmail(session, lineItems) {
  if (!process.env.RESEND_API_KEY || !process.env.STORE_OWNER_EMAIL) {
    console.warn(
      "RESEND_API_KEY o STORE_OWNER_EMAIL no configurados: no se envía email de pedido. Revisa el README."
    );
    return;
  }

  const itemsHtml = lineItems
    .map((item) => {
      const unit = (item.amount_total / 100 / item.quantity).toFixed(2);
      return `<li>${item.quantity} × ${item.description} — ${unit} €/ud. (${(
        item.amount_total / 100
      ).toFixed(2)} € total)</li>`;
    })
    .join("");

  const addr = session.shipping_details?.address || session.customer_details?.address;
  const shippingName = session.shipping_details?.name || session.customer_details?.name || "—";
  const addressHtml = addr
    ? `${shippingName}<br/>${addr.line1 || ""} ${addr.line2 || ""}<br/>${addr.postal_code || ""} ${
        addr.city || ""
      }<br/>${addr.country || ""}`
    : "No disponible";

  const total = ((session.amount_total || 0) / 100).toFixed(2);
  const shipping = ((session.shipping_cost?.amount_total || 0) / 100).toFixed(2);
  const email = session.customer_details?.email || "No disponible";
  const phone = session.customer_details?.phone || "—";

  const html = `
    <div style="font-family: sans-serif; color:#2a2138;">
      <h2 style="color:#5b4a78;">🛍️ Nuevo pedido en Lakshmi</h2>
      <p><strong>Total cobrado:</strong> ${total} € (envío: ${shipping} €)</p>
      <p><strong>Email del cliente:</strong> ${email}<br/>
         <strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Dirección de envío:</strong><br/>${addressHtml}</p>
      <h3>Productos pedidos:</h3>
      <ul>${itemsHtml}</ul>
      <p style="color:#888; font-size:12px;">Referencia Stripe: ${session.id}</p>
    </div>
  `;

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Pedidos Lakshmi <onboarding@resend.dev>",
      to: [process.env.STORE_OWNER_EMAIL],
      subject: `Nuevo pedido — ${total} €`,
      html,
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    console.error("Resend devolvió un error al enviar el email:", resp.status, text);
  }
}
