import Reveal from "../ui/Reveal";

interface Stat {
  value: string;
  label: string;
}

interface ServiceStatsProps {
  title?: string;
  stats: Stat[];
}

export default function ServiceStats({
  title = "The numbers behind the work",
  stats,
}: ServiceStatsProps) {
  return (
    <section className="bg-[#315B3A] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {title}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="h-full border-b border-r border-white/15 p-6 sm:p-8 lg:p-10">
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-3 text-xs uppercase leading-5 tracking-wide text-white/50">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}