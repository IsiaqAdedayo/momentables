import { LocalClock } from "@/components/ui/local-clock";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Drops", href: "#drops" },
      { label: "Beyond", href: "#beyond" },
      { label: "Apply", href: "#apply" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Point of view", href: "#manifesto" },
      { label: "Partners", href: "#platform" },
      { label: "Careers", href: "mailto:hello@momentable.com?subject=Careers" },
      { label: "Press", href: "mailto:hello@momentable.com?subject=Press" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "Instagram", href: "https://www.instagram.com" },
      { label: "X / Twitter", href: "https://x.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Are.na", href: "https://www.are.na" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-16 md:pt-20">
      <div
        aria-hidden
        className="orb -top-40 left-1/3 h-80 w-80 bg-iris/20"
      />

      <div className="shell relative">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="font-serif text-3xl italic">
              momentable
              <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-rose to-iris align-middle" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              The platform for culture to live on-chain. Built with artists,
              museums and brands since 2021.
            </p>
            <a
              href="mailto:hello@momentable.com"
              className="mt-6 inline-block border-b border-white/25 pb-1 text-sm transition-colors hover:border-white"
            >
              hello@momentable.com
            </a>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <p className="font-mono text-[9px] tracking-[0.22em] text-muted uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-bone/70 transition-colors hover:text-bone"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-sm transition-colors hover:border-white/40"
            >
              ↑
            </a>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p
            aria-hidden
            className="display chrome-text block text-center text-[clamp(3.2rem,14.5vw,13rem)] leading-[0.78] select-none"
          >
            momentable
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 font-mono text-[9px] tracking-[0.16em] text-muted/70 uppercase">
          <p>© 2026 Momentable FZ-LLC</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-mint" />
            Dubai · <LocalClock />
          </p>
          <p className="hidden sm:block">Designed &amp; built in 2026</p>
          <p>Built on Flow</p>
        </div>
      </div>
    </footer>
  );
}
