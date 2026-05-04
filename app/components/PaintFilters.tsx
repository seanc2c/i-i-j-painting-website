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
        {/* Light brush — small ragged edge, used on small UI bits */}
        <filter id="brush" x="-10%" y="-30%" width="120%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.55"
            numOctaves="3"
            seed="3"
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
        {/* Heavy brush — dramatic ragged paint edges. Big scale, low freq = */}
        {/* fewer, larger displacement waves so the stroke looks like a real */}
        {/* loaded bristle brush dragged across the surface. */}
        <filter id="brushHeavy" x="-15%" y="-45%" width="130%" height="190%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.65"
            numOctaves="3"
            seed="6"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="26"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        {/* Wet-edge filter — bleeds the paint outward then composites on the */}
        {/* base for that loaded-brush halo look. */}
        <filter id="wetEdge" x="-15%" y="-45%" width="130%" height="190%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="halo" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.6"
            numOctaves="3"
            seed="9"
            result="noise"
          />
          <feDisplacementMap
            in="halo"
            in2="noise"
            scale="22"
            result="wet"
          />
          <feMerge>
            <feMergeNode in="wet" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Drip filter — keeps drips ragged but readable */}
        <filter id="drip" x="-25%" y="-10%" width="150%" height="150%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9 0.04"
            numOctaves="2"
            seed="1"
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale="2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
