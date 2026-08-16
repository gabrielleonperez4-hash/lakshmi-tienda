import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCart } from "../context/CartContext";

export default function Success() {
  const router = useRouter();
  const { clearCart, loaded } = useCart();

  useEffect(() => {
    if (!loaded) return;
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <>
      <Head>
        <title>Pedido confirmado — Lakshmi</title>
      </Head>
      <div className="container section" style={{ textAlign: "center", padding: "96px 0" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu pago se ha procesado correctamente. Te enviaremos la
          confirmación y el seguimiento del envío por email.
        </p>
        {router.query.session_id && (
          <p className="stock-note">Referencia: {router.query.session_id}</p>
        )}
        <a href="/" className="btn" style={{ marginTop: 24 }}>
          Volver a la tienda
        </a>
      </div>
    </>
  );
}
