import Image from "next/image";
import Link from "next/link";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-[#1c211d] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-4xl">
          <Link
            href="/what-we-do"
            className="mb-8 inline-flex text-sm font-medium text-white/65 transition hover:text-white"
          >
            ← What We Do
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6ad72]">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}