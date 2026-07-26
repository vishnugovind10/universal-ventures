import type { Metadata } from "next";
import Link from "next/link";
import { ProofVisual } from "@/components/proof-visuals";
import { earlierWork } from "@/lib/content-model";

const capabilities = [
  "Economic Architecture",
  "Incentive Systems",
  "Treasury Strategy",
  "Governance Design",
  "Market Structure",
];

const problemDomains = [
  {
    index: "01",
    taxonomy: "Incentive Architecture",
    title: "Participation is growing, but useful behavior is not compounding.",
    problem:
      "Emissions, staking rewards, and contributor incentives can fund measurable activity while retention and system value weaken.",
    output:
      "Actor map, incentive-flow analysis, leakage register, and mechanism recommendations.",
  },
  {
    index: "02",
    taxonomy: "Treasury & Emissions",
    title: "Runway, liquidity support, and token confidence are becoming reflexive.",
    problem:
      "Treasury policy fails when reserves, emissions, unlocks, operating budgets, and market support are modeled separately.",
    output:
      "Treasury scenario matrix, reserve constraints, emissions envelope, and decision thresholds.",
  },
  {
    index: "03",
    taxonomy: "Governance Systems",
    title: "The system can vote, but it cannot coordinate when timing matters.",
    problem:
      "Broad decision surfaces, delegation inertia, and unclear intervention rights create latency, capture risk, and operating ambiguity.",
    output:
      "Decision-rights map, governance tree, escalation logic, and operating rules.",
  },
  {
    index: "04",
    taxonomy: "Market Structure & Liquidity",
    title: "Reported depth looks healthy while capital quality remains fragile.",
    problem:
      "Rented liquidity, routing leakage, market-maker dependence, and funding exposure can disappear when incentives or volatility change.",
    output:
      "Liquidity routing map, market-quality review, dependency analysis, and intervention priorities.",
  },
  {
    index: "05",
    taxonomy: "Institutional Translation",
    title: "A strong system is difficult for partners, governance, or capital to evaluate.",
    problem:
      "Protocol-native assumptions often remain illegible as controls, obligations, risk surfaces, and operating constraints.",
    output:
      "Institutional architecture brief, evidence pack, risk map, and diligence-ready decision surface.",
  },
];

const engagements = [
  {
    title: "System Assessment",
    duration: "2-3 weeks",
    price: "From EUR 2-5k",
    description: "A bounded diagnosis before a mechanism, policy, or capital decision hardens.",
    deliverables: [
      "Mechanism diagnosis",
      "Constraint and actor map",
      "Failure-mode register",
      "Prioritized decision memo",
    ],
  },
  {
    title: "Architecture Engagement",
    duration: "4-8 weeks",
    price: "Typically EUR 5-20k+",
    description: "A complete redesign or new economic architecture for a defined system surface.",
    deliverables: [
      "Economic system model",
      "Mechanism specifications",
      "Scenario and sensitivity analysis",
      "Implementation artifact pack",
    ],
  },
  {
    title: "Embedded Advisory",
    duration: "Monthly cadence",
    price: "Scoped",
    description: "Ongoing architecture support for teams making interconnected system decisions.",
    deliverables: [
      "Design review cycles",
      "Governance and treasury support",
      "Research and evidence translation",
      "Decision documentation",
    ],
  },
];

const method = [
  ["01", "Diagnose", "Locate the failure surface before selecting a mechanism."],
  ["02", "Model", "Test the variables, actors, and pressure states that change the decision."],
  ["03", "Architect", "Convert constraints into mechanisms, rights, and operating logic."],
  ["04", "Translate", "Produce artifacts that implementation, governance, and institutions can review."],
];

export const metadata: Metadata = {
  title: "Work",
  description:
    "Institutional economic architecture for token systems, treasury, governance, liquidity, and market structure under real constraints.",
};

export default function WorkPage() {
  return (
    <>
      <section className="institutional-grid relative overflow-hidden border-b border-line">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.66fr_0.34fr] lg:items-end lg:px-16">
          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
              Institutional Economic Architecture
            </p>
            <h1 className="mt-8 max-w-5xl break-words font-serif text-5xl font-medium leading-[0.94] text-foreground sm:text-6xl md:text-7xl">
              Economic systems built to remain legible under pressure.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              I advise banks, advisory firms, protocols, and funds on token
              design, stablecoin mechanisms, settlement architecture, and
              treasury and governance decisions that cannot be treated in isolation.
            </p>
            <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex h-11 w-fit max-w-full items-center border border-accent bg-accent px-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-background no-underline transition-colors hover:bg-accent-strong"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/research"
                className="inline-flex h-11 w-fit max-w-full items-center border border-line px-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted no-underline transition-colors hover:border-accent hover:text-accent"
              >
                Review Research Objects
              </Link>
            </div>
          </div>

          <aside className="border-l border-accent pl-6 lg:pb-2">
            <p className="font-serif text-6xl font-medium leading-none text-accent">14+</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-foreground">
              Years of capital markets and structured finance methodology.
            </p>
            <p className="mt-5 max-w-xs font-mono text-[0.66rem] uppercase tracking-[0.12em] text-subtle">
              Applied to digital asset systems, mechanism design, and coordination infrastructure.
            </p>
          </aside>
        </div>
      </section>

      <section aria-label="Core capabilities" className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-5 lg:px-16">
          {capabilities.map((capability, index) => (
            <p
              key={capability}
              className="border-b border-line py-4 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted sm:border-r sm:px-4 lg:border-b-0 first:pl-0 last:border-r-0"
            >
              <span className="mr-2 text-accent">{String(index + 1).padStart(2, "0")}</span>
              {capability}
            </p>
          ))}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.32fr_0.68fr] lg:px-16">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">
              What I Solve
            </p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-none md:text-5xl">
              Structural problems with economic consequences.
            </h2>
          </div>

          <div className="border-t border-line">
            {problemDomains.map((domain) => (
              <article
                key={domain.index}
                className="grid gap-6 border-b border-line py-8 md:grid-cols-[0.34fr_0.66fr]"
              >
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">
                    {domain.index} / {domain.taxonomy}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-foreground">
                    {domain.title}
                  </h3>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Signal label="Failure surface" value={domain.problem} />
                  <Signal label="Decision output" value={domain.output} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.32fr_0.68fr] lg:px-16">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">
              Engagement Model
            </p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-none md:text-5xl">
              Scope follows the decision at risk.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              Pricing anchors establish fit. Final scope depends on system surface,
              evidence availability, and implementation depth.
            </p>
          </div>

          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {engagements.map((engagement) => (
              <article key={engagement.title} className="flex min-h-full flex-col bg-background p-6">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">
                  {engagement.duration}
                </p>
                <h3 className="mt-6 font-serif text-3xl font-medium leading-none">
                  {engagement.title}
                </h3>
                <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-foreground">
                  {engagement.price}
                </p>
                <p className="mt-5 text-sm leading-6 text-muted">{engagement.description}</p>
                <ul className="mt-8 grid gap-3 border-t border-line pt-5 text-sm text-muted">
                  {engagement.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex gap-3">
                      <span aria-hidden="true" className="text-accent">-</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.32fr_0.68fr] lg:px-16">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">
              Working Method
            </p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-none md:text-5xl">
              Analysis ends in a decision surface.
            </h2>
          </div>
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {method.map(([index, title, description]) => (
              <li key={index} className="bg-background p-6">
                <p className="font-mono text-[0.66rem] text-accent">{index}</p>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">
            Market Microstructure — Earlier Work
          </p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-medium leading-none md:text-5xl">
            Trading and execution infrastructure from before the institutional practice.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
            Proof of market microstructure fluency, not the current focus of the
            practice.
          </p>
          <div className="mt-10 grid gap-5">
            {earlierWork.map((artifact) => (
              <article
                key={artifact.title}
                className="grid gap-6 border border-line bg-surface p-5 md:grid-cols-[0.34fr_0.66fr]"
              >
                <div className="flex min-h-40 items-center border border-line bg-background p-4">
                  <ProofVisual type={artifact.visual} />
                </div>
                <div>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">
                    {artifact.source}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight">{artifact.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{artifact.capability}</p>
                  <Link
                    href={artifact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex font-mono text-xs text-accent no-underline hover:text-accent-strong"
                  >
                    View repository
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.68fr_0.32fr] lg:items-end lg:px-16">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">
              Engagement Initiation
            </p>
            <h2 className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-none md:text-6xl">
              Bring the system, the constraint, and the decision that cannot remain ambiguous.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 w-fit items-center border border-accent bg-accent px-6 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-background no-underline transition-colors hover:bg-accent-strong lg:justify-self-end"
          >
            Begin Engagement <span aria-hidden="true" className="ml-2">-&gt;</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-subtle">
        {label}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}
