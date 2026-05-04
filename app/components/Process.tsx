"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useI18n } from "../lib/i18n";
import { process } from "../lib/content";

export function Process() {
  const { t } = useI18n();
  return (
    <section className="dark-atmos py-28 md:py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.28em] text-[color:var(--color-terracotta)]">
                § 03
              </span>
              <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
              <span className="eyebrow-on-dark">
                {t("HOW WE WORK", "CÓMO TRABAJAMOS")}
              </span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-bone)]">
              {t("Five steps.", "Cinco pasos.")}
              <br />
              <span
                className="italic"
                style={{
                  fontVariationSettings:
                    '"opsz" 144, "SOFT" 100, "WONK" 1',
                  color: "var(--color-terracotta)",
                }}
              >
                {t("No skips.", "Sin atajos.")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="font-body text-[16px] md:text-[17px] leading-[1.65] text-[color:var(--color-bone)]/75 max-w-[55ch]">
              {t(
                "Most painting failures aren't the paint — they're the prep. After twenty years we know exactly which corner the cheaper crew cut, and we don't cut it. Here's the order, every time.",
                "La mayoría de los problemas no son la pintura — es la preparación. Después de veinte años sabemos qué pasos saltan los demás, y nosotros no los saltamos. Este es el orden, siempre."
              )}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 relative">
          {/* Brush atmosphere image, absolutely placed behind grid for vibe */}
          <div className="hidden lg:block absolute -top-20 -right-32 w-[420px] h-[280px] opacity-20 pointer-events-none">
            <Image
              src="/images/texture-brush.jpg"
              alt=""
              fill
              className="object-cover painted-edge"
              sizes="420px"
            />
          </div>

          {process.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <div className="border-t border-[color:var(--color-bone)]/20 pt-6">
                <span className="font-mono text-[12px] tracking-[0.22em] text-[color:var(--color-terracotta)]">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-2xl md:text-[26px] tracking-[-0.025em] text-[color:var(--color-bone)]">
                  {t(step.title.en, step.title.es)}
                </h3>
                <p className="mt-4 font-body text-[14.5px] leading-[1.6] text-[color:var(--color-bone)]/70">
                  {t(step.body.en, step.body.es)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
