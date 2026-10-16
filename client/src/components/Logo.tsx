// -----------------------------------------------------------------------------
// Logo.tsx — custom portfolio logo.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

type LogoProps = {
  size?: number;
  title?: string;
};

export default function Logo({
  size = 40,
  title = 'Maria Martina Carballo logo'
}: LogoProps) {
  return (
    <svg
      role="img"
      aria-label={title}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pink gradient used for the logo shape */}
      <defs>
        <linearGradient
          id="logoGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="var(--color-accent)"
          />

          <stop
            offset="100%"
            stopColor="var(--color-accent-strong)"
          />
        </linearGradient>
      </defs>

      {/* Four-point star shape */}
      <path
        d="
          M32 4
          C36 18 46 28 60 32
          C46 36 36 46 32 60
          C28 46 18 36 4 32
          C18 28 28 18 32 4
          Z
        "
        fill="url(#logoGradient)"
        stroke="var(--color-border)"
        strokeWidth="2"
      />

      {/* Inner circle detail */}
      <circle
        cx="32"
        cy="32"
        r="15"
        fill="rgba(255,255,255,0.12)"
      />

      {/* Initials */}
      <text
        x="50%"
        y="53%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#2a171d"
      >
        MC
      </text>
    </svg>
  );
}
