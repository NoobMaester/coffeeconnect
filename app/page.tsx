
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ImpactStrip from "./components/home/ImpactStrip";
import Ecosystem from "./components/home/Ecosystem";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactStrip />
      <Ecosystem />

      <section id="what-we-do" className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <h2 className="text-5xl font-semibold">What We Do</h2>
        </div>
      </section>

      <section id="coffee" className="min-h-screen bg-[#315B3A]">
        <div className="mx-auto max-w-7xl px-6 py-32 text-white lg:px-8">
          <h2 className="text-5xl font-semibold">Murugo Coffee</h2>
        </div>
      </section>

      <section id="academy" className="min-h-screen bg-[#f8f5ef]">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <h2 className="text-5xl font-semibold">Coffee Skills Academy</h2>
        </div>
      </section>

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
