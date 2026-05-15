import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { EditorialSection } from "@/components/editorial-section";
import { PageHeader } from "@/components/page-header";
import { getAllResearchArticles } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research & Writing",
  description:
    "Research notes and essays on protocol economics, governance, market structure, liquidity architecture, and coordination systems.",
};

export default function ResearchPage() {
  const articles = getAllResearchArticles();

  return (
    <>
      <PageHeader
        eyebrow="Research & Writing"
        title="A working index for protocol economies and coordination systems"
        lede="Essays, notes, and research scaffolding across market structure, governance, token systems, treasury coordination, and adaptive economic infrastructure."
      />

      <EditorialSection eyebrow="Index" title="Research journal">
        <div className="border-t border-line">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </EditorialSection>
    </>
  );
}
