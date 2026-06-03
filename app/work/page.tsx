import type { Metadata } from "next";
import Link from "next/link";
import { ProgressivePanel } from "@/components/progressive-panel";
import { ProofVisual } from "@/components/proof-visuals";
import {
  engagementFit,
  problemOutcomeCards,
  scopeAnchors,
  systemArtifacts,
} from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Work",
  description:
    "How Universal Ventures helps teams diagnose, architect, and operate token, treasury, governance, liquidity, and coordination systems.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-line bg-surface-muted/45">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.42fr_0.58fr] lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Work
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-none tracking-tight md:text-6xl">
              Clear outputs for systems under pressure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Universal Ventures helps teams diagnose failure modes, redesign
              economic architecture, and create artifacts that make system
              decisions easier to review, govern, and implement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex border border-accent bg-accent px-5 py-3 font-mono text-xs text-surface no-underline transition-colors hover:bg-accent-strong"
              >
                Discuss a system problem
              </Link>
              <Link
                href="/research"
                className="inline-flex border border-line bg-surface px-5 py-3 font-mono text-xs text-accent no-underline transition-colors hover:border-accent"
              >
                View research objects
              </Link>
            </div>
          </div>

          <div className="border border-line bg-surface p-5">
            <ProofVisual type="economic-map" />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              What we solve
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-none tracking-tight md:text-5xl">
              Weak utility, treasury leakage, governance failure, poor coordination, and market fragility.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {problemOutcomeCards.map((card) => (
              <ProgressivePanel
                key={card.problem}
                title={`${card.problem} -> ${card.outcome}`}
                summary={card.summary}
                consequence={card.consequence}
                actionLabel={card.action}
              >
                <p>{card.detail}</p>
              </ProgressivePanel>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Engagement types
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-none tracking-tight md:text-5xl">
              Scope starts with the decision the team needs to make.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {scopeAnchors.map((scope) => (
              <article key={scope.title} className="border border-line bg-background p-5">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {scope.duration}
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                  {scope.pricing}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">
                  {scope.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">{scope.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                When to engage
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-none tracking-tight">
                Use this work before a mechanism becomes expensive to reverse.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {engagementFit.map((item) => (
                <article key={item.title} className="border border-line bg-surface p-5">
                  <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Retrieval layer
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {systemArtifacts.map((artifact) => (
                <Link
                  key={artifact.title}
                  href={artifact.href}
                  target={artifact.href.startsWith("http") ? "_blank" : undefined}
                  rel={artifact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="border border-line bg-surface p-4 no-underline transition-colors hover:border-accent"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    {artifact.source}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold leading-tight">
                    {artifact.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {artifact.problem}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
