import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-4xl"
      }
    >
      <div
        className={`flex items-center gap-4 font-mono text-[10px] tracking-[0.26em] uppercase ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-muted/70">{index}</span>
        <span className="h-px w-8 bg-white/20" />
        <span className="text-muted">{eyebrow}</span>
      </div>

      <div className="mt-6 text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.02] font-medium tracking-[-0.03em]">
        {title}
      </div>

      {description && (
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
