"use client";

import { motion } from "motion/react";
import { useI18n } from "../lib/i18n";
import { testimonials } from "../lib/content";

export function Voices() {
  const { t } = useI18n();
  return (
    <section
      id="voices"
      className="py-28 md:py-36 bg-[color:var(--color-paper)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="section-num">§ 05</span>
              <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
              <span className="eyebrow">
                {t("CLIENT VOICES", "VOCES DE CLIENTES")}
              </span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-ink)] max-w-[12ch]">
              {t("People talk.", "La gente habla.")}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="font-body text-[16.5px] leading-[1.65] text-[color:var(--color-ink-soft)] max-w-[55ch]">
              {t(
                "Six unedited reviews from homes between La Habra and San Diego. We didn't ask for them. We just got them.",
                "Seis reseñas reales, sin editar, de casas entre La Habra y San Diego. No las pedimos. Solo llegaron."
              )}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-ink)]/10">
          {testimonials.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[color:var(--color-paper)] p-10 lg:p-12 flex flex-col gap-8 group hover:bg-[color:var(--color-bone)]/50 transition-colors duration-500"
            >
              <span
                aria-hidden
                className="font-display text-7xl leading-none -mb-6 text-[color:var(--color-terracotta)]"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                &ldquo;
              </span>
              <blockquote className="font-display text-[19px] md:text-[20px] leading-[1.45] tracking-[-0.015em] text-[color:var(--color-ink)]">
                {t(q.quote.en, q.quote.es)}
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-[color:var(--color-ink)]/10">
                <p className="font-display text-[18px] tracking-[-0.02em]">
                  {q.name}
                </p>
                <p className="font-mono text-[10.5px] tracking-[0.24em] text-[color:var(--color-ink-soft)] mt-1">
                  {q.city.toUpperCase()}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
