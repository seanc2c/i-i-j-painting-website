"use client";

import { motion } from "motion/react";
import { useI18n } from "../lib/i18n";
import { services } from "../lib/content";
import { RollerWipe } from "./RollerWipe";

const colorMap: Record<string, string> = {
  terracotta: "var(--color-terracotta)",
  blueprint: "var(--color-blueprint)",
  sage: "var(--color-sage)",
  rust: "var(--color-rust)",
};

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-28 md:py-36 relative">
      <RollerWipe color="var(--color-blueprint)" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="section-num">§ 02</span>
              <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
              <span className="eyebrow">
                {t("WHAT WE PAINT", "QUÉ PINTAMOS")}
              </span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-ink)] max-w-[18ch]">
              {t(
                "Four trades. One crew. Every job finished by hand.",
                "Cuatro especialidades. Un solo equipo. Todo terminado a mano."
              )}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[color:var(--color-ink)]/10">
          {services.map((s, i) => (
            <motion.article
              key={s.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[color:var(--color-paper)] p-10 md:p-14 flex flex-col gap-6 transition-colors duration-500 hover:bg-[color:var(--color-bone)]"
            >
              <header className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
                  § {s.code} · {t(s.tag.en, s.tag.es)}
                </span>
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{ background: colorMap[s.color] }}
                />
              </header>
              <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-[-0.025em] text-[color:var(--color-ink)] max-w-[18ch]">
                {t(s.title.en, s.title.es)}
              </h3>
              <p className="font-body text-[15.5px] leading-[1.6] text-[color:var(--color-ink-soft)] max-w-[55ch]">
                {t(s.blurb.en, s.blurb.es)}
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2">
                {s.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="font-mono text-[11px] tracking-[0.18em] text-[color:var(--color-ink)] flex items-center gap-2"
                  >
                    <span
                      className="block w-1 h-1 rounded-full"
                      style={{ background: colorMap[s.color] }}
                    />
                    {t(b.en, b.es).toUpperCase()}
                  </li>
                ))}
              </ul>
              <div
                className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                style={{ background: colorMap[s.color] }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
