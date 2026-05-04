"use client";

import { useEffect, useRef } from "react";

// Subtle paint trail — a small terracotta "wet paint" dot follows the cursor
// with a delay, leaving a faint trail. Hidden on touch devices and when reduced motion.

export function PaintCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isTouch) return;

    const dot = dotRef.current;
    if (!dot) return;

    let mx = -100;
    let my = -100;
    let dx = -100;
    let dy = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      dx += (mx - dx) * 0.18;
      dy += (my - dy) * 0.18;
      dot.style.transform = `translate3d(${dx - 6}px, ${dy - 6}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="hidden md:block fixed top-0 left-0 z-[60] pointer-events-none"
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "var(--color-terracotta)",
        opacity: 0.55,
        filter: "url(#drip) blur(0.5px)",
        mixBlendMode: "multiply",
        transition: "opacity 200ms ease-out",
      }}
    />
  );
}
