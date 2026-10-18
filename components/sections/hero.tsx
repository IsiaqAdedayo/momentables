"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { Magnetic } from "@/components/ui/magnetic";
import { GenerativeArt } from "@/components/ui/generative-art";
import { Countdown } from "@/components/ui/countdown";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => null,
});

const EASE = [0.16, 1, 0.3, 1] as const;

function LiveDrop() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 30, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
      className="glass float-y w-[17.5rem] rounded-2xl p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
    >
      <div className="relative overflow-hidden rounded-xl">
        <GenerativeArt variant={0} className="h-36 w-full" />
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint opacity-75 [animation:pulse-ring_2s_ease-out_infinite]" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase">
            Live auction
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between px-1 pt-3">
        <div>
          <p className="text-[10px] tracking-[0.16em] text-muted uppercase">
            Chromatic Bloom
          </p>
          <p className="mt-1 text-sm font-medium">Lina Haddad</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[9px] tracking-[0.16em] text-muted uppercase">
            Current bid
          </p>
          <p className="mt-0.5 text-sm">4.20 ETH</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="font-mono text-[9px] tracking-[0.18em] text-muted uppercase">
          Closes in
        </span>
        <span className="text-xs text-bone">
          <Countdown offsetHours={37} />
        </span>
      </div>
    </motion.aside>
  );
}

function RotatingBadge() {
  return (
    <div className="relative hidden h-28 w-28 lg:block" aria-hidden>
      <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text
          className="fill-muted"
          style={{ fontSize: 6.4, letterSpacing: 3.1, fontFamily: "var(--font-mono)" }}
        >
          <textPath href="#badge-circle">
            DIGITAL ART · ON-CHAIN · SINCE 2021 ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-rose to-iris" />
      </span>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: EASE },
    },
  };

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_75%_-10%,rgba(120,60,220,0.28),transparent_55%),radial-gradient(80%_60%_at_10%_90%,rgba(255,90,150,0.12),transparent_60%)]"
      />

      <div className="absolute inset-0 opacity-90">
        <HeroScene animate={!reduced} />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_110%,#06060a_20%,transparent_70%)]"
      />

      <div className="shell relative z-10 flex min-h-[100svh] flex-col pt-28 pb-8 md:pt-32">
        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          animate="show"
          className="grid flex-1 items-center gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <motion.a
              variants={item}
              href="#platform"
              className="group inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] py-1.5 pr-4 pl-1.5 text-xs text-muted transition-colors hover:border-white/25 hover:text-bone"
            >
              <span className="rounded-full bg-bone px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-ink uppercase">
                New
              </span>
              Momentable Studio 2.0 is live
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </motion.a>

            <motion.h1
              variants={item}
              className="mt-7 text-[clamp(2.85rem,8.2vw,7rem)] leading-[0.86] font-medium tracking-[-0.045em]"
            >
              <span className="block">Own the</span>
              <span className="display chrome-text block pr-4 pb-1 text-[clamp(4rem,12.5vw,10.5rem)] italic">
                moment.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-md text-sm leading-relaxed text-muted md:text-base"
            >
              The end-to-end platform for artists, museums and brands to launch an
              NFT marketplace that feels like a gallery — not a checkout page.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-3 rounded-full bg-bone px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white"
                >
                  Request access
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-ink/10 transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </Magnetic>
              <a
                href="#platform"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-bone/80 transition-colors hover:border-white/35 hover:text-bone"
              >
                Explore the platform
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-6 font-mono text-[10px] tracking-[0.16em] text-muted/80 uppercase"
            >
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-mint" />
                Built on Flow
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="hidden sm:inline">180+ creators onboarded</span>
            </motion.div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:flex lg:flex-col lg:items-end lg:justify-end lg:gap-10 lg:pb-6">
            <LiveDrop />
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex items-end justify-between gap-6 border-t border-white/10 pt-6"
        >
          <a
            href="#manifesto"
            className="group flex items-center gap-4 text-muted transition-colors hover:text-bone"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-white/15">
              <motion.span
                animate={reduced ? undefined : { y: [-3, 3, -3] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="text-xs"
              >
                ↓
              </motion.span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.24em] uppercase">
              Scroll to explore
            </span>
          </a>

          <RotatingBadge />

          <div className="hidden text-right font-mono text-[10px] tracking-[0.18em] text-muted/70 uppercase md:block">
            <p>25.2048° N, 55.2708° E</p>
            <p className="mt-1">Dubai · Worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
