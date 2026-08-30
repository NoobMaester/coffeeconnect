import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Coffee", href: "#coffee" },
  { label: "Academy", href: "#academy" },
  { label: "Impact", href: "#impact" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          <Image src="/ccc-logo.png" alt="Coffee Connect Centre" width={1664} height={1024} className="w-40 h-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#315B3A] transition hover:bg-white/90"
          >
            Partner With Us
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="rounded-full border border-white/30 px-4 py-2 text-sm text-white md:hidden"
        >
          Menu
        </button>
      </div>
    </header>
  );
}