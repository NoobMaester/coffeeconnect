import Image from "next/image";
import Link from "next/link";

const courses = [
  "Coffee Farming & Processing",
  "Green Coffee Grading & Quality",
  "Sensory Analysis & Roasting",
  "Brewing & Barista Skills",
  "Climate-Smart Coffee Practices",
  "Entrepreneurship & Career Development",
];

const impact = [
  ["300+", "People trained"],
  ["61%", "Women participants"],
  ["20+", "People with disabilities"],
  ["76.6%", "Employed / self-employed"],
  ["11", "Businesses created"],
];

export default function AcademyPreview() {
  return (
    <section id="academy" className="bg-[#f8f5ef]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#315B3A]/20 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315B3A]">
                Rwanda TVET Board Accredited
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-[#1c211d] sm:text-6xl">
              Learn Coffee.
              <br />
              Build Skills.
              <br />
              Create Opportunity.
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-black/60 sm:text-lg">
              Practical coffee education designed to build technical skills,
              entrepreneurship and career opportunities across Rwanda&apos;s
              coffee sector.
            </p>

            <Link
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-[#315B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24462d]"
            >
              Apply for Training →
            </Link>
          </div>
        </div>

        {/* Image + courses */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-420px overflow-hidden rounded-3xl">
            <Image
              src="/academy-training.jpg"
              alt="Coffee skills training"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 text-white">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                Coffee Skills Academy
              </p>

              <p className="mt-2 text-2xl font-semibold">
                Turning practical skills into opportunity.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#315B3A]">
              Our courses
            </p>

            <div className="mt-6 divide-y divide-black/10">
              {courses.map((course, index) => (
                <div
                  key={course}
                  className="flex items-center gap-5 py-5"
                >
                  <span className="text-xs font-medium text-black/30">
                    0{index + 1}
                  </span>

                  <span className="text-base font-medium text-[#1c211d]">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training impact */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-[#315B3A] text-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5">
            {impact.map(([value, label]) => (
              <div
                key={label}
                className="border-white/10 px-6 py-8 sm:border-r lg:px-8 lg:py-10"
              >
                <p className="text-3xl font-semibold">{value}</p>

                <p className="mt-2 text-xs uppercase tracking-wide text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="rounded-full border border-black/15 px-6 py-3 text-center text-sm font-semibold text-[#1c211d] transition hover:bg-white"
          >
            Sponsor a Cohort
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-black/15 px-6 py-3 text-center text-sm font-semibold text-[#1c211d] transition hover:bg-white"
          >
            Partner With Our Academy
          </Link>
        </div>
      </div>
    </section>
  );
}