import Head from "next/head";
import { useRouter } from "next/router";
import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  const router = useRouter();
  const activeCategory = typeof router.query.categoria === "string" ? router.query.categoria : null;
  const visibleProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <>
      <Head>
        <title>Lakshmi — Productos de India y Tailandia | Envíos a Canarias</title>
        <meta
          name="description"
          content="Inciensos, cuencos tibetanos y decoración de India y Tailandia. Tienda en C.C. Atlántico, Vecindario. Envíos a toda Canarias."
        />
      </Head>

      <HeroCarousel />

      <div className="mala-divider" aria-hidden="true">
        {Array.from({ length: 35 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <section className="section container" id="catalogo">
        <div className="section-head">
          <div>
            <h2>{activeCategory ? activeCategory : "Catálogo"}</h2>
            <p>Piezas seleccionadas, disponibles para envío inmediato.</p>
          </div>
        </div>

        <div className="grid">
          {visibleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
