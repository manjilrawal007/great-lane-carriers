import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsRow } from "@/components/sections/StatsRow";
import { SplitContent } from "@/components/sections/SplitContent";
import { SafetyHighlights } from "@/components/sections/SafetyHighlights";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  fleetItems,
  homeFaqs,
  homeProcessSteps,
  homeStats,
  safetyHighlights,
} from "@/content/site-content";
import { ROUTES } from "@/lib/constants";
import {
  getStockImageAlt,
  getStockImageFocus,
  siteImages,
} from "@/lib/media";

export const metadata: Metadata = createPageMetadata(
  "Premium Trucking & Logistics",
  "Great Lane Carriers delivers reliable freight capacity and safety-first trucking. Apply to drive or request a freight quote today.",
  ROUTES.home,
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsRow stats={homeStats} />
      <SplitContent
        title="Capacity You Can Count On"
        description="Brokers and shippers trust Great Lane for consistent capacity, proactive communication, and compliance documentation on request."
        bullets={[
          "Reliable communication across core lanes",
          "Responsive dispatch with proactive updates",
          "Compliance documentation available on request",
          "Flexible spot and dedicated options",
        ]}
        linkLabel="Learn more for shippers"
        linkHref={ROUTES.forShippers}
        imageSrc={siteImages.fleetYard}
        imageAlt={getStockImageAlt("fleetYard")}
        imageObjectPosition={getStockImageFocus("fleetYard")}
      />
      <SplitContent
        title="Drive With Respect"
        description="We're building a team of professional CDL drivers who take pride in their work. Recruiting conversations focus on fit, lanes, and professionalism."
        bullets={[
          "Well-maintained tractors with driver amenities",
          "Compensation discussed during recruiting",
          "Schedule preferences reviewed during hiring",
          "Safety culture — not just a poster",
        ]}
        linkLabel="View driver opportunities"
        linkHref={ROUTES.forDrivers}
        imagePosition="left"
        dark
        imageSrc={siteImages.driverAlt}
        imageAlt={getStockImageAlt("driverAlt")}
        imageObjectPosition={getStockImageFocus("driverAlt")}
      />
      <SafetyHighlights highlights={safetyHighlights} />
      <FleetShowcase items={fleetItems.slice(0, 4)} />
      <ProcessSteps
        title="How Freight Moves With Great Lane"
        description="A straightforward process built on communication and accountability."
        steps={homeProcessSteps}
      />
      <CtaBand
        title="Ready to haul or ready to ship?"
        description="Whether you're moving freight or looking for your next driving opportunity, we're here to help."
        primaryLabel="Apply to Drive"
        primaryHref={`${ROUTES.forDrivers}#apply`}
        secondaryLabel="Request a Callback"
        secondaryHref={`${ROUTES.contact}#callback`}
      />
      <FaqSection faqs={homeFaqs} />
    </>
  );
}
