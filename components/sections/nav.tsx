"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useScrolled } from "@/lib/hooks";

const LINKS = [
  { href: "#platform", id: "platform", label: "Platform" },
  { href: "#drops", id: "drops", label: "Drops" },
  { href: "#beyond", id: "beyond", label: "Beyond" },
  { href: "#manifesto", id: "manifesto", label: "About" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[75]">
        <div className={`shell transition-all duration-500 ${scrolled ? "pt-3" : "pt-5"}`}>
          <div
            className={`flex items-center justify-between rounded-full px-4 transition-all duration-500 md:px-6 ${
              scrolled
                ? "glass py-2.5 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]"
                : "border border-transparent py-3"
            }`}
          >
            <a
              href="#top"
              className="group flex items-center gap-2"
              aria-label="Momentable, back to top"
            >
              <span className="font-serif text-2xl leading-none italic">
                momentable
              </span>
              <span className="mt-2 h-1 w-1 rounded-full bg-gradient-to-br from-rose to-iris transition-transform duration-500 group-hover:scale-150" />
            </a>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[13px] transition-colors ${
                    active === link.id
                      ? "text-bone"
                      : "text-muted hover:text-bone"
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-bone/70 to-transparent"
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#apply"
                className="hidden rounded-full bg-bone px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white sm:inline-flex"
              >
                Request access
              </a>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone md:hidden"
              >
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                <span className="relative block h-3 w-4">
                  <motion.span
                    animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    className="absolute top-0 left-0 h-px w-4 bg-current"
                  />
                  <motion.span
                    animate={open ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute top-1.5 left-0 h-px w-4 bg-current"
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    className="absolute top-3 left-0 h-px w-4 bg-current"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[74] bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex h-full flex-col justify-between pt-32 pb-10">
              <nav className="flex flex-col" aria-label="Mobile">
                {LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.6, ease: EASE }}
                    className="flex items-baseline justify-between border-b border-white/10 py-4 text-4xl tracking-tight"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[10px] text-muted">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <a
                  href="#apply"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full bg-bone py-4 text-sm font-medium text-ink"
                >
                  Request access
                </a>
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  hello@momentable.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
