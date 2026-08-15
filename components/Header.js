import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCart } from "../context/CartContext";
import { products } from "../lib/products";

const categories = [...new Set(products.map((p) => p.category))];

export default function Header() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function goToCategory(cat) {
    setMenuOpen(false);
    router.push(`/?categoria=${encodeURIComponent(cat)}#catalogo`);
  }

  return (
    <header className="site-header">
      <div className="container header-row">
        <div className="menu-wrap">
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
          >
            <span className="menu-icon">☰</span> Menu
          </button>
          {menuOpen && (
            <>
              <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
              <div className="menu-panel">
                <Link
                  href="/#catalogo"
                  onClick={() => setMenuOpen(false)}
                  className="menu-item menu-item-all"
                >
                  Ver todo el catálogo
                </Link>
                {categories.map((cat) => (
                  <button key={cat} className="menu-item" onClick={() => goToCategory(cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <Link href="/" className="brand">
          Lakshmi <small>India · Tailandia</small>
        </Link>

        <nav className="nav-links">
          <Link href="/#catalogo">Catálogo</Link>
          <Link href="/#contacto">Contacto</Link>
          <Link href="/carrito" className="cart-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-1.5 5h11.5M9 21a1 1 0 100-2 1 1 0 000 2zM18 21a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Carrito {count > 0 ? `(${count})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}
