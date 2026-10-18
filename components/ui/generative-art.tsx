const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const PALETTES = [
  {
    base: "#140a24",
    a: "#ff5f9e",
    b: "#8b5cf6",
    c: "#ffca7a",
    line: "#ffd9ea",
  },
  {
    base: "#1d1006",
    a: "#ff8a3d",
    b: "#ffd166",
    c: "#7c3aed",
    line: "#ffe9c2",
  },
  {
    base: "#04141a",
    a: "#2dd4bf",
    b: "#38bdf8",
    c: "#a78bfa",
    line: "#c8fff4",
  },
  {
    base: "#120419",
    a: "#e879f9",
    b: "#6366f1",
    c: "#22d3ee",
    line: "#f0d9ff",
  },
];

export type ArtVariant = 0 | 1 | 2 | 3;

export function GenerativeArt({
  variant = 0,
  className = "",
  detail = true,
}: {
  variant?: ArtVariant;
  className?: string;
  detail?: boolean;
}) {
  const p = PALETTES[variant % PALETTES.length];

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: p.base }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 55% at 28% 24%, ${p.a} 0%, transparent 62%), radial-gradient(58% 55% at 78% 68%, ${p.b} 0%, transparent 64%), radial-gradient(90% 70% at 50% 112%, ${p.c} 0%, transparent 62%)`,
        }}
      />

      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {variant === 0 && (
          <>
            <g stroke={p.line} strokeWidth="0.7" opacity="0.55">
              {[70, 110, 150, 190].map((r) => (
                <circle key={r} cx="205" cy="235" r={r} />
              ))}
            </g>
            <g opacity="0.35" stroke={p.line} strokeWidth="0.5">
              {Array.from({ length: 14 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="205"
                  cy="235"
                  rx="185"
                  ry="62"
                  transform={`rotate(${i * 13} 205 235)`}
                />
              ))}
            </g>
          </>
        )}

        {variant === 1 && (
          <>
            <circle cx="200" cy="200" r="86" fill={p.b} opacity="0.85" />
            <circle cx="200" cy="200" r="118" stroke={p.line} opacity="0.4" />
            <g stroke={p.line} strokeWidth="0.6" opacity="0.35">
              {Array.from({ length: 18 }).map((_, i) => (
                <line
                  key={i}
                  x1="30"
                  x2="370"
                  y1={300 + i * 11}
                  y2={300 + i * 11}
                />
              ))}
            </g>
            <path
              d="M120 380 Q200 300 280 380"
              stroke={p.line}
              strokeWidth="0.9"
              opacity="0.6"
            />
          </>
        )}

        {variant === 2 && (
          <>
            <g stroke={p.line} strokeWidth="0.8" opacity="0.55">
              {Array.from({ length: 11 }).map((_, i) => (
                <path
                  key={i}
                  d={`M-20 ${120 + i * 26} C 90 ${60 + i * 26}, 190 ${
                    200 + i * 22
                  }, 300 ${110 + i * 26} S 380 ${60 + i * 30}, 430 ${
                    100 + i * 26
                  }`}
                />
              ))}
            </g>
            <circle cx="290" cy="170" r="52" stroke={p.line} opacity="0.7" />
            <circle cx="290" cy="170" r="16" fill={p.c} opacity="0.8" />
          </>
        )}

        {variant === 3 && (
          <>
            <g stroke={p.line} strokeWidth="0.6" opacity="0.32">
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 34}
                  x2={i * 34}
                  y1="0"
                  y2="500"
                />
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <line key={`h${i}`} x1="0" x2="400" y1={i * 34} y2={i * 34} />
              ))}
            </g>
            <g stroke={p.line} strokeWidth="1" opacity="0.85">
              <path d="M200 150 L290 202 L290 306 L200 358 L110 306 L110 202 Z" />
              <path d="M200 150 L200 254 L290 306" opacity="0.5" />
              <path d="M200 254 L110 306" opacity="0.5" />
              <path d="M200 254 L200 358" opacity="0.5" />
            </g>
            <circle cx="200" cy="254" r="6" fill={p.c} />
          </>
        )}
      </svg>

      {detail && (
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
          style={{ backgroundImage: NOISE, backgroundSize: "160px 160px" }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-white/5" />
      <div className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
    </div>
  );
}
