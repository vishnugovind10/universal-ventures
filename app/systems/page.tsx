import type { Metadata } from "next";
import { FocusAreaBlock } from "@/components/focus-area-block";
import { PageHeader } from "@/components/page-header";
import { focusAreas, futureEvolution } from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Systems & Focus Areas",
  description:
    "Universal Ventures focus areas across treasury systems, adaptive governance, market structure, tokenized infrastructure, mechanism design, and coordination infrastructure.",
};

export default function SystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Systems & Focus Areas"
        title="Design domains for resilient digital economies"
        lede="The work begins where isolated primitives stop being useful: treasury, liquidity, governance, market structure, infrastructure, and institutional legibility."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
          <div className="border-t border-line">
            {focusAreas.map((area) => (
              <FocusAreaBlock key={area.index} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.3fr_0.7fr] md:px-10 lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Future evolution</p>
          </div>
          <div>
            <h2 className="max-w-3xl font-serif text-4xl font-medium leading-none md:text-5xl">
              Built as a research architecture, not a fixed brochure.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
              The site structure is designed to expand without a visual reset. New
              research archives, systems diagrams, framework essays, governance
              papers, and protocol case studies can enter the same editorial system.
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
