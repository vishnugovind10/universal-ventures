import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const researchDirectory = path.join(process.cwd(), "content", "research");

export type ResearchArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  status: string;
  date: string;
  featured: boolean;
  externalUrl?: string;
  contentHtml?: string;
};

type ResearchFrontmatter = {
  title?: string;
  summary?: string;
  category?: string;
  status?: string;
  date?: string;
  featured?: boolean;
  externalUrl?: string;
};

function getArticleFiles() {
  if (!fs.existsSync(researchDirectory)) {
    return [];
  }

  return fs.readdirSync(researchDirectory).filter((file) => file.endsWith(".md"));
}

function articleFromFile(file: string): ResearchArticle {
  const slug = file.replace(/\.md$/, "");
  const fullPath = path.join(researchDirectory, file);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(source);
  const frontmatter = data as ResearchFrontmatter;

  return {
    slug,
    title: frontmatter.title ?? slug,
    summary: frontmatter.summary ?? "",
    category: frontmatter.category ?? "Research",
    status: frontmatter.status ?? "Working note",
    date: frontmatter.date ?? "Undated",
    featured: Boolean(frontmatter.featured),
    externalUrl: frontmatter.externalUrl,
  };
}

export function getAllResearchArticles() {
  return getArticleFiles()
    .map(articleFromFile)
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      return b.date.localeCompare(a.date);
    });
}

export function getLocalResearchArticles() {
  return getAllResearchArticles().filter((article) => !article.externalUrl);
}

export async function getResearchArticle(slug: string) {
  const filePath = path.join(researchDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = data as ResearchFrontmatter;

  if (frontmatter.externalUrl) {
    return undefined;
  }

  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: frontmatter.title ?? slug,
    summary: frontmatter.summary ?? "",
    category: frontmatter.category ?? "Research",
    status: frontmatter.status ?? "Working note",
    date: frontmatter.date ?? "Undated",
    featured: Boolean(frontmatter.featured),
    contentHtml: processed.toString(),
  } satisfies ResearchArticle;
}
