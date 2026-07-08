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
  decisions: string[];
  tradeoffs: string[];
  liveUrl?: string;
  repoUrl?: string;
  // Drop screenshot files in /public/images/<folder> and reference them here.
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
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
    decisions: [
      "Unified timer-and-schedule-block architecture: focusing a block loads it directly into the Pomodoro timer, so there's no separate 'start a task' step.",
      "Four-table Supabase schema with UUID keys and Row Level Security, designed so each user's data is isolated by default rather than bolted on later.",
      "Scoped v1 to Day view only. Week and month views were cut on purpose so I could ship something people could actually use, rather than something 80% finished on every screen.",
    ],
    tradeoffs: [
      "No week/month view yet — deliberately deferred until the Day view experience is solid.",
      "Long-term plan is for Cadence to read to-dos from my Notes App and auto-populate schedule blocks. Keeping the two apps as separate codebases (connected later via a shared Supabase project or a lightweight API) rather than merging them, so each stays simple on its own.",
    ],
    liveUrl: "https://cadence-seven-rho.vercel.app/login",
    repoUrl: "https://github.com/jessalewis50-cell/Cadence",
    images: [
      // { src: "/images/cadence/day-view.png", alt: "Cadence day view with schedule blocks and timer" },
    ],
  },
  {
    id: "notes-app",
    name: "Notes App",
    tagline:
      "A notes app with rich text editing and AI handwriting-to-text, built and deployed end to end.",
    status: "shipped",
    timeframe: "2025",
    stack: ["React", "Supabase", "Anthropic API"],
    problem:
      "I wanted a notes tool that didn't force a choice between fast typing and messy handwritten thoughts — something that could take a photo of handwriting and turn it into clean, searchable text without leaving the app.",
    decisions: [
      "Used Quill.js for rich text editing rather than building an editor from scratch, so I could focus my time on the AI handwriting feature that actually differentiates the app.",
      "Routed handwriting OCR through a Vercel serverless function that calls the Anthropic API, so the API key never touches the browser.",
      "Added Supabase auth with a guest mode, so people can try the app immediately without creating an account first.",
      "Built autosave so a note is never lost mid-thought.",
    ],
    tradeoffs: [
      "Solved a CORS error, an editor cursor-jumping bug, an ESLint-as-errors build failure on Vercel, and a note-deletion bug caused by mixing integer and UUID IDs — each one taught me something about how the pieces actually fit together, not just how to make an error message go away.",
    ],
    liveUrl: "https://notes-app-tau-livid.vercel.app",
    repoUrl: "https://github.com/jessalewis50-cell/notes-app",
    images: [
      // { src: "/images/notes-app/editor.png", alt: "Notes App rich text editor with sidebar" },
    ],
  },
];
