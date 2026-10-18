"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export function TiltCard({
  children,
  className = "",
  max = 9,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 20,
    mass: 0.4,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 20,
    mass: 0.4,
  });

  return (
    <div style={{ perspective: 1100 }} className={className}>
      <motion.div
        ref={ref}
        className="h-full w-full"
        style={
          reduced
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        onPointerMove={(event) => {
          if (reduced || !ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          rotateY.set(px * max);
          rotateX.set(-py * max);
          ref.current.style.setProperty(
            "--mx",
            `${event.clientX - rect.left}px`,
          );
          ref.current.style.setProperty(
            "--my",
            `${event.clientY - rect.top}px`,
          );
        }}
        onPointerLeave={() => {
          rotateX.set(0);
          rotateY.set(0);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
