import Link from "next/link";
import { useCart } from "../context/CartContext";
import ProductIcon from "./ProductIcon";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const outOfStock = product.stock === 0;

  return (
    <div className="card">
      <Link href={`/producto/${product.slug}`}>
        <div className="card-img">
          {product.image ? (
            <img src={product.image} alt={product.name} loading="lazy" />
          ) : (
            <ProductIcon icon={product.icon} className="product-icon" />
          )}
        </div>
      </Link>
      <div className="card-body">
        <span className="card-origin">{product.origin}</span>
        <Link href={`/producto/${product.slug}`}>
          <h3 className="card-title">{product.name}</h3>
        </Link>
        <div className="card-price">
          <span>{product.price.toFixed(2)} €</span>
          <button
            className="mini-btn"
            disabled={outOfStock}
            onClick={() => addItem(product, 1)}
            style={outOfStock ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
          >
            {outOfStock ? "Agotado" : "Añadir"}
          </button>
        </div>
      </div>
    </div>
  );
}
