// Catálogo de productos.
// EDITA ESTE ARCHIVO para poner los productos, fotos y precios reales de la tienda.
//
// PRECIOS: de momento están en "null" (sin precio). Mientras un producto no
// tenga precio, la web lo muestra como "Precio pendiente" y no se puede
// añadir al carrito, para evitar que se venda por error a 0€. En cuanto
// sepas tu precio de venta, cambia "price: null" por el número, por
// ejemplo "price: 12.90".
//
// "icon" usa una ilustración propia mientras no hay fotos reales (ver
// components/ProductIcon.js). En cuanto tengas fotos, añade un campo
// "image" con la ruta o URL (ej: "/img/incienso-1.jpg", dentro de
// /public/img) y se mostrará automáticamente en vez del icono.
// "stock" es opcional; si lo pones a 0, el producto se muestra como agotado.

export const products = [
  {
    id: "incienso-nag-champa",
    slug: "incienso-nag-champa",
    name: "Incienso Nag Champa (caja x20)",
    origin: "India",
    category: "Inciensos",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Varillas de incienso Nag Champa elaboradas artesanalmente en India con resinas naturales y madera de sándalo. Aroma cálido y envolvente, ideal para meditación y decoración del hogar.",
    stock: 40,
  },
  {
    id: "incienso-satya-super-hit",
    slug: "incienso-satya-super-hit",
    name: "Incienso Satya Super Hit (caja x15)",
    origin: "India",
    category: "Inciensos",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Uno de los inciensos más vendidos del mundo. Aroma fresco y floral, elaborado con la fórmula clásica de la marca Satya.",
    stock: 35,
  },
  {
    id: "incienso-satya-conos-nag-champa",
    slug: "incienso-satya-conos-nag-champa",
    name: "Incienso Satya Nag Champa en conos (caja x12)",
    origin: "India",
    category: "Inciensos",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Formato en cono del clásico aroma Nag Champa, combustión más rápida y concentrada, ideal para sesiones cortas de meditación.",
    stock: 28,
  },
  {
    id: "incienso-mirra-granel",
    slug: "incienso-mirra-granel",
    name: "Incienso de Mirra a granel (100 g)",
    origin: "India",
    category: "Inciensos",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Resina de mirra a granel, aroma intenso y balsámico. Se quema sobre carbón vegetal en un incensario o soporte resistente al calor.",
    stock: 18,
  },
  {
    id: "incienso-goloka-sandalo",
    slug: "incienso-goloka-sandalo",
    name: "Incienso Goloka Sándalo (caja x15)",
    origin: "India",
    category: "Inciensos Goloka y Satya",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Incienso Goloka de sándalo, uno de los aromas más apreciados en rituales de bienestar y meditación. Combustión lenta y aroma persistente.",
    stock: 30,
  },
  {
    id: "incienso-goloka-lavanda",
    slug: "incienso-goloka-lavanda",
    name: "Incienso Goloka Lavanda (caja x15)",
    origin: "India",
    category: "Inciensos Goloka y Satya",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Aroma relajante de lavanda de la línea Goloka, ideal para ambientes de descanso y desconexión.",
    stock: 24,
  },
  {
    id: "incienso-satya-patchouli",
    slug: "incienso-satya-patchouli",
    name: "Incienso Satya Patchouli (caja x15)",
    origin: "India",
    category: "Inciensos Goloka y Satya",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Aroma terroso y envolvente de pachulí, de la reconocida marca Satya. Uno de los favoritos en tiendas de bienestar.",
    stock: 26,
  },
  {
    id: "palo-santo-varitas",
    slug: "palo-santo-varitas",
    name: "Palo Santo natural (paquete x5 varitas)",
    origin: "Perú",
    category: "Palo Santo y Aceites Aromáticos",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Varitas de madera de Palo Santo 100% natural, procedencia sostenible. Se queman directamente para purificar ambientes.",
    stock: 32,
  },
  {
    id: "aceite-aromatico-ullas-sandalo",
    slug: "aceite-aromatico-ullas-sandalo",
    name: "Aceite aromático Ullas Sándalo (frasco)",
    origin: "India",
    category: "Palo Santo y Aceites Aromáticos",
    price: null, // TODO: pon tu precio real
    icon: "diffuser",
    description:
      "Aceite esencial aromático de sándalo de la línea Ullas, ideal para quemadores y difusores de aromas.",
    stock: 20,
  },
  {
    id: "incensario-laton-tallado",
    slug: "incensario-laton-tallado",
    name: "Incensario de latón tallado",
    origin: "India",
    category: "Incensarios y Soportes",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Soporte de latón con grabados tradicionales para quemar varillas de incienso de forma segura, recogiendo la ceniza.",
    stock: 15,
  },
  {
    id: "portaincienso-madera-cajon",
    slug: "portaincienso-madera-cajon",
    name: "Portaincienso de madera con cajón",
    origin: "India",
    category: "Incensarios y Soportes",
    price: null, // TODO: pon tu precio real
    icon: "incense",
    description:
      "Soporte de madera con cajón inferior para recoger la ceniza de las varillas de incienso. Diseño sencillo y funcional.",
    stock: 22,
  },
  {
    id: "cuenco-tibetano-jambati",
    slug: "cuenco-tibetano-jambati",
    name: "Cuenco tibetano Jambati 12 cm",
    origin: "Nepal / India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description:
      "Cuenco cantor forjado a mano, incluye cojín y mazo. Utilizado en prácticas de sonoterapia, meditación y relajación profunda.",
    stock: 12,
  },
  {
    id: "cuenco-tibetano-grabado",
    slug: "cuenco-tibetano-grabado",
    name: "Cuenco tibetano grabado 10 cm",
    origin: "Nepal / India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description:
      "Cuenco tibetano de menor tamaño con grabados tradicionales, ideal para espacios pequeños de meditación o como pieza decorativa.",
    stock: 10,
  },
  {
    id: "buda-sentado-dorado",
    slug: "buda-sentado-dorado",
    name: "Buda Sentado Dorado 20 cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description:
      "Figura de Buda en posición de meditación, acabado dorado envejecido. Símbolo de paz interior y buenos comienzos para el hogar.",
    stock: 14,
  },
  {
    id: "farol-tailandes-bambu",
    slug: "farol-tailandes-bambu",
    name: "Farol de bambú tailandés",
    origin: "Tailandia",
    category: "Decoración",
    price: null, // TODO: pon tu precio real
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
    price: null, // TODO: pon tu precio real
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
    price: null, // TODO: pon tu precio real
    icon: "diffuser",
    description:
      "Difusor de cerámica pintado a mano, incluye vela y compartimento para aceites esenciales.",
    stock: 20,
  },
  {
    id: "vela-bloque-degradado",
    slug: "vela-bloque-degradado",
    name: "Vela bloque colores degradado 12x6 cm",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description:
      "Vela artesanal en bloque con degradado de colores, larga duración. Aporta un toque decorativo y cálido a cualquier rincón.",
    stock: 22,
  },
  {
    id: "atrapasuenos-mediano",
    slug: "atrapasuenos-mediano",
    name: "Atrapasueños artesanal mediano",
    origin: "India",
    category: "Complementos y Atrapasueños",
    price: null, // TODO: pon tu precio real
    icon: "dreamcatcher",
    description:
      "Atrapasueños tejido a mano con plumas naturales y cuentas de madera. Pieza decorativa tradicional para dormitorios.",
    stock: 18,
  },
  {
    id: "cuarzo-rosa-pulido",
    slug: "cuarzo-rosa-pulido",
    name: "Cuarzo rosa pulido (pieza)",
    origin: "Brasil",
    category: "Minerales y piedras semipreciosas",
    price: null, // TODO: pon tu precio real
    icon: "crystal",
    description:
      "Piedra de cuarzo rosa pulida, asociada tradicionalmente al amor propio y la armonía. Cada pieza es única en tamaño y forma.",
    stock: 35,
  },
  {
    id: "amatista-bruto",
    slug: "amatista-bruto",
    name: "Amatista en bruto (pieza pequeña)",
    origin: "Brasil",
    category: "Minerales y piedras semipreciosas",
    price: null, // TODO: pon tu precio real
    icon: "crystal",
    description:
      "Fragmento natural de amatista sin pulir, con sus cristales visibles. Muy usada en decoración esotérica y colecciones de minerales.",
    stock: 20,
  },
  {
    id: "tarot-rider-waite",
    slug: "tarot-rider-waite",
    name: "Baraja Tarot Rider Waite (78 cartas)",
    origin: "España",
    category: "Barajas y Oráculos esotéricos",
    price: null, // TODO: pon tu precio real
    icon: "cards",
    description:
      "Edición clásica del Tarot Rider Waite, 78 cartas con ilustraciones tradicionales y libro guía incluido.",
    stock: 16,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
