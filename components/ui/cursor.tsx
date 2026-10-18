"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.2 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add("cursor-none");

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const onOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      setActive(
        Boolean(
          target?.closest("a, button, [data-cursor='hover'], input, textarea"),
        ),
      );
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[95] hidden mix-blend-difference md:block"
    >
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-white"
        style={{ x: ringX, y: ringY, width: 38, height: 38, marginLeft: -19, marginTop: -19 }}
        animate={{
          scale: pressed ? 0.8 : active ? 1.75 : 1,
          opacity: active ? 0.9 : 0.55,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-white"
        style={{ x: dotX, y: dotY, width: 5, height: 5, marginLeft: -2.5, marginTop: -2.5 }}
        animate={{ scale: active ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  );
}
