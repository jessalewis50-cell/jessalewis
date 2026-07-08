// ---------------------------------------------------------------------------
// Footer
//
// Last thing a visitor sees. Keep it short: how to reach you, nothing else.
// EDIT: swap in your real email and LinkedIn URL.
// ---------------------------------------------------------------------------

export default function Footer() {
  return (
    <footer className="mx-auto max-w-content px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-graphite">
        Get in touch
      </p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-body text-ink">
        <a href="mailto:jessalewis50@gmail.com" className="hover:text-brass">
          jessalewis50@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/jess-a-lewis/" className="hover:text-brass">
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/jessalewis50-cell"
          className="hover:text-brass"
        >
          GitHub ↗
        </a>
      </div>
      <p className="mt-10 font-mono text-xs text-graphite/70">
        Built by hand, not a template.
      </p>
    </footer>
  );
}
