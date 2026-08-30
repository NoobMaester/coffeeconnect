import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#315B3A] px-6 py-24 text-white lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6ad72]">
            Let&apos;s connect
          </p>

          <h2 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-[0.98] tracking-tight">
            Coffee connects everything we do.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Whether you want to buy Rwandan coffee, build practical skills,
            support inclusive development or explore a partnership, there is
            a place for you in our ecosystem.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#coffee"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#315B3A] transition hover:bg-white/90"
            >
              Buy Coffee
            </Link>

            <Link
              href="#academy"
              className="rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-semibold transition hover:bg-white hover:text-[#315B3A]"
            >
              Join Training
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-semibold transition hover:bg-white hover:text-[#315B3A]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}