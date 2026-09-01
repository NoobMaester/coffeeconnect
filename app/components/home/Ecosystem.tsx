import Reveal from "../ui/Reveal";

const journey = [
  {
    number: "01",
    title: "Farm",
    description: "Sustainable and climate-smart coffee production.",
  },
  {
    number: "02",
    title: "Process",
    description: "Quality-focused processing and value addition.",
  },
  {
    number: "03",
    title: "Roast",
    description: "Transforming Rwandan green coffee beans locally.",
  },
  {
    number: "04",
    title: "Cup",
    description: "Connecting local, high quality coffee with the market.",
  },
];

export default function Ecosystem() {
  return (
    <section id="about" className="bg-[#f8f5ef] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315B3A]">
              Our ecosystem
            </p>

            <h2 className="mt-5 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading -[1.05] tracking-tight text-[#1c211d]">
              Building an integrated coffee ecosystem.
            </h2>

            <p className="mt-6 text-base leading-7 text-black/60 sm:text-lg">
              Coffee Connect Centre connects farming, processing, quality,
              roasting, skills, entrepreneurship, markets and circular economy
              innovation.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.1}>
              <div
                className="bg-[#f8f5ef] p-6 sm:p-8 lg:p-10"
              >
                <span className="text-sm font-medium text-black/30">
                  {item.number}
                </span>

                <h3 className="mt-14 text-2xl font-semibold text-[#315B3A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  {item.description}
                </p>
              </div>
            </Reveal>

          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#315B3A] p-8 text-white sm:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              People
            </p>

            <h3 className="mt-5 text-3xl font-semibold">
              Skills → Jobs → Entrepreneurship
            </h3>
          </div>

          <div className="rounded-3xl bg-[#1c211d] p-8 text-white sm:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Circular economy
            </p>

            <h3 className="mt-5 text-3xl font-semibold">
              Waste → Innovation → New Products
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}