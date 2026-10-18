import { Counter } from "@/components/ui/counter";

const METRICS = [
  {
    value: 3.4,
    decimals: 1,
    suffix: "M",
    prefix: "$",
    label: "Primary sales",
    detail: "Since 2021",
  },
  {
    value: 180,
    decimals: 0,
    suffix: "+",
    prefix: "",
    label: "Creators onboarded",
    detail: "12 disciplines",
  },
  {
    value: 42,
    decimals: 0,
    suffix: "",
    prefix: "",
    label: "Countries reached",
    detail: "Collectors worldwide",
  },
  {
    value: 99.99,
    decimals: 2,
    suffix: "%",
    prefix: "",
    label: "Platform uptime",
    detail: "Rolling 12 months",
  },
];

export function Metrics() {
  return (
    <section aria-labelledby="metrics-title" className="border-y border-white/10 bg-ink-soft/50">
      <div className="shell py-14 md:py-16">
        <h2 id="metrics-title" className="sr-only">
          Momentable by the numbers
        </h2>

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`px-2 md:px-8 ${
                index !== 0 ? "md:border-l md:border-white/10" : ""
              }`}
            >
              <p className="text-[clamp(2rem,3.6vw,3rem)] leading-none font-medium tracking-[-0.04em]">
                <Counter
                  to={metric.value}
                  decimals={metric.decimals}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </p>
              <p className="mt-4 text-xs text-bone/80">{metric.label}</p>
              <p className="mt-1 font-mono text-[9px] tracking-[0.16em] text-muted uppercase">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
