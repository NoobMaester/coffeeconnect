const stats = [
  {
    value: "300+",
    label: "People Trained",
  },
  {
    value: "76.6%",
    label: "Employed / Self-Employed",
  },
  {
    value: "61%",
    label: "Women Participants",
  },
  {
    value: "3,000+",
    label: "Farmers Supported",
  },
  {
    value: "11",
    label: "Businesses Created",
  },
];

export default function ImpactStrip() {
  return (
    <section className="border-b border-black/10 bg-[#f8f5ef]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-black/10 px-5 py-7 sm:px-8 sm:py-10 lg:border-b-0 lg:boerder-r"
          >
            <p className="text-3xl font-semibold tracking-tight text-[#315B3A] sm:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs font-medium uppercase leading-5 tracking-wide text-black/50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}