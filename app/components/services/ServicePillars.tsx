import Reveal from "../ui/Reveal";

interface Pillar {
  number: string;
  title: string;
  description: string;
}

interface ServicePillarsProps {
  title: string;
  description?: string;
  items: Pillar[];
}

export default function ServicePillars({
  title,
  description,
  items,
}: ServicePillarsProps) {
  return (
    <section className="bg-[#f8f5ef] px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315B3A]">
              Our approach
            </p>

            <h2 className="mt-5 text-[clamp(2.3rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1c211d]">
              {title}
            </h2>

            {description && (
              <p className="mt-6 text-base leading-7 text-black/55 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-14 grid border-l border-t border-black/10 sm:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.06}>
              <article className="h-full border-b border-r border-black/10 p-6 sm:p-8 lg:p-10">
                <span className="text-sm font-semibold text-[#315B3A]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#1c211d]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-black/50 sm:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}