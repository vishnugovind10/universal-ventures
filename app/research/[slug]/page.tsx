import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { getLocalResearchArticles, getResearchArticle } from "@/lib/research";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLocalResearchArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getResearchArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ResearchArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getResearchArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHeader eyebrow={article.category} title={article.title} lede={article.summary} />
      <article className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.3fr_0.7fr] md:px-10 lg:px-16">
          <aside className="font-mono text-sm text-subtle">
            <p>{article.status}</p>
            <p className="mt-2">{article.date}</p>
          </aside>
          <div
            className="article-prose max-w-3xl"
            dangerouslySetInnerHTML={{ __html: article.contentHtml ?? "" }}
          />
        </div>
      </article>
    </>
  );
}
