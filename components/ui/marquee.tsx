export function Marquee({
  items,
  label,
}: {
  items: string[];
  label?: string;
}) {
  const row = [...items, ...items];

  return (
    <div className="marquee relative flex overflow-hidden border-y border-white/10 py-7">
      {label && (
        <span className="sr-only">{label}</span>
      )}
      <div className="marquee-track items-center gap-12 pr-12 md:gap-20 md:pr-20">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className="flex shrink-0 items-center gap-12 font-mono text-[11px] tracking-[0.22em] whitespace-nowrap text-muted uppercase md:gap-20"
          >
            {item}
            <span className="inline-block h-1 w-1 rounded-full bg-white/25" />
          </span>
        ))}
      </div>
    </div>
  );
}
