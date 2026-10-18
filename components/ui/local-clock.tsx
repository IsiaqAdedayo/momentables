"use client";

import { useEffect, useState } from "react";

export function LocalClock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const interval = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return <span className="font-mono tabular-nums">{time} GST</span>;
}
