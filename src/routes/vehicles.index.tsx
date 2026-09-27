import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/automotive/SiteShell";
import { ContactCTA, VehicleFilters } from "@/components/automotive/VehicleSections";
import { getVehicles } from "@/lib/woocommerce.functions";

export const Route = createFileRoute("/vehicles/")({
  validateSearch: (search: Record<string, unknown>): { brand?: string } => ({
    ...(typeof search["brand"] === "string" ? { brand: search["brand"] } : {}),
  }),
  head: () => ({
    meta: [
      { title: "Vehicles — Berizu Motors" },
      { name: "description", content: "Explore premium vehicles available from Berizu Motors in Kisumu — SUVs, sedans, pickups and trucks with flexible financing." },
      { property: "og:title", content: "Vehicles — Berizu Motors" },
      { property: "og:description", content: "Explore premium vehicles available from Berizu Motors in Kisumu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: () => getVehicles({ data: { limit: 60 } }),
  component: VehiclesPage,
});

function VehiclesPage() {
  const { vehicles, error } = Route.useLoaderData();
  const { brand } = Route.useSearch();
  const visible = brand ? vehicles.filter((v) => v.name.toLowerCase().startsWith(brand.toLowerCase())) : vehicles;

  return (
    <PageShell>
      <section className="page-wrap pt-40">
        <p className="eyebrow">Live inventory</p>
        <h1 className="mt-4 font-display text-5xl font-semibold uppercase leading-tight md:text-7xl">
          {brand ? `${brand} vehicles` : "Vehicles"}
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Every vehicle below is live from our showroom inventory. Enquire on WhatsApp or call to book a viewing.
        </p>
        {error && <p className="mt-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground">{error}</p>}
      </section>
      <VehicleFilters vehicles={visible} />
      <ContactCTA />
    </PageShell>
  );
}
