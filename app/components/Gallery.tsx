"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../lib/i18n";

const items = [
  {
    src: "/gallery/exterior-spanish.jpg",
    category: { en: "EXTERIOR · RESIDENTIAL", es: "EXTERIOR · RESIDENCIAL" },
    title: { en: "Spanish Revival Exterior", es: "Exterior Estilo Español" },
    desc: {
      en: "Full stucco repaint with custom Mediterranean trim color. Warm cream base, terracotta accents.",
      es: "Repintado completo de estuco con color de moldura mediterránea personalizado.",
    },
    span: "col-span-2",
  },
  {
    src: "/gallery/interior-living.jpg",
    category: { en: "INTERIOR · RESIDENTIAL", es: "INTERIOR · RESIDENCIAL" },
    title: { en: "Mid-Century Interior", es: "Interior Mid-Century" },
    desc: {
      en: "Full interior with bold terracotta accent wall. 1,800 sq ft, walls, ceilings, trim.",
      es: "Interior completo con pared de acento en terracota. 1,800 pies², paredes, techos y molduras.",
    },
    span: "col-span-1",
  },
  {
    src: "/gallery/commercial-warehouse.jpg",
    category: { en: "EXTERIOR · COMMERCIAL", es: "EXTERIOR · COMERCIAL" },
    title: { en: "Tilt-Up Warehouse Spray", es: "Almacén Tilt-Up en Pistola" },
    desc: {
      en: "Spray-painted tilt-up concrete walls on a 60,000 sq ft distribution center.",
      es: "Paredes de concreto tilt-up a pistola en un centro de distribución de 60,000 pies².",
    },
    span: "col-span-1",
  },
  {
    src: "/gallery/spider-lift-highwall.jpg",
    category: { en: "INDUSTRIAL · SPECIALTY", es: "INDUSTRIAL · ESPECIALIDAD" },
    title: { en: "High Wall · Spider Lift", es: "Muro Alto · Spider Lift" },
    desc: {
      en: "Painting high bay walls using a spider lift — reaching where ladders can't safely go.",
      es: "Pintura en muros de gran altura con spider lift — donde las escaleras no llegan con seguridad.",
    },
    span: "col-span-1",
  },
  {
    src: "/gallery/wood-stain-patio.jpg",
    category: { en: "SPECIALTY · STAIN", es: "ESPECIALIDAD · TINTE" },
    title: { en: "Patio Beams & Wood Ceiling", es: "Vigas y Techo de Madera" },
    desc: {
      en: "Spray stain on cedar beams and patio cover wood ceiling. Even penetration, no lap marks.",
      es: "Tinte en pistola sobre vigas de cedro y techo de madera de patio. Penetración uniforme.",
    },
    span: "col-span-1",
  },
  {
    src: "/gallery/roof-tile-spray.jpg",
    category: { en: "SPECIALTY · RESIDENTIAL", es: "ESPECIALIDAD · RESIDENCIAL" },
    title: { en: "Roof Tile Repaint", es: "Repintado de Tejas" },
    desc: {
      en: "Spray painting roof tiles on a residential property — prep-washed and sealed before coating.",
      es: "Repintado de tejas residenciales — lavadas y selladas antes de aplicar el recubrimiento.",
    },
    span: "col-span-2",
  },
  {
    src: "/scraped/gallery-hero.jpg",
    category: { en: "EXTERIOR · RESIDENTIAL", es: "EXTERIOR · RESIDENCIAL" },
    title: { en: "Completed Project", es: "Proyecto Terminado" },
    desc: {
      en: "One of 1,400+ completed projects across Southern California. Every surface prepped, every edge taped.",
      es: "Uno de más de 1,400 proyectos terminados en el sur de California. Cada superficie preparada.",
    },
    span: "col-span-1",
  },
];

export function Gallery() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "exterior" | "interior" | "commercial" | "specialty">("all");

  const filters: { key: typeof filter; en: string; es: string }[] = [
    { key: "all", en: "All Work", es: "Todo" },
    { key: "exterior", en: "Exterior", es: "Exterior" },
    { key: "interior", en: "Interior", es: "Interior" },
    { key: "commercial", en: "Commercial", es: "Comercial" },
    { key: "specialty", en: "Specialty", es: "Especialidad" },
  ];

  const filtered = items.filter((item) => {
    if (filter === "all") return true;
    return item.category.en.toLowerCase().includes(filter);
  });

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[color:var(--color-ink)] relative overflow-hidden">
      {/* background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,oklch(0.95 0 0) 39px,oklch(0.95 0 0) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,oklch(0.95 0 0) 39px,oklch(0.95 0 0) 40px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="section-num text-[color:var(--color-bone)]/40">§ 02</span>
              <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
              <span className="eyebrow text-[color:var(--color-bone)]/60">
                {t("COMPLETE PROJECTS", "PROYECTOS COMPLETOS")}
              </span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-bone)] max-w-[14ch]">
              {t("The work", "El trabajo")}
              <br />
              <span
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                  fontStyle: "italic",
                  color: "var(--color-terracotta)",
                }}
              >
                {t("speaks.", "habla solo.")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="font-body text-[16.5px] leading-[1.65] text-[color:var(--color-bone)]/70 max-w-[60ch]">
              {t(
                "From Spanish Revival exteriors to industrial spider-lift high walls — every project gets the same crew, the same prep, the same standard.",
                "Desde exteriores de estilo español hasta muros industriales de gran altura — cada proyecto recibe el mismo equipo, la misma preparación, el mismo estándar."
              )}
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-mono text-[11px] tracking-[0.24em] px-4 py-2.5 transition-all duration-300 ${
                filter === f.key
                  ? "bg-[color:var(--color-terracotta)] text-[color:var(--color-bone)]"
                  : "bg-[color:var(--color-bone)]/10 text-[color:var(--color-bone)]/60 hover:bg-[color:var(--color-bone)]/20 hover:text-[color:var(--color-bone)]"
              }`}
            >
              {t(f.en, f.es)}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(filtered.indexOf(item) === active ? null : filtered.indexOf(item))}
                className={`group relative overflow-hidden text-left ${
                  item.span === "col-span-2" ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title.en}
                    fill
                    sizes="(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Terracotta top bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[color:var(--color-terracotta)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 font-mono text-[9.5px] tracking-[0.26em] bg-[color:var(--color-ink)]/70 text-[color:var(--color-bone)] px-2.5 py-1.5 backdrop-blur-sm">
                    {t(item.category.en, item.category.es)}
                  </span>
                  {/* Title on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-display text-xl tracking-[-0.02em] text-[color:var(--color-bone)]">
                      {t(item.title.en, item.title.es)}
                    </h3>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-[color:var(--color-bone)]/60 mt-1">
                      {t("TAP TO EXPAND", "TOCA PARA VER")}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[color:var(--color-bone)]/10 pt-10">
          <p className="font-body text-[15px] text-[color:var(--color-bone)]/60">
            {t(
              "These are a handful. We've completed 1,400+ projects across SoCal.",
              "Estos son solo algunos. Hemos completado más de 1,400 proyectos en el sur de California."
            )}
          </p>
          <a
            href="#estimate"
            className="shrink-0 font-mono text-[11px] tracking-[0.28em] px-8 py-4 bg-[color:var(--color-terracotta)] text-[color:var(--color-bone)] hover:bg-[color:var(--color-bone)] hover:text-[color:var(--color-ink)] transition-colors duration-300"
          >
            {t("GET A FREE ESTIMATE", "PRESUPUESTO GRATIS")}
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[color:var(--color-ink)]/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full grid md:grid-cols-5 bg-[color:var(--color-paper)] cursor-default overflow-hidden"
            >
              <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto md:min-h-[55vh]">
                <Image
                  src={filtered[active].src}
                  alt={filtered[active].title.en}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[color:var(--color-terracotta)]" />
              </div>
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col gap-5">
                <span className="font-mono text-[10px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
                  {t(filtered[active].category.en, filtered[active].category.es)}
                </span>
                <h3 className="font-display text-3xl md:text-4xl tracking-[-0.025em] text-[color:var(--color-ink)] leading-[1.05]">
                  {t(filtered[active].title.en, filtered[active].title.es)}
                </h3>
                <div className="w-8 h-[2px] bg-[color:var(--color-terracotta)]" />
                <p className="font-body text-[15.5px] leading-[1.65] text-[color:var(--color-ink-soft)]">
                  {t(filtered[active].desc.en, filtered[active].desc.es)}
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <button
                    onClick={() => setActive(active > 0 ? active - 1 : filtered.length - 1)}
                    className="w-10 h-10 grid place-items-center border border-[color:var(--color-ink)]/15 hover:bg-[color:var(--color-terracotta)] hover:text-[color:var(--color-bone)] hover:border-[color:var(--color-terracotta)] transition-colors duration-300 font-mono text-lg"
                    aria-label="Previous"
                  >
                    ←
                  </button>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-ink-soft)]">
                    {active + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={() => setActive(active < filtered.length - 1 ? active + 1 : 0)}
                    className="w-10 h-10 grid place-items-center border border-[color:var(--color-ink)]/15 hover:bg-[color:var(--color-terracotta)] hover:text-[color:var(--color-bone)] hover:border-[color:var(--color-terracotta)] transition-colors duration-300 font-mono text-lg"
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-9 h-9 grid place-items-center bg-[color:var(--color-ink)]/80 text-[color:var(--color-bone)] hover:bg-[color:var(--color-terracotta)] transition-colors duration-300 text-lg z-10"
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
