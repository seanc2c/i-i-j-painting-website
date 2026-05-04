"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useI18n } from "../lib/i18n";
import { hero, business } from "../lib/content";
import { BlueprintScene } from "./BlueprintScene";
import { BrushUnderline } from "./BrushUnderline";
import { RollerWipe } from "./RollerWipe";
import { Drips } from "./Drips";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-24 md:pt-28 pb-20 overflow-hidden paint-strokes-bg"
    >
      <RollerWipe color="var(--color-ink)" height={4} delay={0.2} />
      {/* Editorial split layout: text left, image right with blueprint margins */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end relative z-10">
        {/* TEXT COLUMN */}
        <div className="lg:col-span-7 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[color:var(--color-terracotta)]" />
            <span className="eyebrow">{t(hero.eyebrow.en, hero.eyebrow.es)}</span>
          </motion.div>

          <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[7.5vw] xl:text-[110px] leading-[0.92] tracking-[-0.04em] text-[color:var(--color-ink)]">
            {[hero.headlineLine1, hero.headlineLine2, hero.headlineLine3].map(
              (line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.25 + i * 0.12,
                  }}
                  className="block relative"
                  style={{
                    fontVariationSettings: `"opsz" 144, "SOFT" ${
                      i === 1 ? 100 : 30
                    }, "WONK" ${i === 1 ? 1 : 0}`,
                    fontStyle: i === 1 ? "italic" : "normal",
                    color:
                      i === 1
                        ? "var(--color-terracotta)"
                        : "var(--color-ink)",
                  }}
                >
                  {t(line.en, line.es)}
                  {i === 1 && (
                    <BrushUnderline
                      color="var(--color-terracotta)"
                      delay={1.4}
                      duration={1.5}
                      thickness={20}
                    />
                  )}
                </motion.span>
              )
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="font-body text-[17px] md:text-[18px] leading-[1.55] text-[color:var(--color-ink-soft)] mt-10 max-w-[55ch]"
          >
            {t(hero.sub.en, hero.sub.es)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#estimate" className="btn-ink">
              <span>{t(hero.ctaPrimary.en, hero.ctaPrimary.es)}</span>
              <span className="opacity-70">→</span>
              <Drips />
            </a>
            <a href="#work" className="btn-ghost">
              <span>{t(hero.ctaSecondary.en, hero.ctaSecondary.es)}</span>
              <Drips />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 items-center"
          >
            <span
              className="swatch"
              style={
                {
                  ["--swatch-color" as string]: "var(--color-ink)",
                } as React.CSSProperties
              }
            >
              Ink
            </span>
            <span
              className="swatch"
              style={
                {
                  ["--swatch-color" as string]: "var(--color-bone)",
                } as React.CSSProperties
              }
            >
              Bone
            </span>
            <span
              className="swatch"
              style={
                {
                  ["--swatch-color" as string]: "var(--color-terracotta)",
                } as React.CSSProperties
              }
            >
              Clay
            </span>
            <a
              href={`tel:${business.phoneRaw}`}
              className="font-mono text-[11px] tracking-[0.28em] text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-terracotta)]"
            >
              {business.phone}
            </a>
          </motion.div>
        </div>

        {/* IMAGE COLUMN — editorial blueprint frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative blueprint-frame p-3">
            {/* Technical labels */}
            <div className="absolute -top-6 left-3 font-mono text-[10px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
              FIG. 01 · PREP &amp; FIRST COAT
            </div>
            <div className="absolute -bottom-6 right-3 font-mono text-[10px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
              35.0° N · 117.0° W
            </div>

            <div className="relative aspect-[3/4] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/hero-craftsman.jpg"
                alt="Craftsman bungalow being repainted"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {/* Subtle film grain overlay */}
              <div
                className="absolute inset-0 mix-blend-multiply opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 30% 90%, rgba(141, 63, 36, 0.4), transparent 60%), radial-gradient(ellipse at 70% 10%, rgba(26, 34, 56, 0.3), transparent 60%)",
                }}
              />
            </div>
          </div>

          {/* Floating 3D scene (R3F) */}
          <div className="absolute -bottom-8 -left-8 hidden md:block w-32 h-32 lg:w-40 lg:h-40">
            <BlueprintScene />
          </div>
        </motion.div>
      </div>

      {/* Bottom marker */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-24 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <div className="hidden lg:block hairline-h col-span-4 mb-6" />
      </div>

      {/* Atmospheric background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, rgba(194, 94, 60, 0.08), transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(46, 73, 122, 0.06), transparent 60%)",
        }}
      />
    </section>
  );
}
