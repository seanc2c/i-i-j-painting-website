"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useI18n } from "../lib/i18n";
import { business, trustBadges } from "../lib/content";
import { RollerWipe } from "./RollerWipe";
import { Drips } from "./Drips";

export function Estimate() {
  const { t, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    notes: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // mailto fallback — keeps the form free of backend dependencies for v1
    const subject =
      lang === "es"
        ? `Pedido de presupuesto · ${form.name}`
        : `Estimate request · ${form.name}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject: ${form.project}\n\n${form.notes}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section
      id="estimate"
      className="dark-atmos py-28 md:py-36 relative overflow-hidden"
    >
      <RollerWipe color="var(--color-terracotta)" height={5} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.28em] text-[color:var(--color-terracotta)]">
              § 06
            </span>
            <span className="block w-6 h-px bg-[color:var(--color-terracotta)]" />
            <span className="eyebrow-on-dark">
              {t("FREE ESTIMATE", "PRESUPUESTO GRATIS")}
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-[color:var(--color-bone)] max-w-[12ch]">
            {t("Tell us about", "Cuéntanos sobre")}
            <br />
            <span
              className="italic"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                color: "var(--color-terracotta)",
              }}
            >
              {t("the wall.", "la pared.")}
            </span>
          </h2>
          <p className="mt-8 font-body text-[16px] leading-[1.7] text-[color:var(--color-bone)]/75 max-w-[50ch]">
            {t(
              "Ismael answers the phone himself most of the time. Walk-throughs are free, take 20 minutes, and we'll have your written estimate before we leave.",
              "Ismael contesta el teléfono personalmente la mayoría del tiempo. La visita es gratis, dura 20 minutos, y dejamos el presupuesto escrito antes de irnos."
            )}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-4">
            <a
              href={`tel:${business.phoneRaw}`}
              className="font-display text-3xl text-[color:var(--color-bone)] hover:text-[color:var(--color-terracotta)] transition-colors"
            >
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="font-mono text-[12px] tracking-[0.18em] text-[color:var(--color-bone)]/70 hover:text-[color:var(--color-terracotta)] self-center"
            >
              {business.email}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {trustBadges.map((b, i) => (
              <span
                key={i}
                className="font-mono text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 border border-[color:var(--color-bone)]/25 text-[color:var(--color-bone)]/80"
              >
                {t(b.en, b.es)}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          {!submitted ? (
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
              <Field
                label={t("Your name", "Tu nombre")}
                name="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label={t("Phone", "Teléfono")}
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                required
              />
              <Field
                label={t("Email", "Correo")}
                name="email"
                type="email"
                className="md:col-span-2"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <Select
                label={t("Project type", "Tipo de proyecto")}
                value={form.project}
                onChange={(v) => setForm({ ...form, project: v })}
                className="md:col-span-2"
                options={[
                  { value: "", label: t("Select…", "Elige…") },
                  { value: "interior", label: t("Interior repaint", "Repintado interior") },
                  { value: "exterior", label: t("Exterior repaint", "Repintado exterior") },
                  { value: "cabinets", label: t("Cabinets / built-ins", "Gabinetes / muebles") },
                  { value: "commercial", label: t("Commercial / office", "Comercial / oficina") },
                  { value: "industrial", label: t("Warehouse / industrial", "Almacén / industrial") },
                  { value: "specialty", label: t("Restoration / specialty", "Restauración / especial") },
                  { value: "consult", label: t("Color consultation", "Asesoría de color") },
                ]}
              />
              <TextArea
                label={t("Tell us about the project", "Cuéntanos del proyecto")}
                value={form.notes}
                onChange={(v) => setForm({ ...form, notes: v })}
                className="md:col-span-2"
                placeholder={t(
                  "Square footage, number of rooms, any colors in mind…",
                  "Pies cuadrados, cuántos cuartos, colores en mente…"
                )}
              />
              <button
                type="submit"
                className="md:col-span-2 self-start mt-2 btn-ink"
              >
                <span>{t("Send to Ismael", "Enviar a Ismael")}</span>
                <span className="opacity-70">→</span>
                <Drips />
              </button>
            </form>
          ) : (
            <div className="font-display text-3xl text-[color:var(--color-bone)] leading-snug">
              {t(
                "Sent. Ismael will text or call within a business day.",
                "Enviado. Ismael te llamará o escribirá en un día laboral."
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/65">
        {label}
        {required ? " ·" : ""}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="bg-transparent border-b border-[color:var(--color-bone)]/30 focus:border-[color:var(--color-terracotta)] outline-none py-2 font-display text-xl text-[color:var(--color-bone)] placeholder:text-[color:var(--color-bone)]/30 transition-colors"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  className = "",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/65">
        {label}
      </span>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent border border-[color:var(--color-bone)]/30 focus:border-[color:var(--color-terracotta)] outline-none p-3 font-body text-[15px] text-[color:var(--color-bone)] placeholder:text-[color:var(--color-bone)]/30 transition-colors resize-none"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/65">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-[color:var(--color-bone)]/30 focus:border-[color:var(--color-terracotta)] outline-none py-2 font-display text-xl text-[color:var(--color-bone)] transition-colors"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[color:var(--color-ink)] text-[color:var(--color-bone)]">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
