import Image from "next/image";
import Link from "next/link";

const products = [
  {
    size: "250g",
    image: "/murugo-coffee-250g.png",
  },
  {
    size: "500g",
    image: "/murugo-coffee-500g.png",
  },
  {
    size: "1kg",
    image: "/murugo-coffee-1kg.png",
  },
];

export default function CoffeePreview() {
  return (
    <section
      id="coffee"
      className="overflow-hidden bg-[#315B3A] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6ad72]">
              Our Coffee
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Murugo Coffee
            </h2>

            <p className="mt-5 text-xl font-medium text-white/80">
              Real Coffee. Real Impact.
            </p>
          </div>

          <p className="max-w-lg text-base leading-7 text-white/65">
            Premium Rwandan coffee grown, processed and roasted locally while
            creating opportunities for farmers and the next generation of
            coffee professionals.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.size} className="group">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-[#24462d]">
                <Image
                  src={product.image}
                  alt={`Murugo Coffee ${product.size}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-5 flex items-center justify-around">
                <h3 className="text-5xl font-semibold">
                  {product.size}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Product details */}
        <div className="mt-12 flex flex-col gap-8 rounded-3xl bg-white/10 p-7 backdrop-blur-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Available as
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {["Whole Beans", "Ground", "Medium Roast", "Medium Dark", "Dark Roast"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <Link
            href="https://wa.me/250781140324"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#315B3A] transition hover:bg-white/90"
          >
            Order Coffee →
          </Link>
        </div>

        {/* Wholesale */}
        <div className="mt-6 flex flex-col gap-5 rounded-3xl border border-white/15 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6ad72]">
              For Businesses
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Reliable roasted coffee supply.
            </h3>

            <p className="mt-2 text-sm text-white/55">
              Hotels · Cafés · Restaurants · Offices · Retailers
            </p>
          </div>

          <Link
            href="#contact"
            className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-[#315B3A]"
          >
            Request Wholesale Quote
          </Link>
        </div>
      </div>
    </section>
  );
}