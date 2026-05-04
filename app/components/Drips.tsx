// Realistic paint drips falling from the bottom of buttons on hover.
// Three teardrop SVG paths, staggered, with the #drip filter for ragged edges.

export function Drips() {
  const drips = [
    { left: "16%", h: 18, w: 4, delay: 100 },
    { left: "47%", h: 30, w: 5, delay: 240 },
    { left: "78%", h: 14, w: 3.5, delay: 380 },
  ];
  return (
    <span
      aria-hidden
      className="absolute left-0 right-0 pointer-events-none drips-container"
      style={{ top: "100%", height: 40, zIndex: 3 }}
    >
      {drips.map((d, i) => (
        <span
          key={i}
          className="absolute drip-svg"
          style={{
            left: d.left,
            top: 0,
            width: d.w * 4,
            height: d.h,
            transform: "translate(-50%, 0) scaleY(0)",
            transformOrigin: "top center",
            transitionProperty: "transform",
            transitionDuration: "700ms",
            transitionTimingFunction: "cubic-bezier(0.55, 0, 0.45, 1)",
            transitionDelay: `${d.delay}ms`,
          }}
        >
          <svg
            viewBox={`0 0 ${d.w * 4} ${d.h}`}
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            style={{ filter: "url(#drip)", overflow: "visible" }}
          >
            <path
              d={`M ${d.w} 0
                  L ${d.w * 3} 0
                  L ${d.w * 3 + d.w * 0.2} ${d.h * 0.55}
                  Q ${d.w * 2} ${d.h + d.w * 0.6}, ${d.w - d.w * 0.2} ${
                d.h * 0.55
              }
                  Z`}
              fill="var(--color-terracotta)"
            />
          </svg>
        </span>
      ))}
    </span>
  );
}
