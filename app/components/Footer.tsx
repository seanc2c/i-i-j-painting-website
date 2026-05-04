"use client";

import { useI18n } from "../lib/i18n";
import { LogoMark } from "./LogoMark";
import { business, nav } from "../lib/content";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-paper)] border-t border-[color:var(--color-ink)]/10 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <LogoMark className="h-12 w-auto text-[color:var(--color-ink)]" showWordmark={false} />
          <p className="mt-6 font-display text-2xl tracking-[-0.025em] text-[color:var(--color-ink)] max-w-[24ch]">
            {t(
              "Twenty years painting Southern California, one wall at a time.",
              "Veinte años pintando el sur de California, una pared a la vez."
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href={`tel:${business.phoneRaw}`}
              className="font-display text-xl tracking-[-0.025em] hover:text-[color:var(--color-terracotta)]"
            >
              {business.phone}
            </a>
            <span className="opacity-30">·</span>
            <a
              href={`mailto:${business.email}`}
              className="font-mono text-[12px] tracking-[0.18em] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-terracotta)]"
            >
              {business.email}
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <span className="eyebrow">{t("Site", "Sitio")}</span>
          <ul className="mt-4 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="font-display text-lg hover:text-[color:var(--color-terracotta)]"
                >
                  {t(n.en, n.es)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <span className="eyebrow">{t("Service area", "Área de servicio")}</span>
          <p className="mt-4 font-body text-[15px] leading-[1.65] text-[color:var(--color-ink-soft)]">
            {t(business.serviceArea.en, business.serviceArea.es)}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
            {[
              "La Habra",
              "Irvine",
              "Temecula",
              "San Diego",
              "Anaheim",
              "Riverside",
              "Long Beach",
              "Carlsbad",
            ].map((c) => (
              <span
                key={c}
                className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-ink-soft)]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16 pt-8 border-t border-[color:var(--color-ink)]/10 flex flex-wrap gap-6 justify-between items-center">
        <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-ink-soft)]">
          © {year} I &amp; I J Painting · {business.license} · {t(
            "Licensed · Bonded · Insured",
            "Con licencia · Asegurado"
          )}
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-ink-soft)]">
          {t("Site by", "Sitio por")}{" "}
          <a
            href="https://pixelcrewlabs.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--color-terracotta)]"
          >
            Pixel Crew Labs
          </a>
        </span>
      </div>
    </footer>
  );
}
