import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import {
  buyerOutcomes,
  credentials,
  education,
  founderProfile,
  proofObjects,
  workingPrinciples,
} from "@/lib/content-model";
import { socialLinks } from "@/lib/site";

const operatingSignals = [
  "Institutional digital assets",
  "Stablecoin mechanism design",
  "Settlement architecture",
  "MiCA / DORA readiness",
  "Tokenized fund infrastructure",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Vishnu Govind — founder of Universal Ventures, an independent practice architecting the economic and settlement layer of institutional digital asset systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A focused economic and settlement architecture practice led by Vishnu Govind."
        lede="I architect the economic and settlement layer of institutional digital asset systems: where token design, DLT infrastructure and regulatory constraint meet."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <aside className="border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Founder
            </p>
            <h2 className="mt-8 text-4xl font-semibold leading-none">
              {founderProfile.name}
            </h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
              {founderProfile.role}
            </p>
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
              {founderProfile.focus}
            </p>
            <p className="mt-6 text-base leading-7 text-muted">
              {founderProfile.why}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {workingPrinciples.map((principle) => (
                <p
                  key={principle}
                  className="border border-line bg-surface p-4 text-sm leading-6 text-muted"
                >
                  {principle}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Institutional and regulatory record
              </p>
              <div className="mt-5 grid gap-4">
                {credentials.map((item) => (
                  <p key={item} className="border-t border-line pt-4 text-sm leading-6 text-muted">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Education
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {education.map((item) => (
                  <p
                    key={item}
                    className="border border-line bg-surface p-4 text-sm leading-6 text-muted"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Why this exists
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight">
                Theory is only useful when it changes what a team can decide.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                The practice converts system analysis into reviewable objects:
                mechanism maps, simulation outputs, governance models, treasury
                matrices, and constraint frameworks.
              </p>
            </div>

            <div className="mt-10 grid gap-4">
              {buyerOutcomes.slice(0, 2).map((outcome) => (
                <section key={outcome.before} className="border-t border-line pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    Delivery outcome
                  </p>
                  <p className="mt-3 text-base leading-7 text-foreground">
                    {outcome.after}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-10 grid gap-5">
              {proofObjects.map((object, index) => (
                <section key={object.title} className="border-t border-line pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    Proof {index + 1}
                  </p>
                  <Link
                    href={object.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-base leading-7 text-foreground no-underline hover:text-accent"
                  >
                    {object.title}
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-muted">{object.output}</p>
                </section>
              ))}
            </div>

            <div className="mt-10 grid gap-3 border-t border-line pt-8 sm:flex sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="font-mono text-xs text-muted no-underline hover:text-accent"
              >
                Contact form
              </Link>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-muted no-underline hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex border border-accent bg-accent px-5 py-3 font-mono text-xs text-surface no-underline transition-colors hover:bg-accent-strong"
              >
                Discuss a system problem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
