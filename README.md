# Portfolio site — how this is put together

This is a starting skeleton, not a finished site. It's built with Next.js
(same as Cadence) and Tailwind, so the tools should already feel familiar.
Here's what each piece does and why it's separate from the others.

## The folders, in plain terms

- **`data/projects.ts`** — All your words live here: the problem, the
  decisions, the trade-offs, your links. This is the file you'll edit the
  most. It doesn't know anything about colors or layout — it's just content.

- **`components/`** — The visual building blocks. Each one takes content
  (usually from `data/projects.ts`) and decides how it *looks* on the page.
  You shouldn't need to touch these much unless you want to change the
  design itself.
  - `Hero.tsx` — the top of the page: your name, your pitch, contact links.
  - `CaseStudy.tsx` — the template used for *both* Cadence and Almanac.
    One template, two projects — so if you improve the layout, both
    projects get better at once.
  - `CadenceStrip.tsx` — the little pulse-line divider between sections.
    This is the one "signature" visual idea that ties the whole site
    together (a nod to Cadence's timer).
  - `Footer.tsx` — contact info at the bottom.

- **`app/page.tsx`** — Decides the *order* things appear in on the page.
  Doesn't contain your words or your styling — just the sequence.

- **`app/layout.tsx`** — Sets up fonts and the page title/description that
  shows up in Google and browser tabs.

- **`tailwind.config.ts`** — Every color and font used anywhere on the site
  is defined here, once, with a plain-English comment on what each one is
  for. If you want to change the accent color, this is the one place to
  do it.

Why split it up this way? So that "change the words" and "change the look"
never require touching the same file. That's the whole idea behind why
`data/projects.ts` is separate from `components/`.

## Running it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser. Changes save live.

## What to do first (in Claude Code)

Good first prompts to hand Claude Code, in roughly this order:

1. *"Rewrite the problem/decisions/tradeoffs text in data/projects.ts for
   both projects — here's how I'd actually describe them: [paste your own
   words]."*
2. *"I have screenshots at [path] — add them to public/images and wire
   them into data/projects.ts."*
3. *"Update the email and LinkedIn links in Hero.tsx and Footer.tsx to my
   real ones."*
4. *"Add screenshots to the public/images folder and wire them into the
   case studies."*
5. Once you're happy with it: *"Help me deploy this to Vercel."* (Same flow
   you already used for Almanac.)

## Notes for later

- There's no image in `data/projects.ts` yet for either project — the site
  will still work, it'll just skip the screenshot block until you add one.
- `liveUrl` for Cadence is blank until you have somewhere to point it —
  leave it blank and the "View live" button just won't render.
