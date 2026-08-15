// Ilustraciones vectoriales propias (sin depender de imágenes externas).
// EDITA/BORRA este componente cuando subas fotos reales: en ProductCard.js
// y en pages/producto/[slug].js sustituye <ProductIcon /> por
// <img src={product.image} alt={product.name} />.

const paths = {
  incense: (
    <>
      <path d="M60 20c6 8-6 12 0 20s-6 12 0 20" stroke="var(--marigold-deep)" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <rect x="58" y="55" width="4" height="45" rx="2" fill="var(--brass)" />
      <ellipse cx="60" cy="102" rx="22" ry="5" fill="var(--paper-dim)" stroke="var(--line)" />
      <circle cx="60" cy="52" r="3" fill="var(--marigold)" />
    </>
  ),
  bowl: (
    <>
      <path d="M30 70a30 18 0 0060 0" stroke="var(--brass)" strokeWidth="3" fill="var(--marigold)" fillOpacity=".18" />
      <path d="M25 70h70" stroke="var(--brass)" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 45c6-8 34-8 40 0" stroke="var(--indigo)" strokeWidth="2" opacity=".35" strokeLinecap="round" />
      <path d="M46 33c4-5 24-5 28 0" stroke="var(--indigo)" strokeWidth="2" opacity=".25" strokeLinecap="round" />
      <line x1="78" y1="78" x2="94" y2="90" stroke="var(--brass)" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  statue: (
    <>
      <path d="M60 22a14 14 0 100 28 14 14 0 000-28z" fill="var(--marigold)" fillOpacity=".3" stroke="var(--brass)" strokeWidth="2" />
      <path d="M40 96c0-22 9-34 20-34s20 12 20 34" stroke="var(--indigo)" strokeWidth="2.5" fill="var(--paper)" opacity=".7" />
      <path d="M32 78c4-10 8-4 8 6M88 78c-4-10-8-4-8 6" stroke="var(--brass)" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="60" cy="98" rx="26" ry="5" fill="var(--line)" opacity=".5" />
    </>
  ),
  lantern: (
    <>
      <path d="M45 30h30l6 12H39z" fill="var(--brass)" opacity=".5" />
      <path d="M40 42c0 24 6 40 20 40s20-16 20-40" stroke="var(--brass)" strokeWidth="2.5" fill="var(--marigold)" fillOpacity=".22" />
      <path d="M40 42h40M42 58h36M42 74h36" stroke="var(--brass)" strokeWidth="1.5" opacity=".6" />
      <rect x="56" y="82" width="8" height="10" fill="var(--brass)" opacity=".6" />
      <line x1="60" y1="18" x2="60" y2="30" stroke="var(--brass)" strokeWidth="2" />
    </>
  ),
  mala: (
    <>
      <circle cx="60" cy="60" r="34" stroke="var(--brass)" strokeWidth="1.5" strokeDasharray="3 6" opacity=".5" />
      <g fill="var(--marigold)" opacity=".85">
        <circle cx="60" cy="26" r="5" /><circle cx="84" cy="36" r="5" /><circle cx="94" cy="60" r="5" />
        <circle cx="84" cy="84" r="5" /><circle cx="60" cy="94" r="5" /><circle cx="36" cy="84" r="5" />
        <circle cx="26" cy="60" r="5" /><circle cx="36" cy="36" r="5" />
      </g>
      <circle cx="60" cy="60" r="7" fill="var(--indigo)" />
    </>
  ),
  diffuser: (
    <>
      <path d="M46 50h28v34a14 14 0 01-28 0z" fill="var(--marigold)" fillOpacity=".2" stroke="var(--brass)" strokeWidth="2.5" />
      <rect x="52" y="38" width="16" height="12" fill="var(--brass)" opacity=".6" />
      <path d="M52 26c2 4-2 5 0 9M60 24c2 4-2 5 0 9M68 26c2 4-2 5 0 9" stroke="var(--indigo)" strokeWidth="2" strokeLinecap="round" opacity=".4" />
    </>
  ),
  candle: (
    <>
      <rect x="44" y="46" width="32" height="52" rx="3" fill="var(--marigold)" fillOpacity=".22" stroke="var(--brass)" strokeWidth="2.5" />
      <line x1="44" y1="62" x2="76" y2="62" stroke="var(--brass)" strokeWidth="1.5" opacity=".5" />
      <line x1="44" y1="78" x2="76" y2="78" stroke="var(--brass)" strokeWidth="1.5" opacity=".5" />
      <path d="M60 30c-6 8 2 10 0 16" stroke="var(--marigold-deep)" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      <ellipse cx="60" cy="40" rx="4" ry="6" fill="var(--marigold)" />
    </>
  ),
  dreamcatcher: (
    <>
      <circle cx="60" cy="46" r="26" stroke="var(--brass)" strokeWidth="2.5" fill="none" />
      <path d="M40 32a26 26 0 0040-4M36 52a26 26 0 0048 8M40 62a26 26 0 0040 6" stroke="var(--indigo)" strokeWidth="1.2" opacity=".4" fill="none" />
      <path d="M46 70l-6 24M60 72l0 26M74 70l6 24" stroke="var(--brass)" strokeWidth="1.5" strokeLinecap="round" opacity=".7" />
      <circle cx="40" cy="94" r="3" fill="var(--marigold)" /><circle cx="60" cy="98" r="3" fill="var(--marigold)" /><circle cx="80" cy="94" r="3" fill="var(--marigold)" />
    </>
  ),
  crystal: (
    <>
      <path d="M60 18l20 26-20 58-20-58z" fill="var(--marigold)" fillOpacity=".2" stroke="var(--brass)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M40 44h40M60 18v84" stroke="var(--indigo)" strokeWidth="1.2" opacity=".35" />
    </>
  ),
  cards: (
    <>
      <rect x="36" y="30" width="34" height="52" rx="4" transform="rotate(-8 53 56)" fill="var(--paper)" stroke="var(--brass)" strokeWidth="2" />
      <rect x="50" y="34" width="34" height="52" rx="4" fill="var(--marigold)" fillOpacity=".18" stroke="var(--brass)" strokeWidth="2.5" />
      <circle cx="67" cy="60" r="10" stroke="var(--indigo)" strokeWidth="1.5" opacity=".5" fill="none" />
      <line x1="67" y1="50" x2="67" y2="70" stroke="var(--indigo)" strokeWidth="1.2" opacity=".4" />
    </>
  ),
};

export default function ProductIcon({ icon, className }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {paths[icon] || paths.incense}
    </svg>
  );
}
