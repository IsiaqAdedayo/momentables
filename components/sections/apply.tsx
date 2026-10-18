"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

const AUDIENCES = ["Artist", "Museum", "Brand"] as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = "idle" | "loading" | "done";

export function Apply() {
  const reduced = useReducedMotion();
  const [audience, setAudience] = useState<(typeof AUDIENCES)[number]>("Artist");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("That email doesn't look right. Mind checking it?");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), audience }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("Something went wrong on our end. Try again in a moment.");
    }
  }

  return (
    <section id="apply" className="section relative overflow-hidden">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(140deg,rgba(243,239,231,0.07),rgba(243,239,231,0.015)_45%,rgba(6,6,10,0.4))] p-6 md:p-12 lg:p-16">
          <div
            aria-hidden
            className="orb -top-24 -left-16 h-80 w-80 bg-rose/30"
          />
          <div
            aria-hidden
            className="orb -right-20 -bottom-32 h-96 w-96 bg-iris/30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.26em] uppercase">
                <span className="text-muted/70">05</span>
                <span className="h-px w-8 bg-white/20" />
                <span className="text-muted">Apply</span>
              </div>

              <h2 className="mt-6 text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.02] font-medium tracking-[-0.035em]">
                Bring your vision{" "}
                <span className="display chrome-text italic">to reality.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                Tell us what you&apos;re building. We reply to every request
                within two business days — usually with questions.
              </p>

              <div className="mt-8 space-y-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                <p className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-mint" />
                  No platform fee for the first season
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-iris" />
                  White-glove onboarding included
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink/50 p-5 backdrop-blur-xl md:p-7">
              <AnimatePresence mode="wait" initial={false}>
                {status === "done" ? (
                  <motion.div
                    key="success"
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    className="py-6 text-center"
                  >
                    <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-mint/30 bg-mint/10">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-mint">
                        <motion.path
                          d="M5 12.5l4.2 4.2L19 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </svg>
                    </span>
                    <p className="mt-5 font-serif text-2xl italic">
                      You&apos;re on the list.
                    </p>
                    <p className="mx-auto mt-2 max-w-[16rem] text-xs leading-relaxed text-muted">
                      We&apos;ll write to {email} about your {audience.toLowerCase()}{" "}
                      project.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setEmail("");
                      }}
                      className="mt-6 font-mono text-[10px] tracking-[0.16em] text-muted uppercase underline underline-offset-4 transition-colors hover:text-bone"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={false}
                    exit={{ opacity: 0, y: -16 }}
                    className="space-y-6"
                    noValidate
                  >
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">
                        I am a
                      </span>
                      <div className="mt-3 flex gap-2">
                        {AUDIENCES.map((option) => (
                          <button
                            key={option}
                            type="button"
                            aria-pressed={audience === option}
                            onClick={() => setAudience(option)}
                            className={`flex-1 rounded-full border px-3 py-2 text-xs transition-colors ${
                              audience === option
                                ? "border-bone bg-bone text-ink"
                                : "border-white/15 text-muted hover:border-white/35 hover:text-bone"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="apply-email"
                        className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase"
                      >
                        Email
                      </label>
                      <input
                        id="apply-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@studio.com"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          if (error) setError("");
                        }}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? "apply-error" : undefined}
                        className="mt-3 w-full border-b border-white/20 bg-transparent pb-3 text-lg tracking-tight outline-none transition-colors placeholder:text-muted/50 focus:border-bone"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-bone px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white disabled:cursor-wait disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-3.5 w-3.5 animate-spin rounded-full border border-ink/30 border-t-ink" />
                          Sending
                        </>
                      ) : (
                        <>
                          Request access
                          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                            ↗
                          </span>
                        </>
                      )}
                    </button>

                    <p
                      id="apply-error"
                      role="alert"
                      aria-live="polite"
                      className="min-h-[1rem] text-[11px] text-rose"
                    >
                      {error}
                    </p>

                    <p className="text-center font-mono text-[9px] tracking-[0.14em] text-muted/70 uppercase">
                      Or write to hello@momentable.com
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
