import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const services = [
  {
    number: "01",
    title: "Coffee Production",
    description:
      "Promoting organic and climate-smart practices for sustainable coffee production and improved farm productivity.",
    image: "/coffee-farm.webp",
    link: "/what-we-do/coffee-production",
  },
  {
    number: "02",
    title: "Roasting & Value Addition",
    description:
      "Transforming Rwandan coffee locally through quality-focused processing and roasting.",
    image: "/coffee-roasting.jpg",
    link: "/what-we-do/roasting-value-addition",
  },
  {
    number: "03",
    title: "Farmer Support",
    description:
      "Supporting farmers and cooperatives through training, quality improvement, skills and market connections.",
    image: "/coffee-farmers.jpg",
    link: "/what-we-do/farmers-cooperatives",
  },
  {
    number: "04",
    title: "Circular Economy",
    description:
      "Turning coffee residues into new products, income streams, skills and employment opportunities.",
    image: "/coffee-waste.jpg",
    link: "/what-we-do/circular-economy",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-white px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315B3A]">
                What we do
              </p>

              <h2 className="mt-5 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[#1c211d]">
                Creating value from farm to cup.
              </h2>
            </div>
          </Reveal>

          <p className="max-w-md text-base leading-7 text-black/55">
            We connect production, value addition, skills development and
            markets to build a stronger and more inclusive coffee ecosystem.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.1}>
              <article
                className="group overflow-hidden rounded-3xl bg-[#f8f5ef]"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                  <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#315B3A] backdrop-blur-sm">
                    {service.number}
                  </span>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1c211d]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    {service.description}
                  </p>

                  <Link href={service.link} className="mt-6 text-sm font-semibold text-[#315B3A]">
                    Learn more →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}