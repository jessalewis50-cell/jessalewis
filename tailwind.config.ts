import type { Config } from "tailwindcss";

// ---------------------------------------------------------------------------
// DESIGN TOKENS
// These are the only colors/fonts the whole site should use. Keeping them
// centralized here means if you ever want to change the look, you change it
// in ONE place instead of hunting through every component.
//
// Concept: a "field log" — Cadence and Almanac are both about time and
// notes, so the site itself reads like a builder's logbook. Paper background,
// ink text, a brass accent (like a clock hand) for anything "active," and a
// muted ledger-green for "done/shipped" states.
// ---------------------------------------------------------------------------
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2F3EF", // main background — warm-gray paper, not stark white
        ink: "#1B1D1F", // primary text — near-black, not pure black
        graphite: "#6B6F76", // secondary text, borders, muted labels
        brass: "#C08A3E", // accent for "in progress / active" — like a clock hand
        ledger: "#3F6650", // accent for "shipped / done" — like a ledger stamp
        line: "#DAD9D2", // hairline dividers
      },
      fontFamily: {
        // Display font: used for headlines only, sparingly
        display: ["var(--font-display)", "sans-serif"],
        // Body font: everything you actually read
        body: ["var(--font-body)", "sans-serif"],
        // Mono font: timestamps, labels, status badges — the "logbook" feel
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "760px", // keeps text line-length readable — don't stretch full width
      },
      keyframes: {
        "pulse-line": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
