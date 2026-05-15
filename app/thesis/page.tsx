import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { thesisSections } from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Thesis",
  description:
    "Universal Ventures thesis on protocol economies as coordination machines.",
};

export default function ThesisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Thesis"
        title="Protocol Economies Are Coordination Machines"
        lede="Tokenized systems are adaptive economic environments. Their durability depends on whether incentives, markets, governance, and liquidity remain coherent when pressure arrives."
      />

      <article className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.3fr_0.7fr] md:px-10 lg:px-16">
          <aside className="font-mono text-sm text-subtle">
            <p>Research memo</p>
            <p className="mt-2">Coordination, constraint, survivability</p>
          </aside>
          <div className="article-prose max-w-3xl">
            <p>
              Most token systems do not fail because the technology stops working.
              They fail because incentives collapse once users, capital, and
              institutions begin optimizing against the system.
            </p>
            <p>
              Complexity often looks like sophistication in the early phase of a
              protocol. Under stress, it becomes a coordination tax. Every extra
              mechanism introduces a new dependency, a new governance obligation,
              and a new path for reflexive behavior.
            </p>
            <p>
              Durable protocol economies emerge from strong constraints and coherent
              coordination. Markets, governance, liquidity, and incentives have to
              be designed together because failure does not respect internal
              org charts or technical boundaries.
            </p>

            {thesisSections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
