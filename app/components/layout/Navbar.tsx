"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Coffee", href: "#coffee" },
  { label: "Academy", href: "#academy" },
  { label: "Impact", href: "#impact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 lg:py-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-50 text-lg font-semibold tracking-tight text-white"
        >
          <Image src="/ccc-logo-white.png" alt="Coffee Connect Centre" width={1664} height={1024} className="w-40 h-auto" priority />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="ml-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#315B3A] transition-transform hover:scale-[1.02]"
          >
            Partner With Us
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>

          <span className="flex w-5 flex-col gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-px w-full bg-current"
            />

            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-full bg-current"
            />

            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block h-px w-full bg-current"
            />
          </span>
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 right-4 top-3 rounded-3xl bg-[#1c211d] p-6 pt-20 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.2,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block border-b border-white/10 py-4 text-lg font-medium text-white/85"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-6 rounded-full bg-white px-5 py-3.5 text-center text-sm font-semibold text-[#315B3A]"
                >
                  Partner With Us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}