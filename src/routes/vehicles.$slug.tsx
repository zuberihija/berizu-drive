import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/automotive/SiteShell";

export const Route = createFileRoute("/vehicles/$slug")({
  head: () => ({ meta: [{ title: "Vehicle — Berizu Motors" }, { name: "description", content: "View vehicle details and enquire with Berizu Motors." }, { property: "og:title", content: "Vehicle — Berizu Motors" }, { property: "og:description", content: "View vehicle details and enquire with Berizu Motors." }, { property: "og:type", content: "product" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: VehiclePage,
});

function VehiclePage() {
  return <PageShell><section className="page-wrap min-h-screen pt-40"><p className="eyebrow">Vehicle details</p><h1 className="mt-4 font-display text-5xl font-semibold uppercase">Vehicle</h1></section></PageShell>;
}