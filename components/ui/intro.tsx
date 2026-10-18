"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORD = "MOMENTABLE";
const KEY = "momentable:intro:v2";

export function Intro() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem(KEY, "1");

    if (reduced) {
      setVisible(false);
      return;
    }

    const start = performance.now();
    const duration = 1150;
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p);
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setVisible(false), 220);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          aria-hidden
          className="fixed inset-0 z-[99] flex flex-col justify-between overflow-hidden bg-ink px-6 py-8 md:px-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            <span>Momentable</span>
            <span>Est. 2021</span>
          </div>

          <div className="flex flex-wrap overflow-hidden">
            {WORD.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.06 + index * 0.028,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[clamp(2.4rem,9.5vw,9rem)] leading-[0.85] font-medium tracking-[-0.04em]"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              <span>Reintroducing the platform</span>
              <span className="text-bone">
                {String(Math.round(progress * 100)).padStart(3, "0")}
              </span>
            </div>
            <div className="h-px w-full bg-white/10">
              <motion.div
                className="h-px bg-gradient-to-r from-rose via-iris to-mint"
                animate={{ scaleX: progress }}
                style={{ originX: 0 }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
