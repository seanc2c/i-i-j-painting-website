"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useI18n } from "../lib/i18n";
import { portfolio } from "../lib/content";

const paletteColor: Record<string, string> = {
  ink: "var(--color-ink)",
  bone: "var(--color-bone)",
  terracotta: "var(--color-terracotta)",
  clay: "var(--color-clay)",
  blueprint: "var(--color-blueprint)",
  sage: "var(--color-sage)",
};

export function Portfolio() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="py-28 md:py-36 bg-[color:var(--color-paper)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="section-num">§ 01</span>
              <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
              <span className="eyebrow">
                {t("RECENT WORK", "TRABAJOS RECIENTES")}
              </span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-ink)] max-w-[14ch]">
              {t("Houses,", "Casas,")}
              <br />
              <span
                style={{
                  fontVariationSettings:
                    '"opsz" 144, "SOFT" 100, "WONK" 1',
                  fontStyle: "italic",
                  color: "var(--color-terracotta)",
                }}
              >
                {t("on display.", "a la vista.")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="font-body text-[16.5px] leading-[1.65] text-[color:var(--color-ink-soft)] max-w-[60ch]">
              {t(
                "Three from the last eighteen months. Click any photo for the brief — what was on the wall, what we did, how long it took.",
                "Tres trabajos de los últimos dieciocho meses. Haz click para ver detalles — qué había, qué hicimos, cuánto tomó."
              )}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {portfolio.map((p, i) => (
            <motion.button
              key={p.slug}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group text-left flex flex-col gap-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--color-bone-deep)]">
                <Image
                  src={p.image}
                  alt={p.title.en}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                {/* Year tag */}
                <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.28em] bg-[color:var(--color-ink)] text-[color:var(--color-bone)] px-2.5 py-1.5">
                  {p.year}
                </span>
                {/* Hover ink */}
                <span className="absolute inset-0 bg-[color:var(--color-ink)]/0 group-hover:bg-[color:var(--color-ink)]/10 transition-colors duration-500" />
                {/* Palette dots */}
                <div className="absolute bottom-4 left-4 flex gap-1.5">
                  {p.palette.map((c) => (
                    <span
                      key={c}
                      className="block w-3 h-3 rounded-full ring-1 ring-white/40"
                      style={{ background: paletteColor[c] }}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="font-mono text-[10.5px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
                  {t(p.category.en, p.category.es)}
                </span>
                <h3 className="font-display text-2xl tracking-[-0.025em] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-terracotta)] transition-colors duration-500">
                  {t(p.title.en, p.title.es)}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.18em] text-[color:var(--color-ink-soft)]">
                  {t("FINISHED IN", "TERMINADO EN")} ·{" "}
                  {t(p.duration.en, p.duration.es).toUpperCase()}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setActive(null)}
            className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full grid md:grid-cols-2 gap-0 bg-[color:var(--color-paper)] cursor-default"
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[60vh] overflow-hidden">
                <Image
                  src={portfolio[active].image}
                  alt={portfolio[active].title.en}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col gap-6">
                <span className="font-mono text-[10.5px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
                  {t(portfolio[active].category.en, portfolio[active].category.es)}{" "}
                  · {portfolio[active].year}
                </span>
                <h3 className="font-display text-4xl tracking-[-0.025em] text-[color:var(--color-ink)]">
                  {t(portfolio[active].title.en, portfolio[active].title.es)}
                </h3>
                <p className="font-body text-[16px] leading-[1.65] text-[color:var(--color-ink-soft)]">
                  {t(portfolio[active].summary.en, portfolio[active].summary.es)}
                </p>
                <div className="hairline-h" />
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="eyebrow">
                      {t("DURATION", "DURACIÓN")}
                    </span>
                    <p className="font-display text-2xl mt-1">
                      {t(portfolio[active].duration.en, portfolio[active].duration.es)}
                    </p>
                  </div>
                  <div>
                    <span className="eyebrow">{t("PALETTE", "PALETA")}</span>
                    <div className="flex gap-2 mt-2">
                      {portfolio[active].palette.map((c) => (
                        <span
                          key={c}
                          className="block w-8 h-8 ring-1 ring-[color:var(--color-ink)]/15"
                          style={{ background: paletteColor[c] }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="self-start mt-4 btn-ghost"
                >
                  {t("Close", "Cerrar")}
                </button>
              </div>
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 grid place-items-center text-[color:var(--color-ink)] bg-[color:var(--color-bone)]/80 hover:bg-[color:var(--color-terracotta)] hover:text-[color:var(--color-bone)] transition-colors"
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
