import CadenceStrip from "./CadenceStrip";

// ---------------------------------------------------------------------------
// Hero
//
// The first thing anyone sees. Job: in five seconds, tell a hiring manager
// who you are and why the two projects below are worth their time.
//
// EDIT: the headline and pitch text below are placeholders in your voice —
// rewrite them to sound like you.
// ---------------------------------------------------------------------------

export default function Hero() {
  return (
    <header className="mx-auto max-w-content px-6 pt-20 pb-8">
      <p className="font-mono text-xs uppercase tracking-widest text-brass">
        Product Manager · Builder
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
        Jess Lewis
      </h1>
      <p className="mt-5 max-w-[52ch] font-body text-lg leading-relaxed text-graphite">
        I plan the roadmap, then I ship it myself. Below are two apps I built
        end to end — no engineering team, just me and a lot of debugging —
        as a way of showing how I actually think through a product, not just
        talk about it.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
        <a
          href="/resume.pdf"
          className="rounded-sm border border-ink px-4 py-2 text-ink transition hover:bg-ink hover:text-paper"
        >
          Download résumé
        </a>
        <a
          href="https://www.linkedin.com/in/jess-a-lewis/"
          className="rounded-sm border border-line px-4 py-2 text-graphite transition hover:border-graphite"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:jessalewis50@gmail.com"
          className="rounded-sm border border-line px-4 py-2 text-graphite transition hover:border-graphite"
        >
          jessalewis50@gmail.com ↗
        </a>
      </div>
      <div className="mt-12">
        <CadenceStrip />
      </div>
    </header>
  );
}
