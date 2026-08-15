// Catálogo de productos.
// EDITA ESTE ARCHIVO para poner los productos, fotos y precios reales de la tienda.
//
// "icon" usa una ilustración propia mientras no hay fotos reales (ver
// components/ProductIcon.js). En cuanto tengas fotos, añade un campo
// "image" con la ruta (ej: "/img/incienso-1.jpg", dentro de /public) y
// cambia <ProductIcon icon={product.icon} /> por
// <img src={product.image} alt={product.name} /> en ProductCard.js y en
// pages/producto/[slug].js.
// "stock" es opcional; si lo pones a 0, el producto se muestra como agotado.

export const products = [
  {
    id: "incienso-nag-champa",
    slug: "incienso-nag-champa",
    name: "Incienso Nag Champa (caja x20)",
    origin: "India",
    category: "Inciensos",
    price: 3.5,
    icon: "incense",
    description:
      "Varillas de incienso Nag Champa elaboradas artesanalmente en India con resinas naturales y madera de sándalo. Aroma cálido y envolvente, ideal para meditación y decoración del hogar.",
    stock: 40,
  },
  {
    id: "cuenco-tibetano-jambati",
    slug: "cuenco-tibetano-jambati",
    name: "Cuenco tibetano Jambati 12 cm",
    origin: "Nepal / India",
    category: "Cuencos tibetanos",
    price: 68,
    icon: "bowl",
    description:
      "Cuenco cantor forjado a mano, incluye cojín y mazo. Utilizado en prácticas de sonoterapia, meditación y relajación profunda.",
    stock: 12,
  },
  {
    id: "estatua-ganesha-laton",
    slug: "estatua-ganesha-laton",
    name: "Estatua Ganesha de latón 15 cm",
    origin: "India",
    category: "Decoración",
    price: 32,
    icon: "statue",
    description:
      "Figura de Ganesha en latón macizo, símbolo de prosperidad y buenos comienzos. Acabado artesanal, pieza única de decoración.",
    stock: 8,
  },
  {
    id: "farol-tailandes-bambu",
    slug: "farol-tailandes-bambu",
    name: "Farol de bambú tailandés",
    origin: "Tailandia",
    category: "Decoración",
    price: 24,
    icon: "lantern",
    description:
      "Farolillo tejido a mano en bambú natural, perfecto para crear ambientes cálidos en terrazas y jardines.",
    stock: 15,
  },
  {
    id: "mala-108-cuentas",
    slug: "mala-108-cuentas",
    name: "Mala de meditación 108 cuentas",
    origin: "India",
    category: "Bienestar",
    price: 15,
    icon: "mala",
    description:
      "Collar mala tradicional de madera de sándalo con 108 cuentas, usado en meditación y mantra.",
    stock: 25,
  },
  {
    id: "difusor-aromas-ceramica",
    slug: "difusor-aromas-ceramica",
    name: "Difusor de aromas de cerámica",
    origin: "Tailandia",
    category: "Bienestar",
    price: 19.5,
    icon: "diffuser",
    description:
      "Difusor de cerámica pintado a mano, incluye vela y compartimento para aceites esenciales.",
    stock: 20,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
