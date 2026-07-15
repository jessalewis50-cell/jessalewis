// ---------------------------------------------------------------------------
// PROJECT CONTENT
//
// This is the ONLY file you should need to edit to update your case study
// text, links, or status. The layout/design code in components/ just reads
// whatever is in here — it doesn't care what the words say. That separation
// means you can rewrite a whole case study without touching any JSX.
//
// I've pre-filled real content based on what you've told me about these
// builds — treat it as a first draft. Rewrite anything in your own voice
// before this goes live.
// ---------------------------------------------------------------------------

export type ProjectStatus = "shipped" | "in-progress";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  timeframe: string; // e.g. "2025 — present"
  stack: string[];
  problem: string;
  features: string[];
  whatsNext: string[];
  liveUrl?: string;
  // Drop screenshot files in /public/images/<folder> and reference them here.
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "product-sense",
    name: "Product Sense",
    tagline:
      "A browser game where you learn product management in six lessons, then have to survive it — real sprints, real trade-offs, and stakeholders with long memories.",
    status: "shipped",
    timeframe: "2026",
    stack: ["Next.js", "TypeScript", "Zustand"],
    problem:
      "Product sense is the one PM skill everyone screens for and nobody can teach from a book. Reading about prioritization doesn't put you in the room where two teams and three stakeholder groups all want something different. I wanted a place to practise making those calls and then live with them, rather than just describing what I'd theoretically do.",
    features: [
      "Six lessons that each move from concept cards and key terms to a short quiz, then a scoped drill of one to three sprints that exercises exactly what you just learned.",
      "Career Mode, unlocked once the lessons are done: you start as an Associate PM with one dev team and two user groups, and every promotion adds another team and another stakeholder group to keep happy.",
      "Consequences that stick — score well and you're promoted, but let two user groups churn and the run is over.",
      "A pure, seeded, deterministic game engine: the same seed produces the same game, which makes the simulation testable rather than a black box of randomness.",
      "Runs entirely in the browser, with progress saved locally — no account, no backend, no setup.",
    ],
    whatsNext: [
      "More lessons and drills beyond the initial six, covering the parts of the job the first pass didn't reach.",
      "Cloud-synced progress, so a career run isn't tied to one browser.",
      "Deeper stakeholder simulation — groups whose expectations shift over a run rather than staying fixed.",
    ],
    liveUrl: "https://product-sense-eight.vercel.app/",
    images: [
      // { src: "/images/product-sense/career-mode.png", alt: "Product Sense career mode dashboard" },
    ],
  },
  {
    id: "cadence",
    name: "Cadence",
    tagline:
      "A productivity app where your schedule and your focus timer are the same object, not two apps you switch between.",
    status: "shipped",
    timeframe: "2025",
    stack: ["Next.js", "Tailwind", "Supabase"],
    problem:
      "Most productivity tools keep your calendar and your focus timer separate, so every context switch costs you momentum. I wanted one view where picking a scheduled task and starting a focus session were the same action, not two.",
    features: [
      "Schedule blocks that double as focus sessions — clicking a block loads it straight into the Pomodoro timer, so there's no separate 'start a task' step.",
      "A built-in Pomodoro timer that always knows which task you're working on, instead of running as a disconnected countdown.",
      "A Day view that lays out your schedule as blocks you can plan against and work from in the same place.",
      "Accounts with per-user data isolation, so your schedule is private by default rather than protected as an afterthought.",
    ],
    whatsNext: [
      "Enhancing the week and month views, so planning across a longer horizon feels as considered as the Day view does.",
      "Reading to-dos directly from my Almanac to auto-populate schedule blocks, connecting the two apps through a shared Supabase project or a lightweight API while keeping each codebase simple on its own.",
    ],
    liveUrl: "https://cadence-seven-rho.vercel.app/login",
    images: [
      // { src: "/images/cadence/day-view.png", alt: "Cadence day view with schedule blocks and timer" },
    ],
  },
  {
    id: "notes-app",
    name: "Almanac",
    tagline:
      "A notes app with rich text editing and AI handwriting-to-text, built and deployed end to end.",
    status: "shipped",
    timeframe: "2025",
    stack: ["React", "Supabase", "Anthropic API"],
    problem:
      "I wanted a notes tool that didn't force a choice between fast typing and messy handwritten thoughts — something that could take a photo of handwriting and turn it into clean, searchable text without leaving the app.",
    features: [
      "AI handwriting-to-text: photograph a page of handwritten notes and get back clean, searchable text without leaving the app.",
      "Rich text editing built on Quill.js, so formatting a note feels like a real editor rather than a plain textarea.",
      "Autosave, so a note is never lost mid-thought.",
      "Guest mode alongside full accounts — you can try the app immediately without signing up first.",
    ],
    whatsNext: [
      "AI-generated quizzes drawn from your own notes, so you can test what you actually retained instead of re-reading.",
      "Catered learning plans that build a path through a topic you're interested in, rather than leaving you to sequence it yourself.",
      "AI restructuring that reorganizes loose notes into something cohesive — shaped the way the material is best learned, not the order you happened to write it in.",
    ],
    liveUrl: "https://thealmanac.vercel.app",
    images: [
      // { src: "/images/notes-app/editor.png", alt: "Almanac rich text editor with sidebar" },
    ],
  },
];
