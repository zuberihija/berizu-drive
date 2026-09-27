import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/automotive/SiteShell";
import { BrandSection, ContactCTA } from "@/components/automotive/VehicleSections";
import { getVehicles } from "@/lib/woocommerce.functions";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Vehicle Brands — Berizu Motors" },
      { name: "description", content: "Explore the vehicle brands available at Berizu Motors in Kisumu, drawn live from our current inventory." },
      { property: "og:title", content: "Vehicle Brands — Berizu Motors" },
      { property: "og:description", content: "Explore the vehicle brands available at Berizu Motors in Kisumu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: () => getVehicles({ data: { limit: 60 } }),
  component: BrandsPage,
});

function BrandsPage() {
  const { vehicles } = Route.useLoaderData();
  return (
    <PageShell>
      <section className="page-wrap pt-40">
        <p className="eyebrow">Our marques</p>
        <h1 className="mt-4 font-display text-5xl font-semibold uppercase leading-tight md:text-7xl">Brands</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          The makes we stock are drawn directly from our live inventory — including Jetour, FAW and more as they arrive.
        </p>
      </section>
      <BrandSection vehicles={vehicles} />
      <ContactCTA />
    </PageShell>
  );
}
