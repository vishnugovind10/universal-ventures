import Link from "next/link";
import type { ResearchArticle } from "@/lib/research";

export function ArticleCard({ article }: { article: ResearchArticle }) {
  const isExternal = Boolean(article.externalUrl);
  const href = article.externalUrl ?? `/research/${article.slug}`;

  const content = (
    <article className="grid gap-4 border-b border-line py-7 transition-colors hover:border-line-strong md:grid-cols-[0.28fr_0.72fr]">
      <div className="font-mono text-xs text-subtle">
        <p>{article.category}</p>
        <p className="mt-2">{article.date}</p>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-serif text-2xl font-medium leading-tight">{article.title}</h2>
          <span className="border border-line px-2 py-1 font-mono text-xs text-subtle">
            {article.status}
          </span>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{article.summary}</p>
        <p className="mt-5 font-mono text-xs text-foreground">
          {isExternal ? "Read on Medium" : "Read local note"}
        </p>
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block no-underline">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block no-underline">
      {content}
    </Link>
  );
}
