import Link from "next/link";

interface ServiceCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function ServiceCTA({
  title = "Let's grow the coffee ecosystem together.",
  description = "Explore more of our work or get in touch to discuss opportunities for collaboration.",
  primaryLabel = "Partner With Us",
  primaryHref = "/#contact",
}: ServiceCTAProps) {
  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-[#1c211d] px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6ad72]">
              What&apos;s next
            </p>

            <h2 className="mt-5 text-[clamp(2.5rem,6vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              {title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#1c211d] transition hover:bg-white/90"
              >
                {primaryLabel}
              </Link>

              <Link
                href="/#what-we-do"
                className="rounded-full border border-white/20 px-6 py-3.5 text-center text-sm font-semibold transition hover:bg-white hover:text-[#1c211d]"
              >
                Explore More Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}