export function RayDiagram({
  compact = false,
  label,
  caption,
}: {
  compact?: boolean;
  label?: string;
  caption?: string;
}) {
  const dots = 40;
  const rays = 40;
  const coord = (value: number) => value.toFixed(3);

  return (
    <div className={compact ? "relative" : "relative overflow-hidden rounded-3xl bg-panel"}>
      {!compact ? (
        <img
          src="/media/Flag_of_Kyrgyzstan.webp"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 saturate-0"
        />
      ) : null}
      {!compact ? <div className="absolute inset-0 bg-bg/45" /> : null}
      {!compact && label ? (
        <p className="eyebrow absolute top-4 left-4 z-10">{label}</p>
      ) : null}
      <svg
        viewBox="0 0 320 320"
        className={compact ? "h-full w-full" : "relative mx-auto w-full max-w-md"}
        aria-hidden
      >
        <g className="spin-slow">
          {Array.from({ length: rays }, (_, index) => {
            const angle = (index / rays) * Math.PI * 2;
            const x2 = coord(160 + Math.cos(angle) * 98);
            const y2 = coord(160 + Math.sin(angle) * 98);
            return (
              <line
                key={index}
                x1="160"
                y1="160"
                x2={x2}
                y2={y2}
                stroke="rgba(200,182,255,0.38)"
                strokeWidth="1"
              />
            );
          })}
        </g>
        <circle cx="160" cy="160" r="78" fill="none" stroke="rgba(200,182,255,0.28)" />
        <circle cx="160" cy="160" r="112" fill="none" stroke="rgba(200,182,255,0.45)" />
        <circle cx="160" cy="160" r="128" fill="none" stroke="rgba(200,182,255,0.22)" />
        <line x1="160" y1="18" x2="160" y2="302" stroke="rgba(200,182,255,0.28)" />
        <line x1="18" y1="160" x2="302" y2="160" stroke="rgba(200,182,255,0.28)" />
        {[
          [160, 14],
          [160, 306],
          [14, 160],
          [306, 160],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#c8b6ff" />
        ))}
        {Array.from({ length: dots }, (_, index) => {
          const angle = (index / dots) * Math.PI * 2 - Math.PI / 2;
          const x = coord(160 + Math.cos(angle) * 128);
          const y = coord(160 + Math.sin(angle) * 128);
          return (
            <circle
              key={index}
              className="dot-breathe"
              cx={x}
              cy={y}
              r="4.3"
              fill="#d5c8ff"
              style={{ animationDelay: `${index * 70}ms` }}
            />
          );
        })}
        {!compact ? (
          <>
            <text
              x="160"
              y="168"
              textAnchor="middle"
              fill="#f3f2f8"
              fontSize="78"
              fontFamily="Inter, sans-serif"
              fontWeight="650"
            >
              40
            </text>
            <text
              x="160"
              y="196"
              textAnchor="middle"
              fill="#b7b3c9"
              fontSize="11"
              letterSpacing="1.5"
              fontFamily="Inter, sans-serif"
            >
              {(caption ?? "").toUpperCase()}
            </text>
          </>
        ) : null}
      </svg>
    </div>
  );
}
