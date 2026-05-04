"use client";

import { motion } from "motion/react";
import { useI18n } from "../lib/i18n";
import { stats } from "../lib/content";

export function StatsRow() {
  const { t } = useI18n();
  return (
    <section className="border-y border-[color:var(--color-ink)]/10 bg-[color:var(--color-bone)]/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[color:var(--color-ink)]/10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="py-10 lg:py-14 px-2 lg:px-8 flex flex-col gap-3"
          >
            <span className="font-display ticker text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-[color:var(--color-ink)]">
              {s.n}
            </span>
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-ink-soft)] leading-relaxed max-w-[20ch]">
              {t(s.label.en, s.label.es)}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
