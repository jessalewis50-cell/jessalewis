import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import CadenceStrip from "@/components/CadenceStrip";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// ---------------------------------------------------------------------------
// Home page
//
// This file just decides the ORDER things appear in. It doesn't contain any
// of your words (those live in data/projects.ts) or any styling (that lives
// in the components). If you want to reorder sections, add a project, or add
// a new section entirely, this is the file to touch.
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <main>
      <Hero />

      {projects.map((project, i) => (
        <div key={project.id}>
          <CaseStudy project={project} />
          {/* Don't draw a divider after the very last project */}
          {i < projects.length - 1 && (
            <div className="mx-auto max-w-content px-6">
              <CadenceStrip />
            </div>
          )}
        </div>
      ))}

      <CadenceStrip />
      <Footer />
    </main>
  );
}
