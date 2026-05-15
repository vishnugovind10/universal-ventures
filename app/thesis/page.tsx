import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProtocolFeedbackLoop } from "@/components/system-visuals";
import { protocolLoop, thesisSections } from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Thesis",
  description:
    "Universal Ventures thesis on coordination breakdown, economic survivability, and protocol systems under pressure.",
};

export default function ThesisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Thesis"
        title="Economic systems fail before the market admits it."
        lede="Protocols become fragile when incentives, liquidity, governance, and treasury constraints start optimizing against each other."
      />

      <article className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <aside className="font-mono text-sm text-subtle">
            <p>Research memo</p>
            <p className="mt-3 max-w-xs leading-6">
              Coordination breakdown, decision compression, survivability.
            </p>
          </aside>
          <div className="grid gap-10">
            <div className="max-w-3xl">
              <p className="text-2xl leading-snug text-foreground">
                The hardest problem in Web3 is no longer execution. It is
                survivable coordination.
              </p>
              <p className="mt-6 text-base leading-7 text-muted">
                Tokenized systems are adaptive economic environments. They do not
                fail linearly. Pressure moves through liquidity, incentives,
                governance, and treasury capacity until the system either absorbs
                it or amplifies it.
              </p>
            </div>

            <ProtocolFeedbackLoop steps={protocolLoop} />

            <div className="grid gap-5 md:grid-cols-2">
              {thesisSections.map((section) => (
                <section key={section.title} className="border-t border-line pt-5">
                  <h2 className="font-serif text-3xl font-medium leading-tight">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-muted">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
