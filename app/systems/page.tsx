import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ProofVisual } from "@/components/proof-visuals";
import { systemsCategories } from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Economic systems categories across architecture, coordination, market infrastructure, and institutional translation.",
};

export default function SystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Systems"
        title="Four categories. One evidence-backed operating model."
        lede="Each category translates a system concept into economic consequence, method, output, and artifact so delivery capability is visible."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <div className="grid gap-5">
            {systemsCategories.map((category, index) => (
              <article
                key={category.title}
                className="grid gap-6 border border-line bg-surface p-5 md:grid-cols-[0.34fr_0.66fr]"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                    System 0{index + 1}
                  </p>
                  <h2 className="mt-6 text-3xl font-semibold leading-tight">
                    {category.title}
                  </h2>
                  <div className="mt-6 border border-line bg-background p-4">
                    <ProofVisual
                      type={
                        index === 0
                          ? "token-model"
                          : index === 1
                            ? "governance"
                            : index === 2
                              ? "liquidity"
                              : "funding"
                      }
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Signal label="Problem" value={category.problem} />
                  <Signal label="Economic consequence" value={category.consequence} />
                  <Signal label="Method" value={category.method} />
                  <Signal label="Output" value={category.output} />
                  <Signal label="Example artifact" value={category.artifact} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <Link
              href="/contact"
              className="inline-flex border border-accent bg-accent px-5 py-3 font-mono text-xs text-surface no-underline transition-colors hover:bg-accent-strong"
            >
              Discuss an engagement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
        {label}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}
