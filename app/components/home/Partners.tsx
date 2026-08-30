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
    <section className="bg-[#f8f5ef] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#315B3A]">
              Our partners
            </p>

            <h2 className="mt-5 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[#1c211d]">
              Growing through collaboration.
            </h2>
          </div>

          <div>
            {partnerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-medium text-black/45">
                  {group.title}
                </p>

                <div className="mt-6 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3">
                  {group.partners.map((partner) => (
                    <div
                      key={partner}
                      className="flex min-h-24 items-center border-b border-r border-black/10 p-5 text-sm font-medium text-black/65"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}