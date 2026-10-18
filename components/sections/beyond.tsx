"use client";

import { motion, useReducedMotion } from "motion/react";
import { GenerativeArt } from "@/components/ui/generative-art";
import { TiltCard } from "@/components/ui/tilt";
import { Reveal, WordsReveal } from "@/components/ui/reveal";

const POINTS = [
  {
    title: "Geo-anchored drops",
    copy: "Place a work on a specific street, gallery or coastline. Collectors unlock it by being there.",
  },
  {
    title: "Museum-scale installs",
    copy: "Room-scale pieces that respond to movement — no headset, no downloads.",
  },
  {
    title: "A window, not a wall",
    copy: "Every owner gets an AR-ready viewer that lives in the browser and on their phone.",
  },
];

export function Beyond() {
  const reduced = useReducedMotion();

  return (
    <section id="beyond" className="section overflow-hidden">
      <div className="shell grid items-center gap-16 md:grid-cols-2 md:gap-10">
        <div>
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.26em] uppercase">
            <span className="text-muted/70">04</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-muted">Coming soon</span>
          </div>

          <WordsReveal
            as="h2"
            text="Beyond the screen."
            className="mt-6 text-[clamp(2.2rem,5.4vw,4.4rem)] leading-[0.98] font-medium tracking-[-0.04em]"
          />

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
              With augmented reality the world becomes your gallery. Choose a
              real location to showcase a piece, and let collectors find it
              exactly where it belongs.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {POINTS.map((point, index) => (
              <Reveal key={point.title} delay={0.08 * index}>
                <div className="flex gap-5 border-t border-white/10 pt-5">
                  <span className="font-mono text-[10px] text-muted/60">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium">{point.title}</h3>
                    <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-muted">
                      {point.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <a
              href="#apply"
              className="group mt-10 inline-flex items-center gap-3 text-sm"
            >
              <span className="border-b border-white/25 pb-1 transition-colors group-hover:border-white">
                Join the AR waitlist
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div
            aria-hidden
            className="orb top-1/4 left-1/4 h-72 w-72 bg-iris/45"
          />
          <div
            aria-hidden
            className="orb right-0 bottom-0 h-56 w-56 bg-rose/30"
          />

          <TiltCard max={12} className="relative">
            <div className="relative w-[248px] rounded-[2.6rem] border border-white/15 bg-[#0b0b12] p-2.5 shadow-[0_60px_120px_-40px_rgba(0,0,0,1)] md:w-[276px]">
              <div className="relative h-[500px] overflow-hidden rounded-[2.15rem] md:h-[540px]">
                <GenerativeArt
                  variant={1}
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-4 font-mono text-[9px] tracking-[0.12em] text-bone/80">
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-mint" />
                    AR ready
                  </span>
                </div>

                <div className="absolute inset-0 grid place-items-center">
                  <div className="relative h-40 w-40">
                    {[
                      "top-0 left-0 border-t border-l",
                      "top-0 right-0 border-t border-r",
                      "bottom-0 left-0 border-b border-l",
                      "bottom-0 right-0 border-b border-r",
                    ].map((position) => (
                      <span
                        key={position}
                        className={`absolute h-6 w-6 border-bone/60 ${position}`}
                      />
                    ))}
                    <motion.span
                      animate={
                        reduced
                          ? undefined
                          : { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }
                      }
                      transition={{ duration: 2.6, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint"
                    />
                  </div>
                </div>

                {!reduced && (
                  <motion.div
                    animate={{ y: ["-10%", "110%"] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-mint/15 to-transparent"
                  />
                )}

                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-black/45 p-3 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[8px] tracking-[0.18em] text-bone/60 uppercase">
                        Placed at
                      </p>
                      <p className="mt-1 text-xs">Al Fahidi, Dubai</p>
                    </div>
                    <span className="rounded-full bg-bone px-3 py-1.5 text-[10px] font-medium text-ink">
                      View in AR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div className="glass float-y absolute top-10 -left-2 rounded-full px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] uppercase">
              <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-mint" />
              AR preview
            </div>
            <div
              className="glass float-y absolute right-0 bottom-24 rounded-full px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] uppercase"
              style={{ animationDelay: "1.4s" }}
            >
              12 viewing now
            </div>
            <div
              className="glass float-y absolute top-1/2 -left-6 rounded-full px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] uppercase"
              style={{ animationDelay: "0.7s" }}
            >
              Museum scale · 1:1
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
