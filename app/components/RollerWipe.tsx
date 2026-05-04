"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Section transition: a thin "wet paint" stripe rolls down the top edge of a section
// as it enters the viewport — like a roller laying down fresh color.

type Props = {
  color?: string;
  height?: number; // in px
  delay?: number;
};

export function RollerWipe({
  color = "var(--color-terracotta)",
  height = 6,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute top-0 left-0 right-0 pointer-events-none"
      style={{ height: height + 30 }}
    >
      {/* The bristly stripe */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, delay, ease: [0.65, 0, 0.35, 1] }}
        style={{
          height: height,
          background: color,
          filter: "url(#brush)",
          transformOrigin: "left center",
        }}
      />
      {/* Three drips that fall after the stripe lands */}
      {[15, 50, 82].map((leftPct, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={
            inView
              ? { scaleY: [0, 1, 1, 0.7], opacity: [0, 1, 0.9, 0] }
              : { scaleY: 0, opacity: 0 }
          }
          transition={{
            duration: 1.6,
            delay: delay + 0.9 + i * 0.18,
            times: [0, 0.4, 0.7, 1],
            ease: "easeIn",
          }}
          style={{
            position: "absolute",
            top: height,
            left: `${leftPct}%`,
            width: 3,
            height: 18 + i * 4,
            background: color,
            transformOrigin: "top center",
            filter: "url(#drip)",
          }}
        />
      ))}
    </div>
  );
}
