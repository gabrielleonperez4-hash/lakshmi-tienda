export default function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="container footer-grid">
        <div>
          <strong>Lakshmi</strong>
          <p>
            Productos de India y Tailandia: inciensos, cuencos tibetanos y
            decoración. Local K1, planta alta — C.C. Atlántico, Vecindario,
            Gran Canaria.
          </p>
        </div>
        <div>
          <strong>Contacto</strong>
          <p>
            Tel: 638 175 551
            <br />
            umartelsanchez@gmail.com
          </p>
        </div>
        <div>
          <strong>Envíos</strong>
          <p>Enviamos a toda Canarias. Recogida en tienda disponible.</p>
        </div>
      </div>
      <div className="mala-divider" aria-hidden="true">
        {Array.from({ length: 21 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </footer>
  );
}
