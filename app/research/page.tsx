import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/page-header";
import { repositoryEvidence, researchEvidence } from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Research + Systems",
  description:
    "Research and implementation evidence across protocol economics, market infrastructure, coordination systems, and trading infrastructure.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research + Systems"
        title="Ideas are useful when they connect to implementation."
        lede="This page bridges published systems research with public repositories, prototypes, and implementation signals."
      />

      <EvidenceSection
        eyebrow="Research"
        title="Published analysis with explicit system implications."
        copy="Each essay is framed by thesis, key insight, and the systems work it connects to."
      >
        {researchEvidence.map((item) => (
          <article key={item.title} className="border-b border-line py-7">
            <div className="grid gap-5 md:grid-cols-[0.28fr_0.72fr]">
              <div>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] text-accent no-underline"
                >
                  Medium
                </Link>
                <h2 className="mt-4 text-2xl font-semibold leading-tight">
                  {item.title}
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <Signal label="Thesis" value={item.thesis} />
                <Signal label="Key insight" value={item.insight} />
                <Signal label="Related systems" value={item.relatedSystems} />
              </div>
            </div>
          </article>
        ))}
      </EvidenceSection>

      <EvidenceSection
        eyebrow="Systems"
        title="Public repositories that demonstrate implementation capacity."
        copy="The repositories are not client claims. They are proof surfaces: code, architecture, modules, data paths, and explicit system behavior."
      >
        {repositoryEvidence.map((repo) => (
          <article key={repo.title} className="border-b border-line py-7">
            <div className="grid gap-5 md:grid-cols-[0.28fr_0.72fr]">
              <div>
                <Link
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] text-accent no-underline"
                >
                  GitHub
                </Link>
                <h2 className="mt-4 break-words text-2xl font-semibold leading-tight">
                  {repo.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{repo.description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <Signal label="Capability signal" value={repo.capability} />
                <Signal label="Implementation proof" value={repo.proof} />
                <Signal label="Business relevance" value={repo.relevance} />
              </div>
            </div>
          </article>
        ))}
      </EvidenceSection>
    </>
  );
}

function EvidenceSection({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-6 text-4xl font-semibold leading-none tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">{copy}</p>
        </div>
        <div className="mt-10 border-t border-line">{children}</div>
      </div>
    </section>
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
