"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Animated SVG brush stroke that draws underneath text. Uses stroke-dasharray
// + the global #brush filter for organic bristle edges.

type Props = {
  color?: string;
  delay?: number;
  duration?: number;
  thickness?: number;
};

export function BrushUnderline({
  color = "var(--color-terracotta)",
  delay = 0.3,
  duration = 1.2,
  thickness = 14,
}: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 30"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 w-full h-[0.5em] pointer-events-none"
      aria-hidden
    >
      <motion.path
        d="M 6 18 Q 100 8 200 16 T 400 14 T 590 18"
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        style={{ filter: "url(#brush)", opacity: 0.55 }}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}
