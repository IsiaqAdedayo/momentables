"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Spotlight } from "@/components/ui/spotlight";
import { GenerativeArt } from "@/components/ui/generative-art";
import { Countdown } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[9px] tracking-[0.22em] text-muted uppercase">
      {children}
    </span>
  );
}

function LivePill() {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/10 px-2.5 py-1">
      <span className="h-1 w-1 rounded-full bg-mint" />
      <span className="font-mono text-[9px] tracking-[0.16em] text-mint uppercase">
        Live
      </span>
    </span>
  );
}

function StorefrontCard() {
  return (
    <Spotlight className="flex h-full w-full flex-col justify-between gap-8 p-6 md:p-8">
      <div>
        <div className="flex items-center justify-between">
          <CardLabel>Storefront</CardLabel>
          <LivePill />
        </div>
        <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
          A shop that feels like a{" "}
          <span className="display italic">vernissage.</span>
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Launch a branded marketplace on your own domain — drops, editions and
          exhibitions, all under one roof.
        </p>
      </div>

      <div className="relative rounded-xl border border-white/10 bg-ink/60 p-3">
        <div className="flex items-center justify-between border-b border-white/8 pb-2.5">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.12em] text-muted">
            atelier.momentable.com
          </span>
          <span className="font-mono text-[9px] text-muted">ETH</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {([0, 1, 2] as const).map((variant, index) => (
            <div key={variant} className="group/tile">
              <div className="relative overflow-hidden rounded-lg">
                <GenerativeArt
                  variant={variant}
                  className="aspect-4/5 w-full transition-transform duration-700 group-hover/tile:scale-[1.04]"
                  detail={false}
                />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] text-bone/80">
                  {["Bloom", "Signal", "Archive"][index]}
                </span>
                <span className="font-mono text-[9px] text-muted">
                  {["4.2", "1.8", "2.6"][index]}Ξ
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
          <span className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
            Curated by Studio Atlas
          </span>
          <span className="rounded-full bg-bone px-3 py-1 text-[10px] font-medium text-ink">
            Collect
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] tracking-[0.16em] text-muted uppercase">
        <span>Custom domains</span>
        <span>·</span>
        <span>Editions</span>
        <span>·</span>
        <span>Exhibitions</span>
      </div>
    </Spotlight>
  );
}

function AuctionCard() {
  return (
    <Spotlight className="flex h-full w-full flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <CardLabel>Auctions</CardLabel>
        <span className="font-mono text-[9px] text-muted">14 bids</span>
      </div>

      <div className="mt-6">
        <p className="text-lg leading-snug font-medium">
          Anti-snipe windows.
          <br />
          <span className="text-muted">Reserve prices.</span>
        </p>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="font-mono text-[9px] tracking-[0.16em] text-muted uppercase">
              Closing in
            </p>
            <Countdown offsetHours={19} className="text-xl" />
          </div>
          <svg viewBox="0 0 90 40" className="h-10 w-24 text-mint" aria-hidden>
            <path
              d="M2 34 L14 26 L26 29 L38 18 L50 22 L62 12 L74 15 L88 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="88" cy="4" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </Spotlight>
  );
}

function RoyaltiesCard() {
  const reduced = useReducedMotion();
  const splits = [
    { label: "Creator", value: 70, tone: "bg-rose" },
    { label: "Studio", value: 20, tone: "bg-iris" },
    { label: "Foundation", value: 10, tone: "bg-mint" },
  ];

  return (
    <Spotlight className="flex h-full w-full flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <CardLabel>Royalties</CardLabel>
        <span className="font-mono text-[9px] text-muted">Perpetual</span>
      </div>

      <div className="mt-6">
        <p className="text-lg leading-snug font-medium">
          Paid on every
          <br />
          <span className="text-muted">future sale.</span>
        </p>

        <div className="mt-5 flex h-1.5 w-full gap-1 overflow-hidden rounded-full">
          {splits.map((split, index) => (
            <motion.span
              key={split.label}
              className={`h-full rounded-full ${split.tone}`}
              initial={reduced ? false : { width: 0 }}
              whileInView={{ width: `${split.value}%` }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-between font-mono text-[9px] text-muted">
          <span>70%</span>
          <span>20%</span>
          <span>10%</span>
        </div>
      </div>
    </Spotlight>
  );
}

function AccessCard() {
  const [gated, setGated] = useState(true);

  return (
    <Spotlight className="flex h-full w-full flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <CardLabel>Access</CardLabel>
        <span className="font-mono text-[9px] text-muted">Token gate</span>
      </div>

      <div className="mt-6">
        <p className="text-lg leading-snug font-medium">
          Set the <span className="text-muted">guest list.</span>
        </p>

        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div>
            <p className="text-xs">{gated ? "Members only" : "Public drop"}</p>
            <p className="mt-0.5 font-mono text-[9px] tracking-[0.1em] text-muted uppercase">
              {gated ? "Holds 1+ Momentable NFT" : "Open to everyone"}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={gated}
            aria-label="Toggle token gating"
            onClick={() => setGated((value) => !value)}
            className={`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${
              gated ? "border-mint/40 bg-mint/25" : "border-white/15 bg-white/10"
            }`}
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
              className={`absolute top-0.5 h-5 w-5 rounded-full ${
                gated ? "left-[22px] bg-mint" : "left-0.5 bg-bone/70"
              }`}
            />
          </button>
        </div>
      </div>
    </Spotlight>
  );
}

function ProvenanceCard() {
  const [copied, setCopied] = useState(false);
  const hash = "0x8f2c…4a91";

  return (
    <Spotlight className="flex h-full w-full flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <CardLabel>Provenance</CardLabel>
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" aria-hidden>
          <path
            d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path d="M12 2v18M4 6.5l16 9M20 6.5l-16 9" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        </svg>
      </div>

      <div className="mt-6">
        <p className="text-lg leading-snug font-medium">
          Every moment,
          <br />
          <span className="text-muted">receipted.</span>
        </p>

        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(
                "0x8f2c19aa72e4b93d55c1f0a67d2b4e918c3f7a914a91",
              );
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1800);
            } catch {
              setCopied(false);
            }
          }}
          className="mt-5 flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left transition-colors hover:border-white/25"
        >
          <span className="font-mono text-[11px] text-bone/80">{hash}</span>
          <span className="font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
            {copied ? "Copied" : "Copy"}
          </span>
        </button>
      </div>
    </Spotlight>
  );
}

function WhiteGloveCard() {
  return (
    <Spotlight className="flex h-full w-full flex-col justify-between p-6">
      <div className="flex items-center justify-between">
        <CardLabel>White glove</CardLabel>
        <span className="font-mono text-[9px] text-muted">2021 →</span>
      </div>

      <div className="mt-6">
        <p className="font-serif text-2xl leading-tight italic">
          “A team, not a dashboard.”
        </p>
        <div className="mt-5 flex items-center gap-2">
          <div className="flex -space-x-2">
            {["LA", "VS", "CN"].map((initials, index) => (
              <span
                key={initials}
                className="grid h-7 w-7 place-items-center rounded-full border border-ink bg-gradient-to-br from-white/25 to-white/5 font-mono text-[9px]"
                style={{ zIndex: 3 - index }}
              >
                {initials}
              </span>
            ))}
          </div>
          <span className="font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
            Strategists on call
          </span>
        </div>
      </div>
    </Spotlight>
  );
}

export function Platform() {
  return (
    <section id="platform" className="section">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="The platform"
          title={
            <>
              Everything a drop needs.{" "}
              <span className="display text-muted italic">
                Nothing it doesn&apos;t.
              </span>
            </>
          }
          description="One system for the whole arc — from the first sketch to the secondary sale. Built with Flow, designed for people who care how things feel."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:auto-rows-[minmax(205px,auto)]">
          <Reveal className="md:col-span-4 md:row-span-2">
            <StorefrontCard />
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <AuctionCard />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-2">
            <RoyaltiesCard />
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <AccessCard />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-2">
            <ProvenanceCard />
          </Reveal>
          <Reveal delay={0.18} className="md:col-span-2">
            <WhiteGloveCard />
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          <span>Minting</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Analytics</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Community</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>AR drops</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Flow · EVM compatible</span>
        </Reveal>
      </div>
    </section>
  );
}
