import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  title?: string;
}

/**
 * Brand mark for Pravin Abdul Kalam M — a "PAK" monogram in a rounded badge
 * with the site's cyan → blue → emerald gradient. Rendered as inline SVG so it
 * stays razor-sharp at any size and inherits the page's brand font.
 */
const Logo: React.FC<LogoProps> = ({ className = '', title = 'Pravin Abdul Kalam M' }) => {
  const id = useId().replace(/:/g, '');
  const grad = `pak-grad-${id}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#26d0ce" />
          <stop offset="0.5" stopColor="#1a7af8" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      {/* Badge */}
      <rect x="3" y="3" width="58" height="58" rx="17" fill="#0b1430" />
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        rx="17"
        fill="none"
        stroke={`url(#${grad})`}
        strokeWidth="2.5"
      />

      {/* Monogram */}
      <text
        x="32"
        y="30"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Space Grotesk', 'Manrope', system-ui, sans-serif"
        fontWeight="700"
        fontSize="20"
        letterSpacing="-1.5"
        fill={`url(#${grad})`}
      >
        PAK
      </text>

      {/* Pipeline / node accent — nods to SRE & GitOps */}
      <g stroke={`url(#${grad})`} strokeWidth="2" strokeLinecap="round">
        <line x1="22" y1="45" x2="42" y2="45" />
      </g>
      <circle cx="20" cy="45" r="2.4" fill={`url(#${grad})`} />
      <circle cx="32" cy="45" r="2.4" fill={`url(#${grad})`} />
      <circle cx="44" cy="45" r="2.4" fill={`url(#${grad})`} />
    </svg>
  );
};

export default Logo;
