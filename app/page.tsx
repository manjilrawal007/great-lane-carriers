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
  "Louisville Trucking & Freight",
  "Great Lane Carriers — Grewal Trucking Inc. DBA — moves freight across the Midwest, South, and Southeast from Louisville, KY. Call (502) 322-6705 or apply to drive.",
  ROUTES.home,
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsRow stats={homeStats} />
      <SplitContent
        title="Louisville dispatch. Midwest and Southeast lanes."
        description="Brokers and shippers work with Great Lane for responsive capacity out of Louisville — with proactive updates and compliance paperwork available on request."
        bullets={[
          "Midwest, South, and Southeast lane coverage",
          "Dispatch you can reach by phone",
          "Compliance documentation available on request",
          "Spot and recurring freight discussed per load",
        ]}
        linkLabel="Learn more for shippers"
        linkHref={ROUTES.forShippers}
        imageSrc={siteImages.fleetYard}
        imageAlt={getStockImageAlt("fleetYard")}
        imageObjectPosition={getStockImageFocus("fleetYard")}
      />
      <SplitContent
        title="Drive for a carrier that picks up the phone"
        description="We recruit CDL-A drivers who value safety and straight talk. Pay, lanes, and home time are discussed during recruiting — not promised upfront on a website."
        bullets={[
          "Company-maintained equipment — details confirmed in recruiting",
          "Compensation discussed during the hiring process",
          "Schedule preferences reviewed when you apply",
          "Safety culture backed by daily operating practices",
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
        description="Call our Louisville team or apply online — we respond to every serious inquiry."
        primaryLabel="Apply to Drive"
        primaryHref={`${ROUTES.forDrivers}#apply`}
        secondaryLabel="Request a Callback"
        secondaryHref={`${ROUTES.contact}#callback`}
      />
      <FaqSection faqs={homeFaqs} />
    </>
  );
}
