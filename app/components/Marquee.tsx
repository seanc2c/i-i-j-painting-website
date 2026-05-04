"use client";

import { useI18n } from "../lib/i18n";
import { audiences } from "../lib/content";

export function Marquee() {
  const { t } = useI18n();
  const items = [...audiences, ...audiences];
  return (
    <section
      aria-hidden
      className="dark-atmos py-6 overflow-hidden border-y border-[color:var(--color-bone)]/10"
    >
      <div className="marquee">
        {items.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-8 whitespace-nowrap font-mono text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-bone)]/65"
          >
            <span>{t(a.en, a.es)}</span>
            <span className="text-[color:var(--color-terracotta)]">●</span>
          </div>
        ))}
      </div>
    </section>
  );
}
