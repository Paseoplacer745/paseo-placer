import type { MetadataRoute } from "next";
import { site, stores } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const pages = ["", "/eventos", "/arriendos", "/estacionamiento"].map((p) => ({ url: `${base}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 }));
  const tiendas = stores.filter((s) => !s.comingSoon).map((s) => ({ url: `${base}/tiendas/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.5 }));
  return [...pages, ...tiendas];
}
