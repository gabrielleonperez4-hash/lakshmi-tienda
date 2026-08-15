import { useState } from "react";
import Head from "next/head";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, updateQty, removeItem, total } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCheckout() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al iniciar el pago");
      window.location.href = data.url;
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Carrito — Lakshmi</title>
      </Head>
      <div className="container section">
        <div className="section-head">
          <div>
            <h2>Tu carrito</h2>
            <p>Revisa tus productos antes de pagar.</p>
          </div>
        </div>

        {items.length === 0 && (
          <p>
            Tu carrito está vacío.{" "}
            <a href="/#catalogo" style={{ textDecoration: "underline" }}>
              Ver catálogo
            </a>
            .
          </p>
        )}

        {items.map((item) => (
          <div className="cart-row" key={item.id}>
            <div className="cart-thumb" />
            <div>
              <strong>{item.name}</strong>
              <div className="stock-note">{item.price.toFixed(2)} € / ud.</div>
            </div>
            <input
              className="qty-input"
              type="number"
              min={0}
              value={item.qty}
              onChange={(e) => updateQty(item.id, parseInt(e.target.value || "0", 10))}
            />
            <div style={{ fontFamily: "var(--font-mono)" }}>
              {(item.qty * item.price).toFixed(2)} €
            </div>
            <button className="remove-link" onClick={() => removeItem(item.id)}>
              Quitar
            </button>
          </div>
        ))}

        {items.length > 0 && (
          <div className="cart-summary">
            <div className="cart-total">Total: {total.toFixed(2)} €</div>
            <p className="stock-note">Gastos de envío calculados en el siguiente paso.</p>
            {error && (
              <p className="stock-note" style={{ color: "var(--maroon)" }}>
                {error}
              </p>
            )}
            <button className="btn" onClick={handleCheckout} disabled={loading}>
              {loading ? "Redirigiendo al pago…" : "Ir a pagar"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
