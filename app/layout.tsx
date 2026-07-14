import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ---------------------------------------------------------------------------
// Fonts. Loaded once here, exposed as CSS variables, used everywhere via
// Tailwind's font-display / font-body / font-mono classes (see tailwind.config.ts).
// ---------------------------------------------------------------------------
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// EDIT THIS: this is what shows up in Google search results and browser tabs.
export const metadata: Metadata = {
  title: "Jess Lewis — Product Manager & Builder",
  description:
    "Product manager who ships. Case studies on Product Sense, Cadence, and Almanac — three apps built from scratch, no engineering team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
