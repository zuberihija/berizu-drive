import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/automotive/SiteShell";

export const Route = createFileRoute("/brands")({
  head: () => ({ meta: [{ title: "Vehicle Brands — Berizu Motors" }, { name: "description", content: "Explore vehicle brands available at Berizu Motors." }, { property: "og:title", content: "Vehicle Brands — Berizu Motors" }, { property: "og:description", content: "Explore vehicle brands available at Berizu Motors." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <PageShell><section className="page-wrap min-h-screen pt-40"><p className="eyebrow">Our marques</p><h1 className="mt-4 font-display text-5xl font-semibold uppercase">Brands</h1></section></PageShell>,
});