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
  "Well-maintained tractors and trailers supported by consistent maintenance practices at Great Lane Carriers.",
  ROUTES.fleetEquipment,
);

export default function FleetEquipmentPage() {
  return (
    <>
      <PageHero
        title="Modern, well-maintained equipment"
        subtitle="Tractors and trailers maintained to professional standards — because reliable freight starts with reliable equipment."
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "Fleet & Equipment" },
        ]}
      />
      <FleetShowcase items={fleetItems} showLink={false} />
      <FeatureGrid title="Fleet Support" features={fleetFeatures} columns={2} />
      <SplitContent
        title="Equipment That Works for Everyone"
        description="For drivers, that means comfortable cabs and equipment you can trust. For shippers, that means clean trailers, professional pickups, and reliable communication."
        bullets={[
          "Well-maintained equipment across the fleet",
          "Maintenance practices documented internally",
          "Professional appearance at every stop",
          "Ask our team for current equipment details",
        ]}
        imageSrc={siteImages.truck2}
        imageAlt={getStockImageAlt("truck2")}
        imageObjectPosition={getStockImageFocus("truck2")}
      />
      <SplitContent
        title="Scale You Can Rely On"
        description="Consistent capacity depends on organized operations, maintained assets, and teams that communicate clearly from pickup through delivery."
        bullets={[
          "Tractors and trailers maintained to company standards",
          "Operations built for regional and long-haul lanes",
          "Professional presentation at every customer touchpoint",
        ]}
        imagePosition="left"
        imageSrc={siteImages.fleetYard}
        imageAlt={getStockImageAlt("fleetYard")}
        imageObjectPosition={getStockImageFocus("fleetYard")}
      />
      <StatsRow stats={fleetStats} />
      <CtaBand
        title="Experience the difference"
        description="Well-maintained equipment supports great drivers and dependable freight service."
        primaryLabel="Apply to Drive"
        primaryHref={`${ROUTES.forDrivers}#apply`}
        secondaryLabel="Request Quote"
        secondaryHref={`${ROUTES.forShippers}#quote`}
      />
    </>
  );
}
