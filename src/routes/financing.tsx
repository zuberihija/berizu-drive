import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Banknote, FileText, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/automotive/SiteShell";
import { ContactCTA, SectionHeading } from "@/components/automotive/VehicleSections";
import { whatsappHref } from "@/lib/contact";

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: "Vehicle Financing — Berizu Motors" },
      { name: "description", content: "Finance your vehicle through our banking partners with financing options of up to 90% at Berizu Motors, Kisumu." },
      { property: "og:title", content: "Vehicle Financing — Berizu Motors" },
      { property: "og:description", content: "Finance your vehicle through our banking partners with financing options of up to 90%." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FinancingPage,
});

const steps = [
  [Banknote, "Choose your vehicle", "Pick any vehicle from our live inventory and tell us your budget."],
  [FileTextIcon, "Share your details", "We guide you through a simple application with our banking partners."],
  [BadgeCheck, "Get approved", "Financing options of up to 90% with clear, transparent terms."],
  [Handshake, "Drive away", "Complete handover and enjoy support that continues beyond the sale."],
] as const;

import { FileText as FileTextIcon } from "lucide-react";

function FinancingPage() {
  return (
    <PageShell>
      <section className="page-wrap pt-40">
        <p className="eyebrow">Berizu financing</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold uppercase leading-[1.02] md:text-7xl">
          Get behind the wheel sooner.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Finance your vehicle through our banking partners with financing options of up to 90%.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent" size="xl">
            <a href={whatsappHref("Hello Berizu Motors, I would like to check my finance options.")} target="_blank" rel="noreferrer">
              Check finance options <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link to="/vehicles">Browse vehicles</Link>
          </Button>
        </div>
      </section>

      <section className="section-space">
        <div className="page-wrap">
          <SectionHeading eyebrow="How it works" title="Four steps to your keys" />
          <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, text], i) => (
              <div key={title} className="border-b border-r border-border p-7">
                <span className="mb-12 block font-mono text-xs text-primary">0{i + 1}</span>
                <Icon className="mb-5 size-6 text-primary" />
                <h3 className="font-display text-lg font-semibold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageShell>
  );
}
