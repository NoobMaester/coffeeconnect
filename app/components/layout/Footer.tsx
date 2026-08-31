import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Coffee", href: "#coffee" },
  { label: "Academy", href: "#academy" },
  { label: "Impact", href: "#impact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c211d] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight"
            >
              <Image src="/ccc-logo.png" alt="Coffee Connect Centre" width={1664} height={1024} className="w-48 h-auto" priority />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              Connecting farming, skills, value addition, people and markets
              to create impact from farm to cup.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
              <p>
                Gikondo, Kigali, Rwanda
                <br />
                KK 625 St
              </p>

              <a
                href="tel:+250781140324"
                className="block transition hover:text-white"
              >
                +250 781 140 324
              </a>

              <a
                href="mailto:coffeeconnectcentreltd@gmail.com"
                className="block transition hover:text-white"
              >
                coffeeconnectcentreltd@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Coffee Connect Centre Ltd.</p>

          <div className="flex gap-5">
            <Link href="#" className="transition hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="transition hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="transition hover:text-white">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}