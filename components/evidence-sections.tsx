import Link from "next/link";
import { ProgressivePanel } from "@/components/progressive-panel";
import { ProofVisual } from "@/components/proof-visuals";
import {
  advisoryServices,
  buyerOutcomes,
  evidenceMetrics,
  engagementFit,
  observatoryHighlights,
  operatingModel,
  problemOutcomeCards,
  problemSpace,
  proofObjects,
  selectedWork,
  scopeAnchors,
  systemArtifacts,
  trustSignals,
  validationInfrastructure,
  visualProofExamples,
  whySystemsBreak,
} from "@/lib/content-model";

export function WhatActuallyDo() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              What we actually do
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
              We help teams turn economic ambiguity into usable system decisions.
            </h2>
            <p className="mt-5 text-sm leading-6 text-muted">
              The work produces maps, matrices, mechanism reviews, simulations,
              and operating constraints for token, treasury, governance, liquidity,
              and coordination problems.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
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

        <div className="mt-12 grid gap-4 border-t border-line pt-8 md:grid-cols-4">
          {evidenceMetrics.map((metric) => (
            <article key={metric.label} className="border-l border-line pl-5">
              <p className="text-3xl font-semibold leading-none text-foreground">
                {metric.value}
              </p>
              <h3 className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {metric.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{metric.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-line pt-8 md:grid-cols-3">
          {proofObjects.map((object) => (
            <article key={object.title} className="border border-line bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {object.type}
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{object.title}</h3>
              <Signal label="Problem" value={object.problem} />
              <Signal label="Output" value={object.output} />
              <Link
                href={object.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex font-mono text-xs text-accent no-underline hover:text-accent-strong"
              >
                View proof object
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySystemsBreak() {
  return (
    <section className="border-b border-line bg-surface-muted/45">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <SectionIntro
          eyebrow="Why systems break"
          title="Most token systems do not collapse from one bad assumption. They collapse from feedback."
          copy="The visible symptom is price, liquidity, governance, or growth. The underlying issue is usually a system that rewards behavior it cannot retain."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {whySystemsBreak.map((item) => (
            <ProgressivePanel
              key={item.title}
              title={item.title}
              summary={item.summary}
              consequence={item.consequence}
              actionLabel={item.action}
            >
              <p>{item.detail}</p>
            </ProgressivePanel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustLayer() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-16">
        <div className="grid gap-4 md:grid-cols-4">
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

        <div className="mt-10 grid gap-4 border-t border-line pt-8 lg:grid-cols-[0.32fr_0.68fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Trust layer
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight">
              Evidence before claims.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <p key={signal} className="border-t border-line pt-4 text-sm leading-6 text-muted">
                {signal}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {proofObjects.map((object) => (
            <article key={object.title} className="border border-line bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {object.type}
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{object.title}</h3>
              <Signal label="Problem" value={object.problem} />
              <Signal label="Output" value={object.output} />
              <Link
                href={object.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex font-mono text-xs text-accent no-underline hover:text-accent-strong"
              >
                View proof object
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export function ProblemSpace() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Problem space"
          title="System failures show up as economic loss, not abstract design defects."
          copy="The work starts by locating failure modes that create capital inefficiency, treasury depletion, governance capture, liquidity fragility, exploit surfaces, or coordination breakdown."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemSpace.map((item) => (
            <article key={item.title} className="border border-line bg-surface p-5">
              <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
              <Signal label="Economic consequence" value={item.consequence} />
              <Signal label="Mechanism" value={item.mechanism} />
              <Signal label="Artifact" value={item.artifact} />
            </article>
          ))}
        </div>
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

export function ArtifactInfrastructure() {
  return (
    <section className="border-b border-line bg-surface-muted/55">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Artifact infrastructure"
          title="Proof that the work connects ideas to implementation."
          copy="Artifacts are the delivery surface: they make assumptions, tradeoffs, and residual risk reviewable before teams commit capital or governance attention."
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
              Proof artifacts
            </p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight">
              Reviewable maps, matrices, and system outputs reduce delivery uncertainty.
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

export const SelectedArtifacts = ArtifactInfrastructure;

export function CapabilityMatrix() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Capabilities"
          title="Four delivery tracks. Each connects a system problem to a concrete artifact."
          copy="The practice is structured around economic consequence, mechanism review, and outputs a protocol or institution can use in decisions."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {advisoryServices.map((service) => (
            <article key={service.title} className="border border-line bg-surface p-6">
              <h3 className="text-2xl font-semibold leading-tight">{service.title}</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Signal label="Problem" value={service.problem} />
                <Signal label="Economic consequence avoided" value={service.consequence} />
                <Signal label="Methodology" value={service.method} />
                <Signal label="Artifact / output" value={service.deliverable} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const AdvisoryServices = CapabilityMatrix;

export function BuyerOutcomes() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="What changes"
          title="The value is not another theory. It is a clearer decision surface."
          copy="Engagements are useful when they change what a team can decide, explain, govern, or safely implement."
        />
        <div className="mt-10 grid gap-4">
          {buyerOutcomes.map((item, index) => (
            <article
              key={item.before}
              className="grid gap-5 border border-line bg-background p-5 md:grid-cols-[0.14fr_0.86fr]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Outcome {index + 1}
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <Signal label="Before" value={item.before} />
                <Signal label="Work" value={item.work} />
                <Signal label="After" value={item.after} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngagementFit() {
  return (
    <section className="border-b border-line bg-surface-muted/45">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Why hire"
          title="Engage when a system decision needs to survive scrutiny."
          copy="The work is appropriate when the risk is structural, economic, or coordination-heavy enough that generic tokenomics advice is not sufficient."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {engagementFit.map((item) => (
            <article key={item.title} className="border border-line bg-surface p-5">
              <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OperatingModel() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Operating model"
          title="A structured delivery path for ambiguous economic systems."
          copy="The process keeps analysis tied to decisions: diagnose the pressure surface, model what matters, architect the response, and translate outputs for review."
        />
        <div className="mt-10 grid gap-4">
          {operatingModel.map((step) => (
            <article
              key={step.phase}
              className="grid gap-5 border border-line bg-background p-5 md:grid-cols-[0.16fr_0.84fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {step.phase}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{step.title}</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                <Signal label="Input" value={step.input} />
                <Signal label="Mechanism" value={step.mechanism} />
                <Signal label="Output" value={step.output} />
                <Signal label="Uncertainty reduction" value={step.reduction} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValidationInfrastructure() {
  return (
    <section className="border-b border-line bg-surface-muted/45">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Validation infrastructure"
          title="Decision support before mechanism commitments harden."
          copy="Simulation, adversarial testing, scenario analysis, and sensitivity analysis are used only where they improve decisions and expose material risk."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {validationInfrastructure.map((item, index) => (
            <ProgressivePanel
              key={item.title}
              index={`0${index + 1}`}
              title={item.title}
              summary={item.consequence}
              consequence={item.artifact}
              actionLabel="Inspect method"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Signal label="Method" value={item.method} />
                <Signal label="Tool reference" value={item.tools} />
              </div>
            </ProgressivePanel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchObservatory() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Research / Observatory"
          title="Research is kept useful by connecting it to delivery artifacts."
          copy="The observatory layer bridges public essays, repositories, and practical outputs so visitors can inspect how thinking becomes infrastructure."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {observatoryHighlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="border border-line bg-surface p-5 no-underline transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {item.label}
              </p>
              <h3 className="mt-6 text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StructuredEngagementPath() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Structured engagement path"
          title="Clear scope before deep work."
          copy="Engagements are framed around what uncertainty needs to be reduced, what artifact would change a decision, and what cadence the system requires."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {scopeAnchors.map((scope) => (
            <article key={scope.title} className="border border-line bg-background p-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                {scope.duration}
              </p>
              {"pricing" in scope ? (
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                  {scope.pricing}
                </p>
              ) : null}
              <h3 className="mt-5 text-2xl font-semibold leading-tight">{scope.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{scope.description}</p>
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
            Bring a system constraint, not a polished brief.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-inverse-foreground/70">
            Useful conversations can start with a precise mechanism problem or
            a weaker signal: emissions pressure, liquidity fragility, governance
            delay, treasury exposure, validators, or market structure.
          </p>
        </div>
        <Link
          href="/contact"
          className="w-fit border border-inverse-foreground bg-inverse-foreground px-5 py-3 font-mono text-xs text-inverse no-underline transition-colors hover:bg-transparent hover:text-inverse-foreground"
        >
          Discuss a system problem
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
