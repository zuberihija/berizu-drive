import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/automotive/SiteShell";
import {
  AiSection,
  BrandSection,
  ContactCTA,
  FeaturedVehicles,
  FinanceCTA,
  VehicleFilters,
  WhyBerizu,
} from "@/components/automotive/VehicleSections";
import { getVehicles } from "@/lib/woocommerce.functions";
import heroImage from "@/assets/berizu-hero.jpg";

// Home inherits title/description/og/twitter from __root.tsx; no og:image so
// hosting can inject the project social preview.
export const Route = createFileRoute("/")({
  loader: () => getVehicles({ data: { limit: 24 } }),
  component: HomePage,
});

function HomePage() {
  const { vehicles, error } = Route.useLoaderData();

  return (
    <PageShell>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Premium vehicle at Berizu Motors"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20" />
        <div className="page-wrap relative w-full pb-24 pt-40">
          <p className="eyebrow">Berizu Motors — Kisumu, Kenya</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-tight md:text-8xl">
            Drive something exceptional.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            Premium vehicles. Flexible financing. Trusted service.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="xl">
              <Link to="/vehicles">
                Explore vehicles <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/financing">Get financed</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeaturedVehicles vehicles={vehicles} error={error} />
      <VehicleFilters vehicles={vehicles} />
      <FinanceCTA />
      <BrandSection vehicles={vehicles} />
      <AiSection />
      <WhyBerizu />
      <ContactCTA />
    </PageShell>
  );
}
