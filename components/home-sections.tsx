import Link from "next/link";
import { ProgressivePanel } from "@/components/progressive-panel";
import {
  CoordinationBreakdownDiagram,
  FailureModeMap,
  PrincipleRail,
  ProtocolFeedbackLoop,
  VisualCaseStudyGrid,
} from "@/components/system-visuals";
import {
  coordinationBreakdowns,
  coreSystemDomains,
  economicConsequences,
  failureModes,
  principles,
  problemOutcomeCards,
  protocolLoop,
  strategicEngagementSteps,
  visualCaseStudies,
  whatWeActuallyDo,
  whySystemsBreak,
} from "@/lib/content-model";

export function WhatWeActuallyDo() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="font-mono text-sm text-subtle">What we actually do</p>
            <h2 className="mt-8 max-w-md font-serif text-4xl font-medium leading-none md:text-5xl">
              {whatWeActuallyDo.title}
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-8 text-foreground md:text-2xl md:leading-9">
              {whatWeActuallyDo.summary}
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {whatWeActuallyDo.signals.map((signal) => (
                <p
                  key={signal}
                  className="border-t border-line pt-4 font-mono text-xs leading-5 text-muted"
                >
                  {signal}
                </p>
              ))}
            </div>
          </div>
        </div>

        <ProblemOutcomeGrid />
      </div>
    </section>
  );
}

export function ProblemOutcomeGrid() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      {problemOutcomeCards.map((card, index) => (
        <ProgressivePanel
          key={card.problem}
          index={`0${index + 1}`}
          title={`${card.problem} -> ${card.outcome}`}
          summary={card.summary}
          consequence={card.consequence}
          actionLabel={card.action}
        >
          <p>{card.detail}</p>
        </ProgressivePanel>
      ))}
    </div>
  );
}

export function WhySystemsBreak() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-sm text-subtle">Why systems break</p>
            <h2 className="mt-8 max-w-xl font-serif text-5xl font-medium leading-none md:text-6xl">
              Real market behavior breaks clean diagrams.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted">
              Token systems collapse, governance stalls, liquidity extracts, and
              participation decays when the design assumes actors will behave
              politely under volatility.
            </p>
          </div>

          <div className="grid gap-4">
            {whySystemsBreak.map((item, index) => (
              <ProgressivePanel
                key={item.title}
                index={`break 0${index + 1}`}
                title={item.title}
                summary={item.summary}
                consequence={item.consequence}
                actionLabel={item.action}
                className="bg-background"
              >
                <p>{item.detail}</p>
              </ProgressivePanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoreSystemDomains() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Core system domains"
          title="The work sits where economic design becomes operational control."
          copy="Each domain is treated as a pressure surface: what actors do, what the system can afford, and which constraints need to hold when conditions change."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreSystemDomains.map((domain, index) => (
            <ProgressivePanel
              key={domain.title}
              index={`0${index + 1}`}
              title={domain.title}
              summary={domain.short}
              consequence={domain.consequence}
              actionLabel={domain.action}
            >
              <p>{domain.detail}</p>
            </ProgressivePanel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InteractiveSystemsLayer() {
  return (
    <section className="border-b border-line bg-surface/25">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <SectionIntro
          eyebrow="Interactive systems layer"
          title="The deeper layer maps how pressure moves through the system."
          copy="The visual layer is a research surface: failure paths, feedback loops, and conceptual examples for how coordination architecture becomes economically consequential."
        />

        <div className="mt-12 grid gap-14">
          <CoordinationBreakdownDiagram items={coordinationBreakdowns} />
          <FailureModeMap items={failureModes} consequences={economicConsequences} />
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <div>
              <p className="font-mono text-sm text-subtle">System loop</p>
              <h3 className="mt-8 max-w-md font-serif text-4xl font-medium leading-none md:text-5xl">
                Incentives move faster than governance.
              </h3>
              <p className="mt-6 max-w-md text-base leading-7 text-muted">
                Behavior changes liquidity. Liquidity changes governance.
                Governance changes survivability.
              </p>
            </div>
            <ProtocolFeedbackLoop steps={protocolLoop} />
          </div>
          <VisualCaseStudyGrid items={visualCaseStudies} />
          <PrincipleRail items={principles} />
        </div>
      </div>
    </section>
  );
}

export function StrategicEngagement() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
        <div>
          <p className="font-mono text-sm text-subtle">Strategic engagement</p>
          <h2 className="mt-8 max-w-md font-serif text-5xl font-medium leading-none md:text-6xl">
            Simple entry. Deep system work.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">
            Useful work starts by locating the pressures that can change system
            behavior, then compressing those pressures into decisions.
          </p>
        </div>

        <div>
          <div className="grid border-t border-line">
            {strategicEngagementSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 border-b border-line py-7 md:grid-cols-[0.16fr_0.84fr]"
              >
                <p className="font-mono text-xs text-subtle">0{index + 1}</p>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-foreground">
                    {step.summary}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.detail}</p>
                </div>
              </article>
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
              href="/systems"
              className="inline-flex border border-line px-5 py-3 font-mono text-xs text-foreground no-underline transition-colors hover:border-line-strong"
            >
              Explore System Domains
            </Link>
          </div>
        </div>
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
