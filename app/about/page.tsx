import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { SplitContent } from "@/components/sections/SplitContent";
import { StatsRow } from "@/components/sections/StatsRow";
import { TeamSection } from "@/components/sections/TeamSection";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { TrustBar } from "@/components/sections/TrustBar";
import { CtaBand } from "@/components/sections/CtaBand";
import { PhoneContactLink } from "@/components/ui/PhoneContactLink";
import {
  aboutStats,
  company,
  serviceRegions,
  teamMembers,
} from "@/content/site-content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "About Us",
  "Grewal Trucking Inc. DBA Great Lane Carriers — a Louisville-based carrier founded in 2011, operating across the Midwest, South, and Southeast.",
  ROUTES.about,
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Louisville roots. Safety-first freight."
        subtitle={`${company.brand} is the operating brand of ${company.legalName} — a family-founded carrier based at ${company.address.full}.`}
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "About" },
        ]}
      />
      <SplitContent
        title="Our Mission"
        description={`To move freight reliably across the ${company.serviceRegions.join(", ")} through safety-first operations, maintained equipment, and dispatch that picks up the phone.`}
        bullets={[
          "Integrity in every shipper and driver relationship",
          "Safety treated as a daily operating standard",
          "Clear communication from Louisville dispatch",
          "Respect for the professionals behind the wheel",
        ]}
      />
      <section className="border-b border-silver-300 bg-white py-6">
        <div className="container-site max-w-3xl text-center md:text-left">
          <p className="text-sm text-charcoal-700 sm:text-base">
            <span className="font-semibold text-navy-900">{company.legalDisplayLine}.</span>{" "}
            {company.legalName} was founded in {company.foundedYear} and has{" "}
            {company.yearsInBusiness} in operation. Great Lane Carriers is the
            customer-facing brand for that established Louisville carrier.
          </p>
        </div>
      </section>
      <StatsRow stats={aboutStats} />
      <TeamSection
        title="Who We Are"
        description="Family-led operations from our Louisville office — not a faceless national brand."
        members={teamMembers}
      />
      <ServiceAreaMap regions={serviceRegions} />
      <TrustBar />
      <CtaBand
        title="Join the team or partner with us"
        description={
          <>
            Whether you haul freight or need capacity on Midwest and Southeast
            lanes, our Louisville team is ready to talk.{" "}
            <PhoneContactLink
              label=""
              className="mt-2 block text-silver-200"
              linkClassName="text-brand-gold hover:text-accent-muted"
            />
          </>
        }
        primaryLabel="Apply to Drive"
        primaryHref={`${ROUTES.forDrivers}#apply`}
        secondaryLabel="Get a Quote"
        secondaryHref={`${ROUTES.forShippers}#quote`}
      />
    </>
  );
}
