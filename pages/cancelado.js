import Head from "next/head";

export default function Cancelled() {
  return (
    <>
      <Head>
        <title>Pago cancelado — Lakshmi</title>
      </Head>
      <div className="container section" style={{ textAlign: "center", padding: "96px 0" }}>
        <h2>Pago cancelado</h2>
        <p>No se ha realizado ningún cargo. Tu carrito sigue guardado.</p>
        <a href="/carrito" className="btn" style={{ marginTop: 24 }}>
          Volver al carrito
        </a>
      </div>
    </>
  );
}
