import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument-sans" });

export const metadata: Metadata = {
  title: "Coffee Connect Center | From Farm to Impact",
  description: "CCC connects farming, skills, value addition, people and markets to create a sustainable coffee ecosystem that benefits all stakeholders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
    >
      <body className={instrumentSans.variable}>{children}</body>
    </html>
  );
}
