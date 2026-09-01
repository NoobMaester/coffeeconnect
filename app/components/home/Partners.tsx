"use client"

import { motion } from "framer-motion";

const partnerGroups = [
  {
    title: "Public Institutions & Civil Society",
    partners: [
      "Rwanda TVET Board",
      "NAEB",
      "Rwanda National Youth Council",
      "Kicukiro District",
      "NUDOR",
      "Impanuro Girls Initiative",
      "BeVoice",
    ],
  },
];

export default function Partners() {
  return (
    <section className=" bg-[#f8f5ef] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div className="">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315B3A]">
              Our partners
            </p>

            <h2 className="mt-5 max-w-xl text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[#1c211d]">
              Growing through collaboration.
            </h2>
          </div>

          <div className="min-w-0">
            {partnerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-medium text-black/45">
                  {group.title}
                </p>

                <div className="relative mt-6 w-full min-w-0 overflow-hidden">
                  <motion.div
                    className="flex w-max will-change-transform"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  >
                    {[...group.partners, ...group.partners].map((partner, index) => (
                      <div
                        key={`${partner}-${index}`}
                        className="flex h-24 w-48 shrink-0 items-center justify-center border border-black/10 px-6 text-sm font-medium text-black/65"
                      >
                        {partner}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}