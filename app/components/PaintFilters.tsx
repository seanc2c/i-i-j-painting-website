// Global SVG filter defs — referenced via filter: url(#brush) anywhere on the page.
// Mounted once in the layout so every section can use the brushy edge.

export function PaintFilters() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
      aria-hidden
    >
      <defs>
        {/* Bristly edge — turbulence + displacement for organic brush feel */}
        <filter id="brush" x="-5%" y="-25%" width="110%" height="150%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04 0.7"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        {/* Heavier brush — used for big reveals */}
        <filter id="brushHeavy" x="-8%" y="-30%" width="116%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.025 0.8"
            numOctaves="2"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        {/* Drip filter — subtle vertical stretching for paint drips */}
        <filter id="drip" x="-10%" y="-10%" width="120%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9 0.05"
            numOctaves="1"
            seed="1"
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
