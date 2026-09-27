import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/automotive/SiteShell";
import { directionsHref, phoneHref, whatsappHref } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Berizu Motors" },
      { name: "description", content: "Contact Berizu Motors in Kisumu for vehicle enquiries, financing and viewings — WhatsApp, call or visit us." },
      { property: "og:title", content: "Contact — Berizu Motors" },
      { property: "og:description", content: "Contact Berizu Motors in Kisumu for vehicle enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="page-wrap min-h-screen pt-40 pb-24">
        <p className="eyebrow">Kisumu, Kenya</p>
        <h1 className="mt-4 font-display text-5xl font-semibold uppercase leading-tight md:text-7xl">
          Ready to find your next vehicle?
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Reach us on WhatsApp, call the showroom, or get directions to visit us in person.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Button asChild variant="accent" size="xl" className="h-20 flex-col gap-2">
            <a href={whatsappHref("Hello Berizu Motors, I have an enquiry.")} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp us
            </a>
          </Button>
          <Button asChild variant="outline" size="xl" className="h-20 flex-col gap-2">
            <a href={phoneHref}><Phone /> Call Berizu Motors</a>
          </Button>
          <Button asChild variant="outline" size="xl" className="h-20 flex-col gap-2">
            <a href={directionsHref} target="_blank" rel="noreferrer"><MapPin /> Get directions</a>
          </Button>
        </div>
        <div className="mt-16 border border-border p-8">
          <p className="eyebrow">Ask Berizu AI</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Not sure what to buy? Send us a WhatsApp message describing what you need — budget, body type, usage — and our team will match you with vehicles from our live inventory.
          </p>
          <Button asChild variant="secondary" size="lg" className="mt-6">
            <a href={whatsappHref("Hello Berizu AI, here is what I need in a vehicle: ")} target="_blank" rel="noreferrer">
              Start on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
