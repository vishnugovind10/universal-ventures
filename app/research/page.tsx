import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { PageHeader } from "@/components/page-header";
import { observatoryZones } from "@/lib/content-model";
import { getAllResearchArticles } from "@/lib/research";

const researchModes = [
  "Systems analysis",
  "Coordination research",
  "Infrastructure critiques",
  "Market structure thinking",
  "Protocol stress testing",
];

export const metadata: Metadata = {
  title: "Research & Writing",
  description:
    "Systems analysis and research on protocol economics, coordination failure, governance, market structure, liquidity architecture, and digital infrastructure.",
};

export default function ResearchPage() {
  const articles = getAllResearchArticles();

  return (
    <>
      <PageHeader
        eyebrow="Research & Writing"
        title="Research for systems that need to survive pressure."
        lede="A curated index of protocol economics, coordination research, market structure analysis, governance critiques, and infrastructure stress testing."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[0.34fr_0.66fr] lg:px-16">
          <aside>
            <p className="font-mono text-sm text-subtle">Research posture</p>
            <div className="mt-8 grid gap-3">
              {researchModes.map((mode) => (
                <p key={mode} className="border-t border-line pt-3 text-sm text-muted">
                  {mode}
                </p>
              ))}
            </div>
          </aside>
          <div>
            <p className="max-w-3xl text-2xl leading-snug text-foreground">
              The writing is not a content feed. It is a working surface for how
              economic systems destabilize, where leverage sits, and what protocol
              architecture has to make legible.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {observatoryZones.map((zone, index) => (
                <article key={zone.title} className="border border-line bg-surface/45 p-5">
                  <p className="font-mono text-xs text-subtle">zone 0{index + 1}</p>
                  <h2 className="mt-8 text-lg font-semibold">{zone.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {zone.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-12 border-t border-line">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
