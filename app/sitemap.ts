import type { MetadataRoute } from "next";
import { getLocalResearchArticles } from "@/lib/research";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = ["", "/thesis", "/research", "/systems", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
  }));

  const articles = getLocalResearchArticles().map((article) => ({
    url: `${siteConfig.url}/research/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...routes, ...articles];
}
