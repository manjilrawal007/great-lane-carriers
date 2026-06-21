import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { SafetyHighlights } from "@/components/sections/SafetyHighlights";
import { ComplianceBadges } from "@/components/sections/ComplianceBadges";
import { SplitContent } from "@/components/sections/SplitContent";
import { StatsRow } from "@/components/sections/StatsRow";
import { CtaBand } from "@/components/sections/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  complianceBadges,
  safetyFaqs,
  safetyHighlights,
  safetyStats,
} from "@/content/site-content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Safety & Compliance",
  "Safety-first operations at Great Lane Carriers. DOT compliance, driver training, and rigorous maintenance standards.",
  ROUTES.safetyCompliance,
);

export default function SafetyCompliancePage() {
  return (
    <>
      <PageHero
        title="Safety isn't a slogan — it's how we operate"
        subtitle="Every load, every mile, every decision is guided by our commitment to protecting drivers, freight, and the public."
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "Safety & Compliance" },
        ]}
      />
      <SafetyHighlights
        title="Our Safety Program"
        highlights={safetyHighlights}
        showLink={false}
      />
      <ComplianceBadges badges={complianceBadges} />
      <SplitContent
        title="Preventive Maintenance Program"
        description="Our shop team follows scheduled maintenance intervals for every tractor and trailer. Drivers complete pre-trip and post-trip inspections before every run — no exceptions."
        bullets={[
          "Scheduled service intervals for tractors and trailers",
          "Documented maintenance practices",
          "Responsive roadside assistance",
          "Zero tolerance for out-of-service violations",
        ]}
      />
      <SplitContent
        title="Driver Safety Culture"
        description="Safety meetings, defensive driving training, and open communication channels ensure every driver knows they can report concerns without retaliation."
        bullets={[
          "Monthly safety briefings",
          "HOS compliance monitoring",
          "Drug & alcohol testing program",
          "Recognition for safe driving milestones",
        ]}
        imagePosition="left"
        dark
      />
      <StatsRow stats={safetyStats} dark />
      <section className="section-padding bg-silver-100">
        <div className="container-site">
          <SectionHeading
            title="Policies Overview"
            description="Public-safe summaries of our core safety policies."
            align="center"
            className="mb-12"
          />
          <div className="mx-auto max-w-3xl">
            <Accordion items={safetyFaqs} />
          </div>
        </div>
      </section>
      <CtaBand
        title="Need compliance documentation?"
        description="Contact our dispatch or safety team for certificates of insurance, authority, and W-9."
        primaryLabel="Contact Dispatch"
        primaryHref={`${ROUTES.contact}#contact-form`}
        secondaryLabel="Request Callback"
        secondaryHref={`${ROUTES.contact}#callback`}
      />
    </>
  );
}
