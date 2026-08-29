
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ImpactStrip from "./components/home/ImpactStrip";
import Ecosystem from "./components/home/Ecosystem";
import WhatWeDo from "./components/home/WhatWeDo";
import CoffeePreview from "./components/home/CoffeePreview";
import AcademyPreview from "./components/home/AcademyPreview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactStrip />
      <Ecosystem />
      <WhatWeDo />
      <CoffeePreview />
      <AcademyPreview />

      <section id="impact" className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <h2 className="text-5xl font-semibold">Impact</h2>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#1c211d]">
        <div className="mx-auto max-w-7xl px-6 py-32 text-white lg:px-8">
          <h2 className="text-5xl font-semibold">
            Coffee connects everything we do.
          </h2>
        </div>
      </section>

    </main>
  );
}
