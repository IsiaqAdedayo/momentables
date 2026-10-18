"use client";

import { useEffect, useState } from "react";

export function Countdown({
  offsetHours = 30,
  className = "",
}: {
  offsetHours?: number;
  className?: string;
}) {
  const [label, setLabel] = useState("--:--:--");
  const [target] = useState(() => Date.now() + offsetHours * 3_600_000);

  useEffect(() => {
    const update = () => {
      const remaining = Math.max(0, target - Date.now());
      const hours = Math.floor(remaining / 3_600_000);
      const minutes = Math.floor((remaining % 3_600_000) / 60_000);
      const seconds = Math.floor((remaining % 60_000) / 1000);
      setLabel(
        [hours, minutes, seconds]
          .map((value) => String(value).padStart(2, "0"))
          .join(":"),
      );
    };

    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <span className={`font-mono tabular-nums ${className}`}>{label}</span>
  );
}
