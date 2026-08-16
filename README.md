# Tienda online Lakshmi

Web funcional con catálogo, carrito y pago real con tarjeta (Stripe),
lista para desplegar. Envío de ejemplo configurado para Canarias.

## Qué incluye ya funcionando
- Catálogo de productos con foto, precio y descripción.
- Carrito con cantidades (se guarda en el navegador del cliente).
- Pago con tarjeta real a través de **Stripe Checkout**.
- Cálculo de envío fijo a Canarias (editable).
- Páginas de pago confirmado / cancelado.

## Lo que tienes que hacer tú antes de cobrar de verdad

### 1. Crear tu cuenta de Stripe (pasarela de pago)
1. Entra en https://dashboard.stripe.com/register y crea la cuenta con los
   datos de la tienda (o del titular/autónomo).
2. Completa la activación de la cuenta (Stripe pide datos fiscales y
   bancarios para poder ingresarte el dinero).
3. En el panel, ve a **Desarrolladores → Claves de API** y copia:
   - "Clave publicable" → `pk_live_...`
   - "Clave secreta" → `sk_live_...`
   (Mientras pruebas, puedes usar las claves de "modo prueba" `pk_test_...`
   / `sk_test_...`, que no cobran de verdad.)

### 2. Configurar las claves en el proyecto
Copia `.env.example` a `.env.local` y pega tus claves:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxx
STRIPE_SECRET_KEY=sk_live_xxxx
NEXT_PUBLIC_SITE_URL=https://tu-dominio-final.com
```

### 3. Probar en local (opcional pero recomendado)
```
npm install
npm run dev
```
Abre http://localhost:3000

### 4. Publicar la web (la forma más rápida: Vercel, gratis)
1. Sube esta carpeta a un repositorio de GitHub.
2. Entra en https://vercel.com, "Add New Project" e importa el repositorio.
3. En "Environment Variables" añade las mismas 3 variables del paso 2.
4. Pulsa "Deploy". En 1-2 minutos tendrás la web pública en una URL tipo
   `https://lakshmi-store.vercel.app`.
5. (Opcional) En Vercel → Settings → Domains puedes conectar un dominio
   propio, por ejemplo `lakshmitienda.com`.

Con esto la tienda queda **online y cobrando de verdad** con tarjeta.

### 5. Recibir un email por cada pedido (productos + dirección de envío)

Por defecto Stripe solo manda un aviso básico (importe y ya). Para recibir
un email con el pedido completo (qué productos, cantidades y a qué
dirección hay que enviarlo), hay que activar 2 cosas:

**A) Crear cuenta gratis en Resend (envía los emails)**
1. Entra en https://resend.com y crea una cuenta gratuita con tu email de
   la tienda (hasta 3.000 emails/mes gratis).
2. Ve a "API Keys" → "Create API Key" y copia la clave (empieza por `re_`).
3. **Importante**: con el plan gratis, sin verificar un dominio propio,
   Resend solo permite enviar a la MISMA dirección de email con la que
   creaste la cuenta. Así que usa el email de la tienda tanto para crear
   la cuenta de Resend como para la variable `STORE_OWNER_EMAIL` de abajo.

**B) Registrar el webhook en Stripe (avisa cuando se completa un pago)**
1. En el dashboard de Stripe → Desarrolladores → Webhooks → "Añadir
   endpoint".
2. URL del endpoint: `https://TU-DOMINIO.vercel.app/api/webhook` (cambia
   por tu URL real de Vercel).
3. Evento a escuchar: `checkout.session.completed`.
4. Guarda y copia el "Signing secret" que te muestra (empieza por
   `whsec_`).

**C) Añadir las 3 variables nuevas en Vercel**
En Vercel → tu proyecto → Settings → Environment Variables, añade:
- `STRIPE_WEBHOOK_SECRET` → el `whsec_...` del paso B
- `RESEND_API_KEY` → el `re_...` del paso A
- `STORE_OWNER_EMAIL` → el email donde quieres recibir los pedidos

Después de añadirlas, haz un "Redeploy" del proyecto en Vercel para que
se apliquen. A partir de ahí, cada pedido pagado te llegará por email con
el detalle completo.

## Cómo poner los productos reales
Edita `lib/products.js`. Cada producto es un bloque como este:

```js
{
  id: "incienso-nag-champa",
  slug: "incienso-nag-champa",
  name: "Incienso Nag Champa (caja x20)",
  origin: "India",
  category: "Inciensos",
  price: 3.5,
  image: "/img/incienso-nag-champa.jpg",
  description: "Texto del producto...",
  stock: 40,
}
```
Las fotos van dentro de la carpeta `public/img/`. Sustituye la imagen
placeholder por la foto real con el mismo nombre de archivo, o cambia la
ruta en `image`.

## Aviso importante sobre Canarias (IGIC, no IVA)
Canarias está dentro de España pero **fuera** del territorio de aplicación
del IVA; se aplica el IGIC. Esto tiene dos implicaciones prácticas:

- **Fiscal:** los precios y la facturación deben calcularse con IGIC, no
  con IVA. Esto lo debe confirmar quien lleve la contabilidad/gestoría de
  la tienda; esta web no calcula impuestos automáticamente, muestra el
  precio final que tú definas.
- **Envíos:** Stripe permite restringir la recogida de dirección de envío
  a nivel de país (aquí está limitado a España), pero no permite
  restringirlo automáticamente solo a las islas Canarias. Se recomienda
  revisar manualmente que el código postal del pedido empiece por **35**
  o **38** antes de prepararlo, o ampliar más adelante la lógica de
  checkout para validarlo automáticamente.

## Qué se puede añadir más adelante (según necesidad)
- Panel para gestionar pedidos y stock sin tocar código.
- Emails automáticos de confirmación de pedido.
- Facturación automática (Stripe Tax / Facturae).
- Fotos múltiples por producto y variantes (tamaño, aroma, etc.).
- Traducción a inglés para clientes turistas.

## Estructura del proyecto
```
pages/            → páginas de la web (Next.js)
  index.js        → portada + catálogo
  producto/[slug].js → ficha de producto
  carrito.js      → carrito
  api/checkout.js → crea el pago en Stripe
  exito.js / cancelado.js
components/       → cabecera, pie, tarjeta de producto
context/          → estado del carrito
lib/products.js   → catálogo de productos (EDITAR AQUÍ)
styles/globals.css→ estilos de toda la web
```
