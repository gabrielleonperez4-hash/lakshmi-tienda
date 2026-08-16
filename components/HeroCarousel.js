import { useEffect, useState } from "react";
import Link from "next/link";
import ProductIcon from "./ProductIcon";

const SLIDES = [
  { icon: "bowl", label: "Cuencos tibetanos", category: "Cuencos tibetanos" },
  { icon: "statue", label: "Budas", category: "Budas" },
  { icon: "incense", label: "Inciensos", category: "Inciensos" },
  {
    icon: "jewelry",
    label: "Bisutería Esotérica",
    category: "Bisutería Esotérica, Llaveros y Amuletos",
  },
  { icon: "dreamcatcher", label: "Atrapasueños", category: "Complementos y Atrapasueños" },
  { icon: "cards", label: "Barajas y Oráculos", category: "Barajas y Oráculos esotéricos" },
];

const INTERVAL_MS = 4000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[index];

  return (
    <section className="hero-carousel">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          className={`hero-slide${i === index ? " active" : ""}`}
          aria-hidden={i !== index}
        >
          <ProductIcon icon={slide.icon} className="hero-slide-icon" />
        </div>
      ))}

      <div className="hero-carousel-overlay">
        <span className="eyebrow">Lo más vendido</span>
        <h1 className="hero-carousel-title">{current.label}</h1>
        <Link
          href={`/?categoria=${encodeURIComponent(current.category)}#catalogo`}
          className="btn"
        >
          Ver colección
        </Link>
      </div>

      <div className="hero-dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            className={`hero-dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ver ${slide.label}`}
          />
        ))}
      </div>
    </section>
  );
}
