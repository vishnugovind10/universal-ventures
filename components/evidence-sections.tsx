import Link from "next/link";
import { ProofVisual } from "@/components/proof-visuals";
import {
  advisoryServices,
  evidenceMetrics,
  selectedWork,
  systemArtifacts,
  visualProofExamples,
} from "@/lib/content-model";

export function EvidenceStrip() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-4 md:px-10 lg:px-16">
        {evidenceMetrics.map((metric) => (
          <article key={metric.label} className="border-l border-line pl-5">
            <p className="text-3xl font-semibold leading-none text-foreground">
              {metric.value}
            </p>
            <h2 className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {metric.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SelectedWork() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Selected work"
          title="Anonymized examples of problems the practice is built to handle."
          copy="The site avoids fake logos and scale theater. Capability is shown through scoped problem types, artifacts, and implementation proof."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {selectedWork.map((work) => (
            <article key={work.context} className="border border-line bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {work.context}
              </p>
              <Signal label="Problem" value={work.problem} />
              <Signal label="Evidence" value={work.evidence} />
              <Signal label="Output" value={work.outcome} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SelectedArtifacts() {
  return (
    <section className="border-b border-line bg-surface-muted/55">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Selected systems & artifacts"
          title="Proof that the work connects ideas to implementation."
          copy="Each artifact demonstrates an applied capability: execution logic, market infrastructure, funding analytics, or economic modeling."
        />
        <div className="mt-10 grid gap-5">
          {systemArtifacts.map((artifact) => (
            <article
              key={artifact.title}
              className="grid gap-6 border border-line bg-surface p-5 md:grid-cols-[0.38fr_0.62fr]"
            >
              <div className="flex min-h-56 items-center border border-line bg-background p-4">
                <ProofVisual type={artifact.visual} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {artifact.source}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {artifact.title}
                </h3>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <Signal label="Problem solved" value={artifact.problem} />
                  <Signal label="Capability" value={artifact.capability} />
                  <Signal label="Why it matters" value={artifact.relevance} />
                </div>
                <Link
                  href={artifact.href}
                  target={artifact.href.startsWith("http") ? "_blank" : undefined}
                  rel={artifact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-6 inline-flex font-mono text-xs text-accent no-underline hover:text-accent-strong"
                >
                  View evidence
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Artifact examples
            </p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight">
              The work produces reviewable maps, matrices, and system outputs.
            </h3>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visualProofExamples.map((example) => (
              <article key={example.title} className="border border-line bg-background p-4">
                <div className="flex min-h-40 items-center border border-line bg-surface p-3">
                  <ProofVisual type={example.visual} />
                </div>
                <h4 className="mt-5 text-lg font-semibold leading-tight">
                  {example.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {example.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdvisoryServices() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="What we do"
          title="Four scoped advisory tracks. Each produces artifacts."
          copy="The work is evidence-backed, research-driven, and implementation-focused. Each engagement should reduce uncertainty or produce a decision surface."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {advisoryServices.map((service) => (
            <article key={service.title} className="border border-line bg-surface p-6">
              <h3 className="text-2xl font-semibold leading-tight">{service.title}</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Signal label="Problem" value={service.problem} />
                <Signal label="Method" value={service.method} />
                <Signal label="Deliverable" value={service.deliverable} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="border-b border-line bg-inverse text-inverse-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.65fr_0.35fr] md:items-end md:px-10 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-inverse-foreground/60">
            Engagement initiation
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-none tracking-tight md:text-5xl">
            Bring a system question, not a polished brief.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-inverse-foreground/70">
            Useful conversations usually start with a constraint: emissions,
            liquidity, governance, treasury, validators, or market structure.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-fit border border-inverse-foreground bg-inverse-foreground px-5 py-3 font-mono text-xs text-inverse no-underline transition-colors hover:bg-transparent hover:text-inverse-foreground"
        >
          Discuss an engagement
        </Link>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-6 text-4xl font-semibold leading-none tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-muted">{copy}</p>
    </div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
        {label}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}
