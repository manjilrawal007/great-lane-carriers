import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { SplitContent } from "@/components/sections/SplitContent";
import { StatsRow } from "@/components/sections/StatsRow";
import { CtaBand } from "@/components/sections/CtaBand";
import { fleetFeatures, fleetItems, fleetStats } from "@/content/site-content";
import { ROUTES } from "@/lib/constants";
import {
  getStockImageAlt,
  getStockImageFocus,
  siteImages,
} from "@/lib/media";

export const metadata: Metadata = createPageMetadata(
  "Fleet & Equipment",
  "Ask Great Lane Carriers about current tractors and trailers — equipment maintained to company standards from our Louisville base.",
  ROUTES.fleetEquipment,
);

export default function FleetEquipmentPage() {
  return (
    <>
      <PageHero
        title="Equipment maintained to company standards"
        subtitle="Tractors and trailers are maintained internally — ask our team for current equipment types, specs, and availability on your lane."
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "Fleet & Equipment" },
        ]}
      />
      <FleetShowcase
        title="Equipment Overview"
        description="Representative equipment categories — availability and specs confirmed when you book. Ask our team for current equipment details."
        items={fleetItems}
        showLink={false}
      />
      <FeatureGrid title="Fleet Support" features={fleetFeatures} columns={2} />
      <SplitContent
        title="Built for Drivers and Shippers"
        description="Drivers need equipment they can rely on. Shippers need clean trailers and clear communication. We maintain both sides of that relationship from Louisville."
        bullets={[
          "Equipment maintained to internal company standards",
          "Maintenance practices documented internally",
          "Professional presentation at pickup and delivery",
          "Ask our team for current equipment details",
        ]}
        imageSrc={siteImages.truck2}
        imageAlt={getStockImageAlt("truck2")}
        imageObjectPosition={getStockImageFocus("truck2")}
      />
      <SplitContent
        title="Capacity You Can Confirm"
        description="Before we commit to a load, we confirm driver assignment and equipment based on what is available — no assumptions about fleet size or trailer type."
        bullets={[
          "Equipment details confirmed at booking",
          "Operations built for regional and long-haul lanes",
          "Dispatch reachable by phone for load questions",
        ]}
        imagePosition="left"
        imageSrc={siteImages.fleetYard}
        imageAlt={getStockImageAlt("fleetYard")}
        imageObjectPosition={getStockImageFocus("fleetYard")}
      />
      <StatsRow stats={fleetStats} />
      <CtaBand
        title="Need equipment details for a load?"
        description="Call or message our team to confirm tractor type, trailer configuration, and availability before you book."
        primaryLabel="Contact Us"
        primaryHref={ROUTES.contact}
        secondaryLabel="Request Quote"
        secondaryHref={`${ROUTES.forShippers}#quote`}
      />
    </>
  );
}
