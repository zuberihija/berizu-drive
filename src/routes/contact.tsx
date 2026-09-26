import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/automotive/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Berizu Motors" }, { name: "description", content: "Contact Berizu Motors in Kisumu for vehicle enquiries." }, { property: "og:title", content: "Contact — Berizu Motors" }, { property: "og:description", content: "Contact Berizu Motors in Kisumu for vehicle enquiries." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <PageShell><section className="page-wrap min-h-screen pt-40"><p className="eyebrow">Kisumu, Kenya</p><h1 className="mt-4 font-display text-5xl font-semibold uppercase">Contact Berizu Motors</h1></section></PageShell>,
});