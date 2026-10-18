"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Reveal } from "@/components/ui/reveal";

const STATEMENT =
  "Culture doesn't need another checkout page. It needs a stage. We build the storefronts, auctions, royalties and rituals that turn a drop into a moment people keep.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section id="manifesto" className="section">
      <div className="shell">
        <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.26em] uppercase">
          <span className="text-muted/70">01</span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-muted">Point of view</span>
        </div>

        <p
          ref={ref}
          className="mt-10 max-w-5xl text-[clamp(1.75rem,4.2vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.035em]"
        >
          {reduced ? (
            <>{STATEMENT}</>
          ) : (
            words.map((word, index) => {
              const start = index / words.length;
              const end = Math.min(1, start + 0.85 / words.length);
              return (
                <span key={`${word}-${index}`}>
                  <Word progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>{" "}
                </span>
              );
            })
          )}
        </p>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
              The short version
            </p>
            <p className="mt-4 font-serif text-3xl leading-tight italic">
              A gallery, a shop, <br /> a members&apos; club — <br /> all at once.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-6">
            <p className="text-sm leading-relaxed text-muted">
              Since 2021 we&apos;ve launched one of the largest marketplaces for
              Middle Eastern art and helped world-class artists, photographers
              and athletes build their own NFT product lines — from creative
              ideation to technical delivery.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-3 md:col-start-10">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-rose via-iris to-mint font-serif text-lg text-ink">
                LA
              </span>
              <div>
                <p className="text-sm">Layla Al-Mansoori</p>
                <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                  Founder & CEO
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              “We wanted collectors to feel something before they saw a price.”
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
