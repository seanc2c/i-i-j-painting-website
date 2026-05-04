// SVG recreation of the I & I J Painting logo mark.
// The three letters together silhouette a peaked-roof house.

type Props = {
  className?: string;
  showWordmark?: boolean;
  monochrome?: string; // override fill color
};

export function LogoMark({ className, showWordmark = true, monochrome }: Props) {
  const fill = monochrome ?? "currentColor";
  return (
    <svg
      viewBox="0 0 220 100"
      className={className}
      fill="none"
      aria-label="I & I J Painting"
      role="img"
    >
      {/* Roofline that ties the I-I-J together */}
      <path
        d="M 24 38 L 110 6 L 196 38"
        stroke={fill}
        strokeWidth="6"
        fill="none"
        strokeLinecap="square"
      />
      {/* Left I */}
      <rect x="12" y="38" width="20" height="6" fill={fill} />
      <rect x="18" y="38" width="8" height="42" fill={fill} />
      <rect x="12" y="76" width="20" height="6" fill={fill} />
      {/* Center I */}
      <rect x="78" y="38" width="20" height="6" fill={fill} />
      <rect x="84" y="38" width="8" height="42" fill={fill} />
      <rect x="78" y="76" width="20" height="6" fill={fill} />
      {/* Right J */}
      <rect x="144" y="38" width="20" height="6" fill={fill} />
      <rect x="150" y="38" width="8" height="36" fill={fill} />
      <path
        d="M 134 74 Q 134 82 142 82 L 158 82 Q 166 82 166 74 L 166 74 L 158 74 Q 158 76 156 76 L 144 76 Q 142 76 142 74 Z"
        fill={fill}
      />
      {/* Ampersand circle */}
      <circle cx="55" cy="59" r="9" stroke={fill} strokeWidth="2.5" fill="none" />
      <text
        x="55"
        y="63"
        textAnchor="middle"
        fontSize="11"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fill={fill}
      >
        &amp;
      </text>
      {showWordmark && (
        <text
          x="110"
          y="98"
          textAnchor="middle"
          fontFamily="var(--font-jet), monospace"
          fontSize="9"
          letterSpacing="3"
          fill={fill}
        >
          PAINTING
        </text>
      )}
    </svg>
  );
}
