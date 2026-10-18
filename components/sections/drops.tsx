"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { GenerativeArt, type ArtVariant } from "@/components/ui/generative-art";
import { TiltCard } from "@/components/ui/tilt";
import { useMediaQuery } from "@/lib/hooks";

const DROPS: {
  title: string;
  artist: string;
  edition: string;
  price: string;
  variant: ArtVariant;
  status: string;
  place: string;
}[] = [
  {
    title: "Chromatic Bloom",
    artist: "Lina Haddad",
    edition: "1 of 1",
    price: "4.20",
    variant: 0,
    status: "Live now",
    place: "Dubai",
  },
  {
    title: "Desert Signal",
    artist: "Omar Rahal",
    edition: "1 of 25",
    price: "1.80",
    variant: 1,
    status: "Ends in 6h",
    place: "Riyadh",
  },
  {
    title: "Liquid Archive",
    artist: "Nadia Kassem",
    edition: "1 of 10",
    price: "2.60",
    variant: 2,
    status: "Curated",
    place: "Beirut",
  },
  {
    title: "Neon Reliquary",
    artist: "Studio Atlas",
    edition: "1 of 5",
    price: "3.40",
    variant: 3,
    status: "Upcoming",
    place: "Abu Dhabi",
  },
];

function DropCard({ drop, index }: { drop: (typeof DROPS)[number]; index: number }) {
  return (
    <TiltCard className="w-[78vw] shrink-0 sm:w-[52vw] md:w-[34vw] lg:w-[26vw] xl:w-[22vw]">
      <article className="panel group h-full rounded-2xl p-3">
        <div className="relative overflow-hidden rounded-xl">
          <GenerativeArt
            variant={drop.variant}
            className="h-[clamp(240px,38vh,420px)] w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-x-3 top-3 flex items-center justify-between">
            <span className="rounded-full bg-black/40 px-2.5 py-1 font-mono text-[9px] tracking-[0.16em] uppercase backdrop-blur-md">
              {drop.status}
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] text-bone/70 uppercase">
              0{index + 1}
            </span>
          </div>
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.16em] text-bone/70 uppercase">
              {drop.place}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bone/90 text-xs text-ink opacity-0 transition-all duration-500 group-hover:opacity-100">
              ↗
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between px-2 pt-4 pb-2">
          <div>
            <h3 className="text-base font-medium tracking-tight">{drop.title}</h3>
            <p className="mt-0.5 text-xs text-muted">{drop.artist}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
              Edition
            </p>
            <p className="mt-0.5 text-xs">{drop.edition}</p>
          </div>
        </div>

        <div className="mx-2 mb-1 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
            Reserve
          </span>
          <span className="text-sm">{drop.price} ETH</span>
        </div>
      </article>
    </TiltCard>
  );
}

export function Drops() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduced = useReducedMotion();
  const pinned = isDesktop && !reduced;

  useEffect(() => {
    if (!pinned) {
      setDistance(0);
      return;
    }

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 110, damping: 26, mass: 0.4 });

  return (
    <section
      ref={sectionRef}
      id="drops"
      className="relative"
      style={{ height: pinned ? `calc(100vh + ${distance}px)` : undefined }}
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-24"
            : "py-24 md:py-32"
        }
      >
        <div className="shell flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.26em] uppercase">
              <span className="text-muted/70">03</span>
              <span className="h-px w-8 bg-white/20" />
              <span className="text-muted">The drops</span>
            </div>
            <h2 className="mt-6 text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.02] font-medium tracking-[-0.03em]">
              The drops,{" "}
              <span className="display text-muted italic">in motion.</span>
            </h2>
          </div>

          <div className="hidden items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase md:flex">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15">
              →
            </span>
            Scroll to move through the collection
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          {pinned ? (
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-4 px-6 md:gap-5 md:px-10 xl:px-14">
              {DROPS.map((drop, index) => (
                <DropCard key={drop.title} drop={drop} index={index} />
              ))}
              <div className="flex w-[24vw] shrink-0 items-center">
                <div className="max-w-[16rem] pl-6">
                  <p className="font-serif text-3xl leading-tight italic">
                    Your drop <br /> goes here.
                  </p>
                  <a
                    href="#apply"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs transition-colors hover:border-white/50"
                  >
                    Apply to launch <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:px-10">
              {DROPS.map((drop, index) => (
                <div key={drop.title} className="snap-center">
                  <DropCard drop={drop} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>

        {pinned && (
          <div className="shell mt-10">
            <div className="h-px w-full bg-white/10">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-px origin-left bg-gradient-to-r from-rose via-iris to-mint"
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[9px] tracking-[0.2em] text-muted/70 uppercase">
              <span>04 collections</span>
              <span>2026 · Curated season</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
