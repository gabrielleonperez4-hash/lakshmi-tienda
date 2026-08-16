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
    id: "cuenco-arbol-vida-11",
    slug: "cuenco-arbol-vida-11",
    name: "Cuenco Tibetano Dorado Árbol de la Vida Relieve Ø11cm (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description:
      "Cuenco tibetano dorado con relieve del Árbol de la Vida, 11 cm de diámetro. Incluye maza para tocarlo.",
    stock: 10,
  },
  {
    id: "cuenco-arbol-vida-9",
    slug: "cuenco-arbol-vida-9",
    name: "Cuenco Tibetano Dorado Árbol de la Vida Relieve Ø9cm (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description:
      "Cuenco tibetano dorado con relieve del Árbol de la Vida, 9 cm de diámetro. Incluye maza para tocarlo.",
    stock: 10,
  },
  {
    id: "cuenco-buda-relieve-9",
    slug: "cuenco-buda-relieve-9",
    name: "Cuenco Tibetano Dorado Buda Relieve Ø9cm (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description:
      "Cuenco tibetano dorado con relieve de Buda, 9 cm de diámetro. Incluye maza para tocarlo.",
    stock: 10,
  },
  {
    id: "cuenco-buda-relieve-11",
    slug: "cuenco-buda-relieve-11",
    name: "Cuenco Tibetano Dorado Buda Relieve Ø11cm (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description:
      "Cuenco tibetano dorado con relieve de Buda, 11 cm de diámetro. Incluye maza para tocarlo.",
    stock: 8,
  },
  {
    id: "cuenco-aluminio-indra",
    slug: "cuenco-aluminio-indra",
    name: "Cuenco tibetano de aluminio dorado 15cm Indra",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de aluminio dorado, modelo Indra, 15 cm de diámetro.",
    stock: 9,
  },
  {
    id: "cuenco-mariposa-krishna",
    slug: "cuenco-mariposa-krishna",
    name: "Cuenco tibetano Mariposa 20cm Krishna",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano decorativo modelo Mariposa Krishna, 20 cm de diámetro.",
    stock: 6,
  },
  {
    id: "campana-tibetana-grabados",
    slug: "campana-tibetana-grabados",
    name: "Campana Tibetana Metálica con Grabados 11,5 cm",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Campana tibetana metálica con grabados tradicionales, 11,5 cm.",
    stock: 12,
  },
  {
    id: "cuenco-b1-9-amarillo",
    slug: "cuenco-b1-9-amarillo",
    name: "Cuenco Tibetano Ø9cm amarillo letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color amarillo con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-9-azul",
    slug: "cuenco-b1-9-azul",
    name: "Cuenco Tibetano Ø9cm azul letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color azul con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-9-turquesa",
    slug: "cuenco-b1-9-turquesa",
    name: "Cuenco Tibetano Ø9cm turquesa letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color turquesa con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-9-morado",
    slug: "cuenco-b1-9-morado",
    name: "Cuenco Tibetano Ø9cm morado letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color morado con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-9-naranja",
    slug: "cuenco-b1-9-naranja",
    name: "Cuenco Tibetano Ø9cm naranja letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color naranja con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-9-rojo",
    slug: "cuenco-b1-9-rojo",
    name: "Cuenco Tibetano Ø9cm rojo letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color rojo con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-9-verde-claro",
    slug: "cuenco-b1-9-verde-claro",
    name: "Cuenco Tibetano Ø9cm verde claro letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color verde claro con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-9-verde",
    slug: "cuenco-b1-9-verde",
    name: "Cuenco Tibetano Ø9cm verde letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color verde con letras y fondo en relieve, 9 cm. Incluye maza.",
    stock: 14,
  },
  {
    id: "cuenco-b1-10-turquesa",
    slug: "cuenco-b1-10-turquesa",
    name: "Cuenco Tibetano Ø10cm turquesa letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color turquesa con letras y fondo en relieve, 10 cm. Incluye maza.",
    stock: 12,
  },
  {
    id: "cuenco-b1-10-naranja",
    slug: "cuenco-b1-10-naranja",
    name: "Cuenco Tibetano Ø10cm naranja letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color naranja con letras y fondo en relieve, 10 cm. Incluye maza.",
    stock: 12,
  },
  {
    id: "cuenco-b1-10-verde",
    slug: "cuenco-b1-10-verde",
    name: "Cuenco Tibetano Ø10cm verde letras y fondo relieve (con Maza)",
    origin: "India",
    category: "Cuencos tibetanos",
    price: null, // TODO: pon tu precio real
    icon: "bowl",
    description: "Cuenco tibetano de color verde con letras y fondo en relieve, 10 cm. Incluye maza.",
    stock: 12,
  },
  {
    id: "buda-lampara-jardin-solar",
    slug: "buda-lampara-jardin-solar",
    name: "Lámpara Buda 3D palo para jardín con luz solar cambia color 45cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Lámpara solar de jardín con forma de Buda en 3D, luz que cambia de color, 45 cm de altura.",
    stock: 8,
  },
  {
    id: "buda-kasaya-flores-bgava",
    slug: "buda-kasaya-flores-bgava",
    name: "Buda Kasaya flores Bgava 16,5x9,5x22,5cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura de Buda con kasaya decorada con flores, modelo Bgava, 16,5x9,5x22,5 cm.",
    stock: 10,
  },
  {
    id: "buda-sentado-lateral-plateado",
    slug: "buda-sentado-lateral-plateado",
    name: "Buda Sentado Lateral Plateado 30x20cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura de Buda sentado, vista lateral, acabado plateado, 30x20 cm.",
    stock: 8,
  },
  {
    id: "carrillon-metalico-buda",
    slug: "carrillon-metalico-buda",
    name: "Carrillón metálico con Buda 40cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Carrillón de viento metálico decorado con la figura de Buda, 40 cm.",
    stock: 12,
  },
  {
    id: "buda-figura-barjan",
    slug: "buda-figura-barjan",
    name: "Figura Buda Barjan 18x13x28cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura decorativa de Buda, modelo Barjan, 18x13x28 cm.",
    stock: 9,
  },
  {
    id: "buda-figura-marala",
    slug: "buda-figura-marala",
    name: "Figura Buda Marala 15,5x13x23,5cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura decorativa de Buda, modelo Marala, 15,5x13x23,5 cm.",
    stock: 9,
  },
  {
    id: "buda-figura-naya",
    slug: "buda-figura-naya",
    name: "Figura Buda Naya 15,5x13x23,5cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura decorativa de Buda, modelo Naya, 15,5x13x23,5 cm.",
    stock: 9,
  },
  {
    id: "buda-kasaya-verde-oro-madera",
    slug: "buda-kasaya-verde-oro-madera",
    name: "Figura Buda con Kasaya verde y oro de madera 40cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura de Buda de madera con kasaya en verde y oro, 40 cm de altura.",
    stock: 6,
  },
  {
    id: "buda-meditando-chakra",
    slug: "buda-meditando-chakra",
    name: "Figura Buda meditando Chakra 25cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura de Buda en posición de meditación, decoración de chakras, 25 cm.",
    stock: 10,
  },
  {
    id: "buda-luz-led-solar-blanca",
    slug: "buda-luz-led-solar-blanca",
    name: "Figura Buda Sentado Luz led solar blanca 27,5x21,5cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura de Buda sentado con luz led solar blanca integrada, 27,5x21,5 cm.",
    stock: 7,
  },
  {
    id: "buda-feliz-onkar",
    slug: "buda-feliz-onkar",
    name: "Figura Buda Feliz Onkar 28,5x12x11,5cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura del Buda Feliz, modelo Onkar, 28,5x12x11,5 cm.",
    stock: 10,
  },
  {
    id: "buda-cuadro-enmarcado-cara",
    slug: "buda-cuadro-enmarcado-cara",
    name: "Cuadro Enmarcado Cara Buda 70x50x3cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Cuadro decorativo enmarcado con la cara de Buda en relieve, 70x50x3 cm.",
    stock: 5,
  },
  {
    id: "buda-set-3-monjes",
    slug: "buda-set-3-monjes",
    name: "Set 3 Monjes ver oír y callar",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Set decorativo de 3 monjes en las posturas clásicas de \"ver, oír y callar\".",
    stock: 12,
  },
  {
    id: "buda-quemador-meditacion",
    slug: "buda-quemador-meditacion",
    name: "Quemador Buda Meditación 20cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Quemador de incienso con forma de Buda en meditación, 20 cm, efecto reflujo.",
    stock: 10,
  },
  {
    id: "buda-luz-led-cambia-color-solar",
    slug: "buda-luz-led-cambia-color-solar",
    name: "Figura Buda con luz led cambia color solar 20x8cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura de Buda con luz led solar que cambia de color, 20x8 cm.",
    stock: 10,
  },
  {
    id: "buda-figura-sansa",
    slug: "buda-figura-sansa",
    name: "Figura Buda Sansa 16,3x11,3x8,8cm",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Figura decorativa de Buda, modelo Sansa, 16,3x11,3x8,8 cm.",
    stock: 10,
  },
  {
    id: "buda-jardin-zen-gong-portavela",
    slug: "buda-jardin-zen-gong-portavela",
    name: "Jardín Zen Buda, Gong y Portavela Pray",
    origin: "India",
    category: "Budas",
    price: null, // TODO: pon tu precio real
    icon: "statue",
    description: "Set de jardín zen con figura de Buda, gong decorativo y portavelas, modelo Pray.",
    stock: 6,
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
    id: "vela-cabeza-buda-cemento",
    slug: "vela-cabeza-buda-cemento",
    name: "Vela Cabeza de Buda de cemento 13,5x13cm",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Vela decorativa con forma de cabeza de Buda sobre base de cemento, 13,5x13 cm.",
    stock: 10,
  },
  {
    id: "vela-mano-cemento",
    slug: "vela-mano-cemento",
    name: "Vela Mano de cemento 15x9,5x9cm",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Vela decorativa con forma de mano sobre base de cemento, 15x9,5x9 cm.",
    stock: 10,
  },
  {
    id: "apagavelas-plateado-vyasa",
    slug: "apagavelas-plateado-vyasa",
    name: "Apagavelas plateado de aluminio 31cm Vyasa",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Apagavelas de aluminio plateado, modelo Vyasa, 31 cm de largo.",
    stock: 14,
  },
  {
    id: "pack-10-velas-te-vainilla",
    slug: "pack-10-velas-te-vainilla",
    name: "Pack 10 velas té Vainilla Cream perfumadas",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Pack de 10 velas de té perfumadas con aroma a vainilla cream.",
    stock: 20,
  },
  {
    id: "pack-10-velas-te-frutas-bosque",
    slug: "pack-10-velas-te-frutas-bosque",
    name: "Pack 10 velas té Frutas del Bosque perfumadas",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Pack de 10 velas de té perfumadas con aroma a frutas del bosque.",
    stock: 20,
  },
  {
    id: "pack-10-velas-te-lavanda",
    slug: "pack-10-velas-te-lavanda",
    name: "Pack 10 velas té Lavanda Spa perfumadas",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Pack de 10 velas de té perfumadas con aroma a lavanda spa.",
    stock: 20,
  },
  {
    id: "pack-4-velas-negras-bujia",
    slug: "pack-4-velas-negras-bujia",
    name: "Pack 4 velas negras bujía 17cm",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Pack de 4 velas bujía de color negro, 17 cm de altura.",
    stock: 18,
  },
  {
    id: "pack-4-velas-blancas-bujia",
    slug: "pack-4-velas-blancas-bujia",
    name: "Pack 4 velas blancas bujía 17cm",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Pack de 4 velas bujía de color blanco, 17 cm de altura.",
    stock: 18,
  },
  {
    id: "pack-3-velas-suerte",
    slug: "pack-3-velas-suerte",
    name: "Pack 3 velas de la suerte (azul/amarilla/roja) bujía 22cm",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Pack de 3 velas bujía de la suerte en azul, amarillo y rojo, 22 cm.",
    stock: 15,
  },
  {
    id: "set-8-velas-palo-santo",
    slug: "set-8-velas-palo-santo",
    name: "Set de 8 Velas Palo Santo votivas",
    origin: "Perú",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Set de 8 velas votivas aromatizadas con Palo Santo.",
    stock: 16,
  },
  {
    id: "vela-7-chakras",
    slug: "vela-7-chakras",
    name: "Vela 7 Chakras 11x7,5cm",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Vela decorativa con los 7 colores de los chakras, 11x7,5 cm.",
    stock: 14,
  },
  {
    id: "velon-marron-peticion",
    slug: "velon-marron-peticion",
    name: "Velón color marrón de petición (16cm Ø6cm)",
    origin: "India",
    category: "Velas y velones",
    price: null, // TODO: pon tu precio real
    icon: "candle",
    description: "Velón de petición color marrón, 16 cm de altura y 6 cm de diámetro.",
    stock: 12,
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
  {
    id: "collar-ojo-turco-cristal",
    slug: "collar-ojo-turco-cristal",
    name: "Collar esotérico ojo turco cristal 30mm",
    origin: "Turquía",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar con colgante de ojo turco de cristal de 30 mm, amuleto tradicional de protección.",
    stock: 20,
  },
  {
    id: "collar-arbol-de-la-vida",
    slug: "collar-arbol-de-la-vida",
    name: "Collar Árbol de la Vida",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar con colgante del Árbol de la Vida, símbolo de conexión y crecimiento espiritual.",
    stock: 18,
  },
  {
    id: "collar-om",
    slug: "collar-om",
    name: "Collar Om",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar con el símbolo sagrado Om, uno de los amuletos más representativos del yoga y la meditación.",
    stock: 22,
  },
  {
    id: "collar-infinito",
    slug: "collar-infinito",
    name: "Collar Infinito",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar con colgante del símbolo del infinito.",
    stock: 20,
  },
  {
    id: "collar-flor-de-la-vida",
    slug: "collar-flor-de-la-vida",
    name: "Collar Flor de la Vida",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar con el símbolo geométrico sagrado de la Flor de la Vida.",
    stock: 18,
  },
  {
    id: "collar-mandala-mano-fatima",
    slug: "collar-mandala-mano-fatima",
    name: "Collar Mandala Mano de Fátima Amuleto de la suerte",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar amuleto con la Mano de Fátima sobre diseño de mandala, símbolo tradicional de protección.",
    stock: 16,
  },
  {
    id: "collar-mandala-amor",
    slug: "collar-mandala-amor",
    name: "Collar Mandala del amor Amuleto de la suerte",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar amuleto de mandala asociado tradicionalmente al amor y la buena suerte.",
    stock: 16,
  },
  {
    id: "collar-mandala-flor-loto",
    slug: "collar-mandala-flor-loto",
    name: "Collar Mandala Flor de Loto Amuleto de la suerte",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar amuleto de mandala con motivo de flor de loto, símbolo de pureza y despertar espiritual.",
    stock: 16,
  },
  {
    id: "collar-cara-buda-thai",
    slug: "collar-cara-buda-thai",
    name: "Collar cara Buda Thai",
    origin: "Tailandia",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar con colgante de la cara de Buda, estilo tailandés.",
    stock: 18,
  },
  {
    id: "collar-chakras-cuerda-ante",
    slug: "collar-chakras-cuerda-ante",
    name: "Collar Chakras Amuleto de la suerte con cuerda de ante",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Collar amuleto con los 7 colores de los chakras, cordón de ante.",
    stock: 15,
  },
  {
    id: "pulsera-roja-7-nudos",
    slug: "pulsera-roja-7-nudos",
    name: "Pulsera Roja de los 7 nudos",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Pulsera tradicional de hilo rojo con 7 nudos, amuleto de protección.",
    stock: 30,
  },
  {
    id: "pulsera-negra-7-nudos",
    slug: "pulsera-negra-7-nudos",
    name: "Pulsera Negra de los 7 nudos",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Pulsera tradicional de hilo negro con 7 nudos, amuleto de protección.",
    stock: 30,
  },
  {
    id: "pulsera-blanca-7-nudos",
    slug: "pulsera-blanca-7-nudos",
    name: "Pulsera Blanca de los 7 nudos",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Pulsera tradicional de hilo blanco con 7 nudos, amuleto de protección.",
    stock: 30,
  },
  {
    id: "pulsera-turca-variados",
    slug: "pulsera-turca-variados",
    name: "Pulsera Turca (varios diseños)",
    origin: "Turquía",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Pulsera con motivos del ojo turco, disponible en varios diseños.",
    stock: 25,
  },
  {
    id: "pulsera-palo-santo-lazo-rojo",
    slug: "pulsera-palo-santo-lazo-rojo",
    name: "Pulsera Palo Santo Lazo Rojo",
    origin: "Perú",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Pulsera con cuenta de Palo Santo y lazo rojo protector.",
    stock: 20,
  },
  {
    id: "pulsera-3-bolas-palo-santo",
    slug: "pulsera-3-bolas-palo-santo",
    name: "Pulsera 3 bolas Palo Santo con 7 nudos cuerda roja",
    origin: "Perú",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Pulsera con 3 bolas de Palo Santo sobre cordón rojo de 7 nudos.",
    stock: 18,
  },
  {
    id: "pulsera-7-nudos-azul-ojos-turcos",
    slug: "pulsera-7-nudos-azul-ojos-turcos",
    name: "Pulsera 7 nudos Azul con ojos turcos",
    origin: "Turquía",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Pulsera de 7 nudos en azul, decorada con ojos turcos protectores.",
    stock: 22,
  },
  {
    id: "llavero-madera-manos-rezo",
    slug: "llavero-madera-manos-rezo",
    name: "Llavero Madera Manos Rezo",
    origin: "India",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Llavero de madera tallado con motivo de manos en posición de rezo.",
    stock: 24,
  },
  {
    id: "llavero-ojo-turco-30mm",
    slug: "llavero-ojo-turco-30mm",
    name: "Llavero Ojo Turco Esotérico 30mm",
    origin: "Turquía",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Llavero con ojo turco de 30 mm, amuleto tradicional de protección.",
    stock: 26,
  },
  {
    id: "llavero-cruz-cristiana",
    slug: "llavero-cruz-cristiana",
    name: "Llavero Cruz Cristiana",
    origin: "España",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
    price: null, // TODO: pon tu precio real
    icon: "jewelry",
    description: "Llavero con colgante de cruz cristiana.",
    stock: 20,
  },
  {
    id: "lampara-turca-meka-n1",
    slug: "lampara-turca-meka-n1",
    name: "Lámpara Turca Meka nº1 varios colores",
    origin: "Turquía",
    category: "Lámparas Turcas, Faroles y Decoración Árabe",
    price: null, // TODO: pon tu precio real
    icon: "lantern",
    description: "Lámpara turca de sobremesa modelo Meka nº1, con mosaico de cristales de colores variados.",
    stock: 10,
  },
  {
    id: "lampara-turca-basson-n2-45",
    slug: "lampara-turca-basson-n2-45",
    name: "Lámpara Turca Basson Nº2 45cm",
    origin: "Turquía",
    category: "Lámparas Turcas, Faroles y Decoración Árabe",
    price: null, // TODO: pon tu precio real
    icon: "lantern",
    description: "Lámpara turca de pie modelo Basson nº2, 45 cm de altura, mosaico de cristales, colores variados.",
    stock: 8,
  },
  {
    id: "lampara-turca-techo-3-bolas-65",
    slug: "lampara-turca-techo-3-bolas-65",
    name: "A2-Lámpara Turca Techo 3 Bolas 65cm",
    origin: "Turquía",
    category: "Lámparas Turcas, Faroles y Decoración Árabe",
    price: null, // TODO: pon tu precio real
    icon: "lantern",
    description: "Lámpara turca de techo con 3 bolas de mosaico de cristal, 65 cm, colores variados.",
    stock: 6,
  },
  {
    id: "lampara-turca-basson-n3-50",
    slug: "lampara-turca-basson-n3-50",
    name: "Lámpara Turca de Basson Nº3 50cm",
    origin: "Turquía",
    category: "Lámparas Turcas, Faroles y Decoración Árabe",
    price: null, // TODO: pon tu precio real
    icon: "lantern",
    description: "Lámpara turca de pie modelo Basson nº3, 50 cm de altura, mosaico de cristales, colores variados.",
    stock: 8,
  },
  {
    id: "lampara-turca-meka-n3-10",
    slug: "lampara-turca-meka-n3-10",
    name: "M4-Lámpara Turca Meka nº3 10cm",
    origin: "Turquía",
    category: "Lámparas Turcas, Faroles y Decoración Árabe",
    price: null, // TODO: pon tu precio real
    icon: "lantern",
    description: "Lámpara turca pequeña modelo Meka nº3, 10 cm, mosaico de cristales, colores variados.",
    stock: 14,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
