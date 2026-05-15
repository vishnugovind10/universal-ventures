import { EditorialSection } from "@/components/editorial-section";
import { PageHeader } from "@/components/page-header";
import { SystemDiagram } from "@/components/system-diagram";
import { intersections, operatingPrinciples, whatWeDo } from "@/lib/content-model";

export default function Home() {
  return (
    <>
      <PageHeader
        eyebrow="Universal Ventures"
        title="Economic Infrastructure & Coordination Systems for Web3"
        lede="Designing tokenized systems that survive real market conditions, coordination pressure, and long-term network evolution."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Operating intersection</p>
          </div>
          <div className="grid gap-10">
            <p className="max-w-3xl text-2xl leading-snug text-foreground">
              Universal Ventures works where capital flows, incentives, governance,
              and infrastructure constraints meet. The practice treats protocol
              economies as live coordination environments, not static token models.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {intersections.map((item) => (
                <div key={item} className="border-t border-line pt-4">
                  <p className="text-sm text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SystemDiagram />

      <EditorialSection eyebrow="What we do" title="Architecture for economic pressure">
        <div className="grid gap-0 border-t border-line">
          {whatWeDo.map((item) => (
            <div
              key={item.title}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.42fr_0.58fr]"
            >
              <h2 className="font-serif text-2xl font-medium">{item.title}</h2>
              <p className="max-w-2xl text-base leading-7 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection eyebrow="Operating posture" title="Minimal by design, rigorous by default">
        <div className="grid gap-6 md:grid-cols-3">
          {operatingPrinciples.map((principle) => (
            <div key={principle.title} className="border-t border-line pt-5">
              <h2 className="text-base font-semibold">{principle.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{principle.description}</p>
            </div>
          ))}
        </div>
      </EditorialSection>
    </>
  );
}
