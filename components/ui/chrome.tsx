"use client";

import { Cursor } from "./cursor";
import { Grain } from "./grain";
import { Intro } from "./intro";
import { ScrollProgress } from "./scroll-progress";

export function Chrome() {
  return (
    <>
      <Intro />
      <ScrollProgress />
      <Grain />
      <Cursor />
    </>
  );
}
