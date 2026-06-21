import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/constants";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://greatlanecarriers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(ROUTES);

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === ROUTES.home ? "weekly" : "monthly",
    priority: route === ROUTES.home ? 1 : 0.8,
  }));
}
