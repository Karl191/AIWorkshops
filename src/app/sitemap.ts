import type { MetadataRoute } from "next";

const pages = [
  "/", 
  "/ai-workshop-marknadsforing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `https://aiworkshops.se${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
