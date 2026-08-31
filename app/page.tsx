
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ImpactStrip from "./components/home/ImpactStrip";
import Ecosystem from "./components/home/Ecosystem";
import WhatWeDo from "./components/home/WhatWeDo";
import CoffeePreview from "./components/home/CoffeePreview";
import AcademyPreview from "./components/home/AcademyPreview";
import Impact from "./components/home/Impact";
import Partners from "./components/home/Partners";
import Footer from "./components/layout/Footer";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ImpactStrip />
        <Ecosystem />
        <WhatWeDo />
        <CoffeePreview />
        <AcademyPreview />
        <Impact />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
