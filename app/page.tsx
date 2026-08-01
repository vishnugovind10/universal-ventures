import Link from "next/link";
import { HeroBrandPlate } from "@/components/brand-visuals";
import {
  ArtifactInfrastructure,
  BuyerOutcomes,
  CapabilityMatrix,
  CredibilityStrip,
  FinalCta,
  ResearchObservatory,
  WhatActuallyDo,
  WhySystemsBreak,
} from "@/components/evidence-sections";
import { HeroSystemMap } from "@/components/system-visuals";
import { assetPath } from "@/lib/asset-path";
import { heroBrief, positioning } from "@/lib/content-model";

export default function Home() {
  return (
    <>
      <section className="border-b border-line bg-surface-muted/45">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-start md:px-10 md:py-20 lg:px-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Economic &amp; Settlement Architecture for Institutional Digital Assets
            </p>
            <h1 className="mt-8 max-w-4xl break-words text-4xl font-semibold leading-[0.95] tracking-tight min-[420px]:text-5xl sm:text-6xl md:text-7xl">
              {positioning.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-muted md:text-2xl md:leading-9">
              {positioning.subheadline}
            </p>
          </div>

          <div className="grid gap-4 md:row-span-2 md:self-center">
            <HeroBrandPlate
              coverSrc={assetPath("/brand/universal-ventures-cover.jpg")}
              markSrc={assetPath("/brand/universal-ventures-mark.png")}
            />
            <HeroSystemMap />
          </div>

          <div>
            <div className="mt-8 grid gap-3">
              {heroBrief.map((item) => (
                <div key={item.label} className="grid gap-2 border-t border-line pt-3 sm:grid-cols-[5rem_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    {item.label}
                  </p>
                  <p className="text-sm leading-6 text-muted">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              {positioning.trustStrip.map((item) => (
                <span
                  key={item}
                  className="w-fit max-w-full border border-line bg-surface px-3 py-2 font-mono text-xs text-muted shadow-sm shadow-line/20"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex w-fit border border-accent bg-accent px-5 py-3 font-mono text-xs text-surface no-underline transition-colors hover:bg-accent-strong"
              >
                Discuss a system problem
              </Link>
              <Link
                href="/research"
                className="inline-flex w-fit border border-line bg-surface px-5 py-3 font-mono text-xs text-accent no-underline transition-colors hover:border-accent"
              >
                See the tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CredibilityStrip />
      <WhatActuallyDo />
      <WhySystemsBreak />
      <CapabilityMatrix />
      <BuyerOutcomes />
      <ArtifactInfrastructure />
      <ResearchObservatory />
      <FinalCta />
    </>
  );
}
