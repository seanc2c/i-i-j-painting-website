"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../lib/i18n";
import { LogoMark } from "./LogoMark";
import { business, nav } from "../lib/content";
import { Drips } from "./Drips";

export function Header() {
  const { lang, toggle, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[color:var(--color-paper)]/92 backdrop-blur-md border-b border-[color:var(--color-ink)]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 text-[color:var(--color-ink)]"
        >
          <LogoMark className="h-9 md:h-10 w-auto" showWordmark={false} />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[15px] tracking-tight">
              I &amp; I J Painting
            </span>
            <span className="font-mono text-[9px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
              EST. 2005 · CSLB #939153
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/70 hover:text-[color:var(--color-terracotta)] transition-colors"
            >
              {t(item.en, item.es)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="font-mono text-[11px] tracking-[0.22em] flex items-center gap-1.5 text-[color:var(--color-ink)] hover:text-[color:var(--color-terracotta)] transition-colors"
          >
            <span className={lang === "en" ? "" : "opacity-40"}>EN</span>
            <span className="opacity-30">/</span>
            <span className={lang === "es" ? "" : "opacity-40"}>ES</span>
          </button>
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden md:inline-flex font-mono text-[11px] tracking-[0.22em] text-[color:var(--color-ink)] hover:text-[color:var(--color-terracotta)] transition-colors"
          >
            {business.phone}
          </a>
          <a
            href="#estimate"
            className="hidden md:inline-flex btn-ink !py-2.5 !px-4"
          >
            <span>{t("Free Estimate", "Presupuesto")}</span>
            <Drips />
          </a>
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`block h-px w-6 bg-[color:var(--color-ink)] transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[color:var(--color-ink)] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[color:var(--color-ink)] transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[color:var(--color-paper)] border-t border-[color:var(--color-ink)]/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-[color:var(--color-ink)]"
                >
                  {t(item.en, item.es)}
                </a>
              ))}
              <div className="hairline-h my-2" />
              <a
                href={`tel:${business.phoneRaw}`}
                className="font-mono text-sm tracking-wider text-[color:var(--color-terracotta)]"
              >
                {business.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
