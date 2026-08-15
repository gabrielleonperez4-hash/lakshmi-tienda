import Head from "next/head";
import { useRouter } from "next/router";
import { products, getProductBySlug } from "../../lib/products";
import { useCart } from "../../context/CartContext";
import ProductIcon from "../../components/ProductIcon";

export async function getStaticPaths() {
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { notFound: true };
  return { props: { product } };
}

export default function ProductPage({ product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const hasPrice = typeof product.price === "number";
  const outOfStock = product.stock === 0;
  const disabled = outOfStock || !hasPrice;

  function handleAdd() {
    addItem(product, 1);
    router.push("/carrito");
  }

  return (
    <>
      <Head>
        <title>{product.name} — Lakshmi</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="container pd">
        <div className="pd-img">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }}
            />
          ) : (
            <ProductIcon icon={product.icon} className="product-icon" />
          )}
        </div>
        <div>
          <span className="card-origin">{product.origin}</span>
          <h1>{product.name}</h1>
          <div className="price">{hasPrice ? `${product.price.toFixed(2)} €` : "Precio pendiente"}</div>
          <p className="desc">{product.description}</p>
          <button className="btn" disabled={disabled} onClick={handleAdd}>
            {outOfStock ? "Agotado" : hasPrice ? "Añadir al carrito" : "Precio pendiente"}
          </button>
          <p className="stock-note">
            {outOfStock
              ? "Sin stock actualmente."
              : `${product.stock} unidades disponibles · Envíos a toda Canarias`}
          </p>
        </div>
      </div>
    </>
  );
}
