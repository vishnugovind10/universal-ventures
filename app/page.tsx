import Link from "next/link";
import type { ReactNode } from "react";
import {
  CoreSystemDomains,
  InteractiveSystemsLayer,
  StrategicEngagement,
  WhatWeActuallyDo,
  WhySystemsBreak,
} from "@/components/home-sections";
import { HeroSystemMap } from "@/components/system-visuals";
import { positioning } from "@/lib/content-model";
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
              We design token, governance, treasury, liquidity, and coordination
              systems for protocols that need to remain functional under real
              market pressure.
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

      <WhatWeActuallyDo />
      <WhySystemsBreak />
      <CoreSystemDomains />
      <InteractiveSystemsLayer />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <div>
            <p className="font-mono text-sm text-subtle">Research / Observatory</p>
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

      <StrategicEngagement />
    </>
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
