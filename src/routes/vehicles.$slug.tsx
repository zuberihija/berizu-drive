import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/automotive/SiteShell";
import { VehicleGallery } from "@/components/automotive/VehicleGallery";
import { formatPrice } from "@/components/automotive/VehicleCard";
import { SimilarVehicles, VehicleSpecs, WhatsAppCTA } from "@/components/automotive/VehicleSections";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { getVehicleBySlug } from "@/lib/woocommerce.functions";

export const Route = createFileRoute("/vehicles/$slug")({
  loader: ({ params }) => getVehicleBySlug({ data: { slug: params.slug } }),
  head: ({ loaderData }) => {
    const name = loaderData?.vehicle?.name;
    return {
      meta: [
        { title: name ? `${name} — Berizu Motors` : "Vehicle — Berizu Motors" },
        { name: "description", content: name ? `View the ${name} at Berizu Motors in Kisumu. Enquire on WhatsApp, request a quotation or book a viewing.` : "View vehicle details and enquire with Berizu Motors." },
        { property: "og:title", content: name ? `${name} — Berizu Motors` : "Vehicle — Berizu Motors" },
        { property: "og:description", content: "View vehicle details and enquire with Berizu Motors." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: VehiclePage,
});

function VehiclePage() {
  const { vehicle, similar, error } = Route.useLoaderData();

  if (!vehicle) {
    return (
      <PageShell>
        <section className="page-wrap min-h-screen pt-40">
          <p className="eyebrow">Vehicle details</p>
          <h1 className="mt-4 font-display text-4xl font-semibold uppercase md:text-6xl">Vehicle unavailable</h1>
          <p className="mt-5 max-w-md text-muted-foreground">{error || "This vehicle may have been sold or removed from our inventory."}</p>
          <Button asChild variant="accent" size="lg" className="mt-8">
            <Link to="/vehicles">Browse all vehicles</Link>
          </Button>
        </section>
      </PageShell>
    );
  }

  const quoteMessage = `Hello Berizu Motors, I would like a quotation for the ${vehicle.name} (${formatPrice(vehicle.price)}).`;
  const viewingMessage = `Hello Berizu Motors, I would like to book a viewing for the ${vehicle.name}.`;

  return (
    <PageShell>
      <section className="page-wrap grid gap-12 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:pt-40">
        <VehicleGallery vehicle={vehicle} />
        <div>
          <p className="eyebrow">{vehicle.categories[0]?.name || "Vehicle"}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold uppercase leading-tight md:text-5xl">{vehicle.name}</h1>
          <p className="mt-5 font-display text-3xl font-bold text-primary">{formatPrice(vehicle.price)}</p>
          {vehicle.shortDescription && <p className="mt-6 leading-7 text-muted-foreground">{vehicle.shortDescription}</p>}

          <div className="mt-8 space-y-3">
            <WhatsAppCTA vehicleName={`${vehicle.name} (${formatPrice(vehicle.price)})`} />
            <div className="grid grid-cols-2 gap-3">
              <Button asChild variant="outline" size="lg">
                <a href={phoneHref}><Phone /> Call us</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={whatsappHref(quoteMessage)} target="_blank" rel="noreferrer"><FileText /> Quotation</a>
              </Button>
            </div>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href={whatsappHref(viewingMessage)} target="_blank" rel="noreferrer"><CalendarCheck /> Book a viewing</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="w-full">
              <Link to="/financing">Finance this vehicle — up to 90% financing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="page-wrap section-space">
        <h2 className="mb-8 font-display text-2xl font-semibold uppercase md:text-3xl">Specifications</h2>
        <VehicleSpecs vehicle={vehicle} />
        {vehicle.description && (
          <div className="mt-12 max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-semibold uppercase md:text-3xl">About this vehicle</h2>
            <p className="leading-7 text-muted-foreground">{vehicle.description}</p>
          </div>
        )}
      </section>

      {similar.length > 0 && <SimilarVehicles vehicles={similar} />}
    </PageShell>
  );
}
