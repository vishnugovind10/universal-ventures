import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const operatingSignals = [
  "Economic design review",
  "Market structure analysis",
  "Digital infrastructure translation",
  "Research-driven artifact production",
  "Implementation-focused decision support",
  "Scoped advisory delivery",
];

const proofPoints = [
  "Public repositories across execution, market analytics, trading systems, and infrastructure observatories.",
  "Published systems analysis on finality, routing, agentic economies, market making, and tokenization.",
  "Artifact-based engagement model: maps, matrices, trees, diagrams, simulations, and evidence packs.",
];

const deliveryPrinciples = [
  "Scope the uncertainty before recommending mechanisms.",
  "Use artifacts to make assumptions reviewable.",
  "Translate system logic into decisions teams can govern.",
];

export const metadata: Metadata = {
  title: "Firm",
  description:
    "Universal Ventures is an independent economic systems advisory practice operating across economic design, market structure, and digital infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Firm"
        title="Independent economic infrastructure practice."
        lede="Universal Ventures operates at the intersection of economic design, market structure, and digital infrastructure with a scoped, artifact-led delivery model."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <aside className="border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Practice profile
            </p>
            <h2 className="mt-8 text-4xl font-semibold leading-none">
              Evidence-backed, research-driven, implementation-focused.
            </h2>
            <div className="mt-8 grid gap-3">
              {operatingSignals.map((signal) => (
                <p key={signal} className="border-t border-line pt-3 text-sm text-muted">
                  {signal}
                </p>
              ))}
            </div>
          </aside>

          <div className="max-w-3xl">
            <p className="text-2xl leading-snug text-foreground">
              The practice helps teams make token, treasury, governance,
              liquidity, and market infrastructure decisions with stronger
              evidence and clearer outputs.
            </p>
            <p className="mt-6 text-base leading-7 text-muted">
              The work is boutique by design: scoped, research-driven, and built
              around artifacts that teams can review, challenge, govern, and
              implement.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {deliveryPrinciples.map((principle) => (
                <p
                  key={principle}
                  className="border border-line bg-surface p-4 text-sm leading-6 text-muted"
                >
                  {principle}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-5">
              {proofPoints.map((point, index) => (
                <section key={point} className="border-t border-line pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    Proof 0{index + 1}
                  </p>
                  <p className="mt-3 text-base leading-7 text-muted">{point}</p>
                </section>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex border border-accent bg-accent px-5 py-3 font-mono text-xs text-surface no-underline transition-colors hover:bg-accent-strong"
              >
                Discuss an engagement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
