import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const pages = [
  "/",
  "/ai-workshop-marknadsforing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map((p) => ({
    url: `https://aiworkshops.se${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.8,
  }));
}
