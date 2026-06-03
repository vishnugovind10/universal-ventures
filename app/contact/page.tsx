import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { engagementFit, engagementReasons, scopeAnchors } from "@/lib/content-model";

const intakeSignals = [
  "Current system context",
  "Decision or risk surface",
  "Relevant artifacts or assumptions",
  "Preferred engagement scope",
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss protocol design, treasury architecture, incentive restructuring, coordination systems, and infrastructure strategy with Universal Ventures.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discuss a system problem."
        lede="Whether you have a clearly defined mechanism problem or only know something feels structurally wrong, describe the system, constraints, and current pressure."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <aside className="border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Typical reasons teams engage
            </p>
            <div className="mt-8 grid gap-3">
              {engagementReasons.map((reason) => (
                <p key={reason} className="border-t border-line pt-3 text-sm text-muted">
                  {reason}
                </p>
              ))}
            </div>
          </aside>

          <div className="grid gap-12">
            <div className="max-w-3xl">
              <p className="text-2xl leading-snug text-foreground">
                Engagements are scoped around what needs to become clear:
                where the system is under pressure, what decision is blocked,
                and which artifact would help the team move.
              </p>
              <p className="mt-5 text-base leading-7 text-muted">
                Share the system context, current concern, and whether the need is
                assessment, architecture, or ongoing advisory cadence. If the
                problem is not fully diagnosed yet, describe the behavior that
                looks wrong.
              </p>
              <p className="mt-5 text-sm leading-6 text-muted">
                Not ready?{" "}
                <Link href="/research" className="text-accent no-underline hover:text-accent-strong">
                  Review research objects first.
                </Link>
              </p>
            </div>

            <div className="grid gap-3 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {intakeSignals.map((signal) => (
                <p key={signal} className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                  {signal}
                </p>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {engagementFit.slice(0, 2).map((item) => (
                <article key={item.title} className="border border-line bg-surface p-5">
                  <h2 className="text-xl font-semibold leading-tight">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {scopeAnchors.map((scope) => (
                <article key={scope.title} className="border border-line bg-surface p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {scope.duration}
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    {scope.pricing}
                  </p>
                  <h2 className="mt-5 text-xl font-semibold">{scope.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {scope.description}
                  </p>
                </article>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
