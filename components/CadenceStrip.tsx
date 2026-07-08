// ---------------------------------------------------------------------------
// CadenceStrip
//
// This is the site's "signature element" — the one visual idea that repeats
// everywhere and ties back to the subject matter. It's a thin animated pulse
// line, like a heartbeat monitor or a metronome tick, standing in for the
// idea of "cadence" (rhythm/tempo). Used between every section instead of a
// plain horizontal rule.
//
// `label` is optional — pass a short mono-style tag like "ENTRY 01" if you
// want text centered on the line. Leave it off for a plain divider.
// ---------------------------------------------------------------------------

export default function CadenceStrip({ label }: { label?: string }) {
  return (
    <div className="relative flex items-center py-2" aria-hidden="true">
      <svg
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="h-6 w-full text-graphite/40"
      >
        <polyline
          points="0,12 150,12 165,4 180,20 195,12 400,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="animate-pulse-line"
        />
      </svg>
      {label && (
        <span className="absolute left-1/2 -translate-x-1/2 bg-paper px-3 font-mono text-xs uppercase tracking-widest text-graphite">
          {label}
        </span>
      )}
    </div>
  );
}
