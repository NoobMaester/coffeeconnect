import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Coffee Connect Center | From Farm to Impact",
  description: "Coffee Connect Center connects farming, skills, value addition, people and markets to create a sustainable coffee ecosystem that benefits all stakeholders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
