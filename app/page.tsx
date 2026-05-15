import Link from "next/link";
import type { ReactNode } from "react";
import {
  CoordinationBreakdownDiagram,
  FailureModeMap,
  HeroSystemMap,
  PrincipleRail,
  ProtocolFeedbackLoop,
  SolutionCardGrid,
  VisualCaseStudyGrid,
} from "@/components/system-visuals";
import {
  coordinationBreakdowns,
  economicConsequences,
  failureModes,
  positioning,
  principles,
  protocolLoop,
  solutionAreas,
  visualCaseStudies,
} from "@/lib/content-model";
import { getAllResearchArticles } from "@/lib/research";

export default function Home() {
  const featuredResearch = getAllResearchArticles().slice(0, 3);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 md:py-20 lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Universal Ventures</p>
            <h1 className="mt-8 max-w-4xl break-words font-serif text-3xl font-medium leading-none min-[420px]:text-4xl sm:text-6xl md:text-7xl">
              {positioning.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-muted md:text-2xl md:leading-9">
              {positioning.subheadline}
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              {positioning.trustStrip.map((item) => (
                <span
                  key={item}
                  className="w-fit max-w-full border border-line px-3 py-2 font-mono text-xs text-subtle"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex border border-foreground bg-foreground px-5 py-3 font-mono text-xs text-background no-underline transition-colors hover:bg-background hover:text-foreground"
              >
                Discuss Your System
              </Link>
              <Link
                href="/research"
                className="inline-flex border border-line px-5 py-3 font-mono text-xs text-foreground no-underline transition-colors hover:border-line-strong"
              >
                View Research
              </Link>
            </div>
          </div>

          <HeroSystemMap />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <CoordinationBreakdownDiagram items={coordinationBreakdowns} />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <p className="font-mono text-sm text-subtle">Economic consequence</p>
            <p className="max-w-3xl text-lg leading-8 text-muted md:col-span-3">
              Coordination failures are not abstract design flaws. They become
              liquidity instability, treasury deterioration, governance paralysis,
              incentive leakage, and strategic loss of control.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <SectionIntro
            eyebrow="What we help solve"
            title="Operational architecture for systems under pressure."
            copy="The work is not more mechanism design for its own sake. It is reducing complexity into decisions, constraints, and leverage points a protocol can actually operate."
          />
          <div className="mt-12">
            <SolutionCardGrid items={solutionAreas} />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <SectionIntro
            eyebrow="Failure modes"
            title="We design against the ways systems break before they scale."
            copy="Most fragility appears before it becomes visible in metrics. It shows up in incentives, routing paths, control rights, and liquidity quality."
          />
          <div className="mt-12">
            <FailureModeMap items={failureModes} consequences={economicConsequences} />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.36fr_0.64fr] lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Systems thinking</p>
            <h2 className="mt-8 max-w-md font-serif text-4xl font-medium leading-none md:text-5xl">
              Protocols are living economic systems.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              Incentives change behavior. Behavior changes liquidity. Liquidity
              changes governance. Governance changes survivability.
            </p>
          </div>
          <ProtocolFeedbackLoop steps={protocolLoop} />
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <SectionIntro
            eyebrow="System examples"
            title="Concrete failure patterns, mapped before they become emergencies."
            copy="These are conceptual architecture examples, not client claims. Each one shows what breaks, why it matters economically, and where a survivable system needs leverage."
          />
          <div className="mt-12">
            <VisualCaseStudyGrid items={visualCaseStudies} />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
          <SectionIntro
            eyebrow="Principles"
            title="Simple enough to operate. Rigorous enough to survive."
            copy="The goal is compressed systems intelligence: clarity that holds when the market, governance, and incentives stop behaving politely."
          />
          <div className="mt-12">
            <PrincipleRail items={principles} />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Research</p>
            <h2 className="mt-8 max-w-md font-serif text-4xl font-medium leading-none md:text-5xl">
              Systems analysis for coordination infrastructure.
            </h2>
          </div>
          <div className="grid border-t border-line">
            {featuredResearch.map((article) => {
              const href = article.externalUrl ?? `/research/${article.slug}`;
              const isExternal = Boolean(article.externalUrl);

              return (
                <LinkOrAnchor
                  key={article.slug}
                  href={href}
                  external={isExternal}
                  className="grid gap-3 border-b border-line py-6 no-underline md:grid-cols-[0.28fr_0.72fr]"
                >
                  <span className="font-mono text-xs text-subtle">
                    {article.category}
                  </span>
                  <span>
                    <span className="block font-serif text-2xl font-medium leading-tight">
                      {article.title}
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-muted">
                      {article.summary}
                    </span>
                  </span>
                </LinkOrAnchor>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.62fr_0.38fr] lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Contact</p>
            <h2 className="mt-8 max-w-3xl font-serif text-5xl font-medium leading-none md:text-6xl">
              Let&apos;s discuss your system.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              For protocol design, treasury architecture, incentive restructuring,
              coordination systems, and infrastructure strategy.
            </p>
          </div>
          <div className="flex items-end">
            <Link
              href="/contact"
              className="w-fit border border-foreground bg-foreground px-5 py-3 font-mono text-xs text-background no-underline transition-colors hover:bg-background hover:text-foreground"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
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
    <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
      <p className="font-mono text-sm text-subtle">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl font-serif text-4xl font-medium leading-none md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-7 text-muted">{copy}</p>
      </div>
    </div>
  );
}

function LinkOrAnchor({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external: boolean;
  className: string;
  children: ReactNode;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
