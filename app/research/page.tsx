import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { researchObjectFilters, researchObjects } from "@/lib/content-model";

export const metadata: Metadata = {
  title: "Research Objects",
  description:
    "Research objects, frameworks, simulations, repositories, and artifacts across protocol economics, market infrastructure, and coordination systems.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research Objects"
        title="Frameworks, simulations, repositories, and research notes with implementation value."
        lede="This is the retrieval layer for Universal Ventures: proof objects organized by problem solved, artifact type, and implementation depth."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {researchObjectFilters.map((filter) => (
              <span
                key={filter}
                className="border border-line bg-surface px-3 py-2 font-mono text-xs text-muted"
              >
                {filter}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {researchObjects.map((object) => (
              <Link
                key={object.title}
                href={object.href}
                target={object.href.startsWith("http") ? "_blank" : undefined}
                rel={object.href.startsWith("http") ? "noreferrer" : undefined}
                className="border border-line bg-surface p-5 no-underline transition-colors hover:border-accent"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="border border-line px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                    {object.type}
                  </span>
                  <span className="border border-line px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-subtle">
                    {object.domain}
                  </span>
                </div>
                <h2 className="mt-6 break-words text-2xl font-semibold leading-tight">
                  {object.title}
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Signal label="Problem solved" value={object.problem} />
                  <Signal label="Implementation level" value={object.implementation} />
                  <Signal label="Artifact type" value={object.type} />
                  <Signal label="Format" value={object.readTime} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
        {label}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}
