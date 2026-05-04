// app/components/Story.tsx
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useI18n } from "../lib/i18n";
import { RollerWipe } from "./RollerWipe";

export function Story() {
  const { t } = useI18n();
  return (
    <section
      id="story"
      className="py-28 md:py-36 bg-[color:var(--color-bone)]/50 relative"
    >
      <RollerWipe color="var(--color-sage)" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* LEFT: image stack */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden blueprint-frame p-3"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/craft-hands.jpg"
                alt="Painter at work"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -bottom-6 left-3 font-mono text-[10px] tracking-[0.28em] text-[color:var(--color-ink-soft)]">
              FIG. 02 · TRIM CUT-IN, NORTH WINDOW
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden md:block absolute -bottom-12 -right-8 w-44 h-32 lg:w-56 lg:h-40 overflow-hidden ring-1 ring-[color:var(--color-ink)]/15 painted-edge"
          >
            <Image
              src="/images/swatches.jpg"
              alt="Paint swatches"
              fill
              sizes="220px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT: copy */}
        <div className="lg:col-span-7 lg:pl-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="section-num">§ 04</span>
            <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
            <span className="eyebrow">{t("THE STORY", "LA HISTORIA")}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-ink)] max-w-[16ch]"
          >
            {t(
              "Ismael started with one ladder in 2005.",
              "Ismael empezó con una escalera en 2005."
            )}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-[60ch]"
          >
            <p className="font-body text-[16px] leading-[1.7] text-[color:var(--color-ink-soft)]">
              {t(
                "Twenty years later he still walks every estimate himself, still tapes the trim before the kid does, still knocks on the door at 7:58 a.m. when the job says 8:00.",
                "Veinte años después todavía hace cada presupuesto en persona, todavía cubre los bordes antes que los nuevos, y toca la puerta a las 7:58 a.m. cuando el trabajo dice a las 8:00."
              )}
            </p>
            <p className="font-body text-[16px] leading-[1.7] text-[color:var(--color-ink-soft)]">
              {t(
                "What started as one painter and a 24-foot extension is now a small bilingual crew of family and longtime hands. We've never subcontracted, and we never will. The name on the truck is the name doing the work.",
                "Lo que empezó con un pintor y una escalera de 24 pies ahora es un pequeño equipo bilingüe de familia y empleados de muchos años. Nunca hemos subcontratado, y nunca lo haremos. El nombre del camión es quien hace el trabajo."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6"
          >
            {[
              { k: "Founded", v: "2005" },
              { k: "License", v: "CSLB #939153" },
              { k: "Crew", v: "3-6 hands" },
              { k: "Region", v: "SoCal · OC · IE · SD" },
              { k: "Subs", v: "None. Ever." },
              { k: "Lead", v: "Ismael Camarillo" },
            ].map((item) => (
              <div
                key={item.k}
                className="border-t border-[color:var(--color-ink)]/15 pt-3"
              >
                <span className="eyebrow">{item.k}</span>
                <p className="font-display text-xl mt-1 tracking-[-0.025em]">
                  {item.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
