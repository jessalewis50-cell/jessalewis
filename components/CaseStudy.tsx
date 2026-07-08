import Image from "next/image";
import { Project } from "@/data/projects";

// ---------------------------------------------------------------------------
// CaseStudy
//
// Renders ONE project as a "log entry": status badge, the problem you were
// solving, the decisions you made, and the trade-offs/what's next. This
// component doesn't contain any of your actual words — it just lays out
// whatever project object gets passed to it. To change what it says, edit
// data/projects.ts, not this file.
// ---------------------------------------------------------------------------

const statusStyles: Record<Project["status"], string> = {
  shipped: "text-ledger border-ledger",
  "in-progress": "text-brass border-brass",
};

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
};

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <section
      id={project.id}
      className="mx-auto max-w-content px-6 py-10 scroll-mt-8"
    >
      {/* --- Header: name, status badge, timeframe, stack --- */}
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {project.name}
        </h2>
        <span
          className={`rounded-sm border px-2 py-0.5 font-mono text-xs uppercase tracking-wide ${statusStyles[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="mt-1 font-mono text-xs text-graphite">
        {project.timeframe} · {project.stack.join(" / ")}
      </p>
      <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-ink">
        {project.tagline}
      </p>

      {/* --- Screenshot(s), if you've added any to /public/images --- */}
      {project.images.length > 0 && (
        <div className="mt-6 overflow-hidden rounded-sm border border-line">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={1200}
            height={750}
            className="w-full"
          />
        </div>
      )}

      {/* --- The problem --- */}
      <div className="mt-8">
        <h3 className="font-mono text-xs uppercase tracking-widest text-graphite">
          The problem
        </h3>
        <p className="mt-2 max-w-[65ch] leading-relaxed text-ink">
          {project.problem}
        </p>
      </div>

      {/* --- Key decisions --- */}
      <div className="mt-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-graphite">
          Key decisions
        </h3>
        <ul className="mt-2 max-w-[65ch] space-y-2">
          {project.decisions.map((decision, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-ink">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
              <span>{decision}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Trade-offs / what's next --- */}
      <div className="mt-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-graphite">
          Trade-offs &amp; what&apos;s next
        </h3>
        <ul className="mt-2 max-w-[65ch] space-y-2">
          {project.tradeoffs.map((tradeoff, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-ink">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-graphite" />
              <span>{tradeoff}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Links --- */}
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="rounded-sm border border-ink px-4 py-2 text-ink transition hover:bg-ink hover:text-paper"
          >
            View live ↗
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            className="rounded-sm border border-line px-4 py-2 text-graphite transition hover:border-graphite"
          >
            View code ↗
          </a>
        )}
      </div>
    </section>
  );
}
