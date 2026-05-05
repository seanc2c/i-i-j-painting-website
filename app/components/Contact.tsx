// app/components/Contact.tsx
"use client";

import { motion } from "motion/react";
import { useI18n } from "../lib/i18n";
import { business } from "../lib/content";
import { RollerWipe } from "./RollerWipe";

export function Contact() {
  const { t } = useI18n();

  const pillars = [
    {
      kind: t("CALL", "LLAMA"),
      label: t("Talk to Ismael", "Habla con Ismael"),
      value: business.phone,
      href: `tel:${business.phoneRaw}`,
      meta: t(
        "Most days he answers himself. If not, he calls back same day.",
        "Casi siempre contesta él. Si no, te regresa la llamada el mismo día."
      ),
      mono: business.phoneRaw,
    },
    {
      kind: t("WRITE", "ESCRIBE"),
      label: t("Send the details", "Manda los detalles"),
      value: business.email,
      href: `mailto:${business.email}`,
      meta: t(
        "Photos help. Square footage helps more. We reply within a business day.",
        "Las fotos ayudan. Los pies cuadrados ayudan más. Respondemos en un día laboral."
      ),
      mono: "24-HR REPLY",
    },
    {
      kind: t("VISIT", "VISITA"),
      label: t("Where we work", "Dónde trabajamos"),
      value: t("SoCal", "SoCal"),
      href: "#estimate",
      meta: t(business.serviceArea.en, business.serviceArea.es),
      mono: business.license,
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 md:py-36 bg-[color:var(--color-bone)] relative overflow-hidden"
    >
      <RollerWipe color="var(--color-blueprint)" height={4} />

      {/* faint grain / texture lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--color-ink) 0 1px, transparent 1px 28px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="section-num">§ 06</span>
              <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
              <span className="eyebrow">
                {t("GET IN TOUCH", "CONTACTO")}
              </span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-ink)] max-w-[14ch]">
              {t("Three ways", "Tres formas")}
              <br />
              <span
                className="italic"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                  color: "var(--color-terracotta)",
                }}
              >
                {t("to start.", "de empezar.")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="font-body text-[16.5px] leading-[1.65] text-[color:var(--color-ink-soft)] max-w-[42ch]">
              {t(
                "No call centers, no chat bots, no ten-page intake form. Pick whichever feels easiest — they all land on the same phone.",
                "Sin call centers, sin chat bots, sin formulario de diez páginas. Elige el que prefieras — todos llegan al mismo teléfono."
              )}
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-[color:var(--color-ink)]/10 border border-[color:var(--color-ink)]/10">
          {pillars.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-[color:var(--color-paper)] p-10 lg:p-12 flex flex-col gap-8 hover:bg-[color:var(--color-bone)]/60 transition-colors duration-500 relative"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.28em] text-[color:var(--color-terracotta)]">
                  0{i + 1} · {p.kind}
                </span>
                <span
                  aria-hidden
                  className="font-mono text-[18px] text-[color:var(--color-ink)]/40 group-hover:text-[color:var(--color-terracotta)] group-hover:translate-x-1 transition-all duration-300"
                >
                  ↗
                </span>
              </div>

              <div>
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-ink-soft)] mb-3">
                  {p.label}
                </p>
                <p
                  className="font-display text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.025em] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-terracotta)] transition-colors duration-300 break-words"
                >
                  {p.value}
                </p>
              </div>

              <p className="font-body text-[14.5px] leading-[1.6] text-[color:var(--color-ink-soft)] max-w-[34ch]">
                {p.meta}
              </p>

              <div className="mt-auto pt-6 border-t border-[color:var(--color-ink)]/10">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-ink-soft)]">
                  {p.mono}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Hours + response strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid md:grid-cols-3 gap-6 md:gap-10"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10.5px] tracking-[0.24em] text-[color:var(--color-terracotta)]">
              HRS
            </span>
            <span className="font-display text-[18px] tracking-[-0.015em] text-[color:var(--color-ink)]">
              {t("Mon–Sat · 7am to 7pm", "Lun–Sáb · 7am a 7pm")}
            </span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10.5px] tracking-[0.24em] text-[color:var(--color-terracotta)]">
              ETA
            </span>
            <span className="font-display text-[18px] tracking-[-0.015em] text-[color:var(--color-ink)]">
              {t(
                "Walk-throughs scheduled within 48 hours",
                "Visitas en menos de 48 horas"
              )}
            </span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10.5px] tracking-[0.24em] text-[color:var(--color-terracotta)]">
              EN/ES
            </span>
            <span className="font-display text-[18px] tracking-[-0.015em] text-[color:var(--color-ink)]">
              {t("Bilingual crew, both ways", "Equipo bilingüe, ambos idiomas")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
