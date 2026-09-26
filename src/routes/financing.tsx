import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/automotive/SiteShell";

export const Route = createFileRoute("/financing")({
  head: () => ({ meta: [{ title: "Vehicle Financing — Berizu Motors" }, { name: "description", content: "Explore vehicle financing options of up to 90% with Berizu Motors." }, { property: "og:title", content: "Vehicle Financing — Berizu Motors" }, { property: "og:description", content: "Explore vehicle financing options of up to 90% with Berizu Motors." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <PageShell><section className="page-wrap min-h-screen pt-40"><p className="eyebrow">Berizu financing</p><h1 className="mt-4 font-display text-5xl font-semibold uppercase">Get behind the wheel sooner.</h1></section></PageShell>,
});