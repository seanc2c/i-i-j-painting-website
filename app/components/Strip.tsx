"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { useI18n } from "../lib/i18n";

// Atmospheric break section between Services and Process — uses brush texture
// with parallax + a single editorial pull-quote.
export function Strip() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/texture-brush.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/40 via-[color:var(--color-ink)]/10 to-[color:var(--color-ink)]/60" />
      <div className="relative h-full grid place-items-center px-6 md:px-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[24ch] font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.035em] leading-[0.95] text-[color:var(--color-bone)] text-center"
        >
          {t(
            "The wall remembers who painted it.",
            "La pared recuerda quién la pintó."
          )}
        </motion.blockquote>
      </div>
    </section>
  );
}
