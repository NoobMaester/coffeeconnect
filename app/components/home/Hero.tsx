import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.webp"
        alt="Coffee farm"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-28 pt-32 lg:px-8">
        <div className="max-w-4xl text-white">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Coffee Connect Centre
          </p>

          <h1 className="max-w-4xl text-[clamp(3rem,5vw,7rem)] font-semibold leading-[1.05] tracking-tight">
            From Farm.
            <br />
            To Skills.
            <br />
            To Market.
            <br />
            To Impact.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-6 text-white/80 sm:mt-8 sm:leading-7 sm:text-lg">
            Coffee Connect Centre is transforming Rwanda&apos;s coffee sector
            through sustainable production, local value addition, practical
            skills development, and circular economy innovation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Link
              href="#coffee"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#315B3A] transition hover:bg-white/90"
            >
              Explore Our Coffee
            </Link>

            <Link
              href="#academy"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Join Our Training
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-white/60 sm:block">
        Scroll to explore
      </div>
    </section>
  );
}