import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { SplitContent } from "@/components/sections/SplitContent";
import { StatsRow } from "@/components/sections/StatsRow";
import { TeamSection } from "@/components/sections/TeamSection";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  aboutStats,
  company,
  serviceRegions,
  teamMembers,
} from "@/content/site-content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Great Lane Carriers, operated by Grewal Trucking Inc. — a safety-first trucking company built on integrity and reliability.",
  ROUTES.about,
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built on integrity. Driven by safety."
        subtitle={`${company.brand} is operated by ${company.legalName} — a family-founded carrier committed to professional freight solutions.`}
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "About" },
        ]}
      />
      <SplitContent
        title="Our Mission"
        description="To deliver reliable freight capacity through safety-first operations, modern equipment, and a team culture that values every driver and every load."
        bullets={[
          "Integrity in every business relationship",
          "Safety as a non-negotiable standard",
          "Reliability that shippers can plan around",
          "Respect for the professionals behind the wheel",
        ]}
      />
      <StatsRow stats={aboutStats} />
      <TeamSection members={teamMembers} />
      <ServiceAreaMap regions={serviceRegions} />
      <TrustBar />
      <CtaBand
        title="Join the team or partner with us"
        description="Whether you're hauling freight or moving it, Great Lane is ready to work with you."
        primaryLabel="Apply to Drive"
        primaryHref={`${ROUTES.forDrivers}#apply`}
        secondaryLabel="Get a Quote"
        secondaryHref={`${ROUTES.forShippers}#quote`}
      />
    </>
  );
}
