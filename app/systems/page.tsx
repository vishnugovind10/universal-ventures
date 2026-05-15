import type { Metadata } from "next";
import { FocusAreaBlock } from "@/components/focus-area-block";
import { PageHeader } from "@/components/page-header";
import { FailureModeMap, VisualCaseStudyGrid } from "@/components/system-visuals";
import {
  economicConsequences,
  failureModes,
  focusAreas,
  futureEvolution,
  visualCaseStudies,
} from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Systems & Focus Areas",
  description:
    "Universal Ventures focus areas across incentives, treasury systems, governance, liquidity, market structure, and institutional coordination infrastructure.",
};

export default function SystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Systems & Focus Areas"
        title="Architecture domains for economic survivability."
        lede="Where incentives, treasury policy, governance, liquidity, and institutional usability become one operating system."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <p className="font-mono text-sm text-subtle">Operational domains</p>
            <p className="max-w-3xl text-2xl leading-snug text-foreground">
              Each domain is treated as a decision surface: what breaks, what it
              costs, and where architecture can reduce fragility.
            </p>
          </div>
          <div className="border-t border-line">
            {focusAreas.map((area) => (
              <FocusAreaBlock key={area.index} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <p className="font-mono text-sm text-subtle">Failure modes</p>
            <div>
              <h2 className="max-w-3xl font-serif text-4xl font-medium leading-none md:text-5xl">
                Coordination failure becomes economic consequence.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
                The point is not to catalog risk forever. The point is to surface
                the few leverage points that decide whether the system absorbs
                pressure or compounds it.
              </p>
            </div>
          </div>
          <FailureModeMap items={failureModes} consequences={economicConsequences} />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <p className="font-mono text-sm text-subtle">System examples</p>
            <div>
              <h2 className="max-w-3xl font-serif text-4xl font-medium leading-none md:text-5xl">
                Conceptual case maps for how systems destabilize.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
                These examples are designed for comprehension, not theatre. They
                show what breaks, why it matters economically, and what architecture
                can change.
              </p>
            </div>
          </div>
          <VisualCaseStudyGrid items={visualCaseStudies} />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.3fr_0.7fr] lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Future evolution</p>
          </div>
          <div>
            <h2 className="max-w-3xl font-serif text-4xl font-medium leading-none md:text-5xl">
              Built as a research architecture, not a fixed brochure.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
              The structure can expand into deeper archives, systems diagrams,
              framework essays, governance papers, and protocol case studies without
              a visual reset.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {futureEvolution.map((item) => (
                <div key={item} className="border-t border-line pt-4">
                  <p className="text-sm text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
