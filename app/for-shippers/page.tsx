import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { ShipperValueProps } from "@/components/sections/ShipperValueProps";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ComplianceBadges } from "@/components/sections/ComplianceBadges";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { CtaBand } from "@/components/sections/CtaBand";
import { FreightQuoteForm } from "@/components/forms/FreightQuoteForm";
import { CallbackForm } from "@/components/forms/CallbackForm";
import {
  complianceBadges,
  company,
  serviceRegions,
  shipperFeatures,
  shipperProcessSteps,
} from "@/content/site-content";
import { hasPhone } from "@/lib/company";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "For Shippers & Brokers",
  "Reliable freight capacity, proactive communication, and compliance documentation. Request a quote from Great Lane Carriers.",
  ROUTES.forShippers,
);

export default function ForShippersPage() {
  return (
    <>
      <PageHero
        title="Capacity you can count on"
        subtitle="Professional trucking services for brokers and shippers who demand reliability, transparency, and safety."
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "For Shippers" },
        ]}
      />
      <ShipperValueProps values={shipperFeatures} />
      <ProcessSteps
        title="From Quote to Delivery"
        steps={shipperProcessSteps}
      />
      <ComplianceBadges badges={complianceBadges} />
      <ServiceAreaMap regions={serviceRegions} />
      <section className="section-padding bg-silver-100">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <FreightQuoteForm />
          <CallbackForm compact />
        </div>
      </section>
      <CtaBand
        title="Talk to dispatch"
        description="Have a lane that needs consistent coverage? Ask our team about current availability."
        primaryLabel={hasPhone() ? "Call Dispatch" : "Contact Dispatch"}
        primaryHref={
          hasPhone() ? company.phoneHref! : `${ROUTES.contact}#contact-form`
        }
        secondaryLabel="Request Quote"
        secondaryHref="#quote"
      />
    </>
  );
}
