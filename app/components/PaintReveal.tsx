"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  // Direction the brush sweeps: "right" (LTR), "left" (RTL), "up", "down"
  from?: "left" | "right" | "up" | "down";
  // Color of the paint stroke that overshadows the text briefly as it paints in
  strokeColor?: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
};

const insetMap: Record<string, { hidden: string; shown: string }> = {
  left: { hidden: "inset(0% 0% 0% 100%)", shown: "inset(0% 0% 0% 0%)" },
  right: { hidden: "inset(0% 100% 0% 0%)", shown: "inset(0% 0% 0% 0%)" },
  up: { hidden: "inset(100% 0% 0% 0%)", shown: "inset(0% 0% 0% 0%)" },
  down: { hidden: "inset(0% 0% 100% 0%)", shown: "inset(0% 0% 0% 0%)" },
};

export function PaintReveal({
  children,
  delay = 0,
  duration = 1.1,
  from = "right",
  strokeColor,
  className = "",
  as: Tag = "span",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const map = insetMap[from];

  const M = motion[Tag] as React.ComponentType<{
    ref?: React.Ref<HTMLElement>;
    initial?: object;
    animate?: object;
    transition?: object;
    style?: object;
    className?: string;
    children?: ReactNode;
  }>;

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`relative inline-block ${className}`}
    >
      {/* The actual content, masked by an animated clip-path with brushy edge */}
      <M
        initial={{ clipPath: map.hidden, WebkitClipPath: map.hidden }}
        animate={
          inView
            ? { clipPath: map.shown, WebkitClipPath: map.shown }
            : { clipPath: map.hidden, WebkitClipPath: map.hidden }
        }
        transition={{
          duration,
          delay,
          ease: [0.65, 0, 0.35, 1],
        }}
        style={{
          display: "inline-block",
          filter: "url(#brushHeavy)",
        }}
      >
        {children}
      </M>
      {/* Optional paint-stroke that races ahead of the reveal */}
      {strokeColor && (
        <motion.span
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            inView
              ? { scaleX: [0, 1, 1, 0], opacity: [0, 0.85, 0.85, 0] }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{
            duration: duration + 0.3,
            delay: delay + 0.05,
            times: [0, 0.4, 0.85, 1],
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "10%",
            bottom: "10%",
            background: strokeColor,
            transformOrigin: from === "left" ? "right" : "left",
            filter: "url(#brush)",
            pointerEvents: "none",
            mixBlendMode: "multiply",
            zIndex: 1,
          }}
        />
      )}
    </span>
  );
}
