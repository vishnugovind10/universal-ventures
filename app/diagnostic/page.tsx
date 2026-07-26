import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const testedDomains = [
  {
    index: "01",
    title: "Perimeter & classification",
    detail: "Confirms which entities, tokens, and activities actually fall inside MiCA/DORA scope before the rest of the assessment is scoped.",
  },
  {
    index: "02",
    title: "MiCA conduct & prudential controls",
    detail: "Reserve composition, redemption rights, disclosure obligations, and conduct requirements tested against the deployed system, not the policy file.",
  },
  {
    index: "03",
    title: "DORA operational resilience",
    detail: "ICT risk management, third-party dependency mapping, incident reporting, and resilience testing obligations.",
  },
  {
    index: "04",
    title: "Token-native controls",
    detail: "Upgrade-key governance, settlement and reconciliation integrity — the surface where template-based compliance work systematically under-delivers.",
  },
];

const method = [
  {
    title: "Substance over form",
    description:
      "On-chain verification: custody, segregation, upgrade-path and reconciliation claims tested against the contracts actually deployed, not against their descriptions.",
  },
  {
    title: "Failure-mode testing",
    description:
      "Each control scored under depeg, oracle failure, key compromise, finality stall and vendor exit.",
  },
];

const structure = [
  {
    week: "Week 1",
    title: "Evidence intake and architecture walkthrough",
    detail: "Gap list delivered within five days.",
  },
  {
    week: "Week 2",
    title: "Control testing, including on-chain verification",
    detail: "Interim flash report on any red finding the day it is confirmed.",
  },
  {
    week: "Week 3",
    title: "Findings challenge session",
    detail: "Final report with scored heatmap, findings register and prioritised remediation roadmap.",
  },
];

export const metadata: Metadata = {
  title: "Tokenized-Asset Readiness Diagnostic",
  description:
    "A 15-point, evidence-based MiCA/DORA control assessment for platforms issuing, servicing or safekeeping tokenized assets.",
};

export default function DiagnosticPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diagnostic"
        title="Tokenized-Asset Readiness Diagnostic"
        lede="A 15-point, evidence-based MiCA/DORA control assessment for platforms issuing, servicing or safekeeping tokenized assets."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.32fr_0.68fr] lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              The shift
            </p>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl leading-8 text-foreground md:text-2xl md:leading-9">
              Supervision has moved from &ldquo;do you hold the licence&rdquo; to
              &ldquo;can you evidence, on demand, that the architecture does what
              your policy file says it does.&rdquo;
            </p>
            <p className="mt-5 text-base leading-7 text-muted">
              Most compliance documentation is written against templates drawn
              from securities or payments practice, while the operative risk
              sits in the token layer.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            What&apos;s tested
          </p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-medium leading-none md:text-5xl">
            Four domains, fifteen control points.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {testedDomains.map((domain) => (
              <article key={domain.index} className="border border-line bg-background p-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {domain.index}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-snug">{domain.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{domain.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.32fr_0.68fr] lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Method
            </p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-none md:text-5xl">
              Evidence, not assertions.
            </h2>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {method.map((item) => (
              <article key={item.title} className="bg-background p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            Structure
          </p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-medium leading-none md:text-5xl">
            Three weeks, fixed scope, fixed fee.
          </h2>
          <ol className="mt-12 grid border-t border-line">
            {structure.map((step, index) => (
              <li
                key={step.week}
                className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.2fr_0.8fr]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {String(index + 1).padStart(2, "0")} / {step.week}
                </p>
                <div>
                  <h3 className="text-xl font-semibold leading-snug">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
            Delivered under your engagement terms where relevant. White-label or
            co-branded.
          </p>
        </div>
      </section>

      <section className="bg-inverse text-inverse-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.68fr_0.32fr] lg:items-end lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-inverse-foreground/60">
              Request the methodology
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-none tracking-tight md:text-5xl">
              Get the full methodology summary before scoping a diagnostic.
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-fit border border-inverse-foreground bg-inverse-foreground px-5 py-3 font-mono text-xs text-inverse no-underline transition-colors hover:bg-transparent hover:text-inverse-foreground"
          >
            Request the methodology summary
          </Link>
        </div>
      </section>
    </>
  );
}
