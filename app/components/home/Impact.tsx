import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: "300+",
    label: "People trained",
  },
  {
    value: "76.6%",
    label: "Employment & self-employment",
  },
  {
    value: "3,000+",
    label: "Farmers supported",
  },
  {
    value: "61%",
    label: "Women participants",
  },
  {
    value: "20+",
    label: "People with disabilities",
  },
  {
    value: "1,176+",
    label: "Coffee trees",
  },
  {
    value: "11",
    label: "Graduate businesses",
  },
  {
    value: "10,000+",
    label: "Tree target by 2030",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315B3A]">
            Our impact
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#1c211d] sm:text-5xl lg:text-6xl">
            Coffee that creates impact.
          </h2>

          <p className="mt-6 text-base leading-7 text-black/55 sm:text-lg">
            Our work connects coffee, skills and opportunity to create
            measurable change for people, farmers and the environment.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-r border-black/10 p-6 sm:p-8 lg:p-10"
            >
              <p className="text-3xl font-semibold tracking-tight text-[#315B3A] sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-3 max-w-40 text-xs font-medium uppercase leading-5 tracking-wide text-black/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-6 grid overflow-hidden rounded-3xl bg-[#1c211d] text-white lg:grid-cols-2">
          <div className="relative min-h-95">
            <Image
              src="/impact-story.jpg"
              alt="Coffee Connect Centre impact story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6ad72]">
              From training to opportunity
            </p>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Skills that create livelihoods.
            </h3>

            <p className="mt-5 text-base leading-7 text-white/60">
              Through practical training and entrepreneurship development,
              Coffee Connect Centre helps turn skills into employment,
              businesses and new opportunities.
            </p>

            <Link
              href="#contact"
              className="mt-8 w-fit rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#1c211d]"
            >
              Discover Our Impact →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}