import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Platform } from "@/components/sections/platform";
import { Drops } from "@/components/sections/drops";
import { Beyond } from "@/components/sections/beyond";
import { Metrics } from "@/components/sections/metrics";
import { Apply } from "@/components/sections/apply";
import { Footer } from "@/components/sections/footer";
import { Marquee } from "@/components/ui/marquee";

const PARTNERS = [
  "Victory Square",
  "Cloud Nine Web3",
  "The Mob Museum",
  "Flow",
  "Atelier 21",
  "Foundation for Arts",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <div className="bg-ink-soft/40">
          <Marquee items={PARTNERS} label="Trusted by" />
        </div>
        <Manifesto />
        <Platform />
        <Drops />
        <Beyond />
        <Metrics />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
