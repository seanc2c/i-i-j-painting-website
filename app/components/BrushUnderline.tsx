"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

// A loaded-brush stroke. Three layered SVG paths:
//   1. wet-edge halo (fattest, faded, blurred + displaced)
//   2. main body (full color, heavy displacement)
//   3. bristle striations (4 thin parallel lines, lower opacity)
// Plus a couple of splatters at the tail.

type Props = {
  color?: string;
  delay?: number;
  duration?: number;
  thickness?: number;
};

const PATH_MAIN = "M 8 22 Q 110 6 220 16 T 430 14 T 590 20";
const BRISTLES = [
  "M 10 17 Q 110 4 220 10 T 430 7 T 588 14",
  "M 10 20 Q 112 7 220 13 T 432 11 T 590 17",
  "M 10 25 Q 110 9 220 19 T 430 17 T 590 23",
  "M 10 28 Q 110 12 220 22 T 430 20 T 590 26",
];

export function BrushUnderline({
  color = "var(--color-terracotta)",
  delay = 0.3,
  duration = 1.4,
  thickness = 22,
}: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const draw = inView ? { pathLength: 1 } : { pathLength: 0 };

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 38"
      preserveAspectRatio="none"
      className="absolute left-0 w-full pointer-events-none"
      aria-hidden
      style={{
        overflow: "visible",
        bottom: "-0.18em",
        height: "0.32em",
      }}
    >
      {/* WET-EDGE HALO — fattest layer, very faded, blurred */}
      <motion.path
        d={PATH_MAIN}
        fill="none"
        stroke={color}
        strokeWidth={thickness + 14}
        strokeLinecap="round"
        style={{ filter: "url(#brushHeavy) blur(2px)", opacity: 0.18 }}
        initial={{ pathLength: 0 }}
        animate={draw}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      />
      {/* MAIN BODY */}
      <motion.path
        d={PATH_MAIN}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        style={{ filter: "url(#brushHeavy)", opacity: 0.78 }}
        initial={{ pathLength: 0 }}
        animate={draw}
        transition={{ duration, delay: delay + 0.05, ease: [0.65, 0, 0.35, 1] }}
      />
      {/* BRISTLE STRIATIONS */}
      {BRISTLES.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={1.2 + (i % 2) * 0.6}
          strokeLinecap="round"
          style={{
            filter: "url(#brush)",
            opacity: 0.32 - i * 0.04,
            mixBlendMode: "multiply",
          }}
          initial={{ pathLength: 0 }}
          animate={draw}
          transition={{
            duration: duration + 0.1,
            delay: delay + 0.1 + i * 0.04,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
      {/* TAIL SPLATTER */}
      <motion.circle
        cx="595"
        cy="24"
        r="3.5"
        fill={color}
        style={{ filter: "url(#drip)", opacity: 0.7 }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.4,
          delay: delay + duration * 0.92,
          ease: "backOut",
        }}
      />
      <motion.circle
        cx="588"
        cy="33"
        r="1.6"
        fill={color}
        style={{ opacity: 0.6 }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.3,
          delay: delay + duration * 0.95,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
