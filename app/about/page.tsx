import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Universal Ventures, an independent economic systems and coordination design practice.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Independent economic systems and coordination design"
        lede="Universal Ventures focuses on resilient digital infrastructure across token systems, liquidity coordination, governance architecture, and strategic deployment."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.3fr_0.7fr] md:px-10 lg:px-16">
          <aside className="font-mono text-sm text-subtle">
            <p>Position</p>
            <p className="mt-2">Systems thinking, market realism, execution-focused research</p>
          </aside>
          <div className="article-prose max-w-3xl">
            <p>
              Universal Ventures is an independent practice for economic systems
              architecture and coordination design. The work sits between protocol
              design, market microstructure, treasury strategy, governance systems,
              and institutional digital infrastructure.
            </p>
            <p>
              The practice is built around a simple premise: tokenized economies do
              not become durable because they launch a token. They become durable
              when incentives, liquidity, governance, and operational constraints
              remain aligned as the system evolves.
            </p>
            <p>
              The background behind the practice spans trading systems, structured
              finance, digital asset markets, DeFi research, distributed systems,
              and institutional investment environments. That mix matters because
              protocol economies are not only technical artifacts. They are markets,
              organizations, balance sheets, and coordination games at the same time.
            </p>
            <p>
              The emphasis is long-term adaptive systems: work that is theoretically
              coherent, operationally survivable, institutionally legible, and
              deployable under real constraints.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
