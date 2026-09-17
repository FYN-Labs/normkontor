import type { MetadataRoute } from "next";
import { allPosts } from "../lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://normkontor.de",
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://normkontor.de/blog",
      lastModified: new Date(allPosts[0]?.date ?? "2026-09-17"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...allPosts.map((p) => ({
      url: `https://normkontor.de/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
