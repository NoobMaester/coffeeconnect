import Reveal from "../ui/Reveal";

interface ServiceIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export default function ServiceIntro({
  eyebrow = "Overview",
  title,
  description,
}: ServiceIntroProps) {
  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315B3A]">
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <h2 className="max-w-3xl text-[clamp(2.3rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1c211d]">
              {title}
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}