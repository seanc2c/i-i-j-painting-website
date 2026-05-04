"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

// A loaded-roller stripe. Renders a multi-layer SVG that looks like a
// freshly rolled paint band: wet-edge halo, thick body, parallel bristle
// striations, and three teardrop drips that fall after the stripe lands.

type Props = {
  color?: string;
  height?: number; // base body thickness
  delay?: number;
};

export function RollerWipe({
  color = "var(--color-terracotta)",
  height = 14,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute top-0 left-0 right-0 pointer-events-none overflow-visible"
      style={{ height: height + 80 }}
    >
      <svg
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full"
        style={{ height: height + 30, overflow: "visible" }}
      >
        {/* HALO */}
        <motion.rect
          x="0"
          y={20 - height / 2 - 5}
          height={height + 14}
          width="1000"
          fill={color}
          style={{ filter: "url(#brushHeavy) blur(1.5px)", opacity: 0.22 }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.65, 0, 0.35, 1] }}
        />
        {/* BODY */}
        <motion.rect
          x="0"
          y={20 - height / 2}
          height={height}
          width="1000"
          fill={color}
          style={{ filter: "url(#brushHeavy)", opacity: 0.92 }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 1.4,
            delay: delay + 0.04,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
        {/* BRISTLE STREAKS — thin lines running with the stripe */}
        {[0.18, 0.36, 0.62, 0.78].map((t, i) => (
          <motion.rect
            key={i}
            x="0"
            y={20 - height / 2 + height * t}
            height="1.4"
            width="1000"
            fill={color}
            style={{
              filter: "url(#brush)",
              opacity: 0.35,
              mixBlendMode: "multiply",
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 1.45,
              delay: delay + 0.08 + i * 0.02,
              ease: [0.65, 0, 0.35, 1],
            }}
          />
        ))}
      </svg>

      {/* DRIPS — teardrop shapes falling after the stripe lands */}
      <svg
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        className="absolute"
        style={{
          top: height + 14,
          left: 0,
          width: "100%",
          height: 70,
          overflow: "visible",
        }}
      >
        {[
          { x: 12, h: 22, w: 2.4, d: 0.95 },
          { x: 31, h: 38, w: 3.0, d: 1.05 },
          { x: 52, h: 18, w: 2.0, d: 1.15 },
          { x: 73, h: 30, w: 2.6, d: 1.0 },
          { x: 88, h: 14, w: 1.8, d: 1.25 },
        ].map((d, i) => (
          <motion.path
            key={i}
            d={`M ${d.x - d.w / 2} 0 L ${d.x + d.w / 2} 0 L ${
              d.x + d.w * 0.8
            } ${d.h - d.w * 1.4} Q ${d.x} ${d.h + d.w * 0.6}, ${
              d.x - d.w * 0.8
            } ${d.h - d.w * 1.4} Z`}
            fill={color}
            style={{ filter: "url(#drip)", transformOrigin: `${d.x}% 0%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              inView
                ? { scaleY: [0, 1, 1], opacity: [0, 1, 0.85] }
                : { scaleY: 0, opacity: 0 }
            }
            transition={{
              duration: 1.4,
              delay: delay + d.d + i * 0.06,
              times: [0, 0.7, 1],
              ease: [0.55, 0, 0.45, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
}
