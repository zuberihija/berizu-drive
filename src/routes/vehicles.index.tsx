import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/automotive/SiteShell";

export const Route = createFileRoute("/vehicles/")({
  head: () => ({ meta: [{ title: "Vehicles — Berizu Motors" }, { name: "description", content: "Explore vehicles available from Berizu Motors in Kisumu." }, { property: "og:title", content: "Vehicles — Berizu Motors" }, { property: "og:description", content: "Explore vehicles available from Berizu Motors in Kisumu." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: VehiclesPage,
});

function VehiclesPage() {
  return <PageShell><section className="page-wrap min-h-screen pt-40"><p className="eyebrow">Live inventory</p><h1 className="mt-4 font-display text-5xl font-semibold uppercase">Vehicles</h1></section></PageShell>;
}