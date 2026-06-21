import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { DriverRecruitingCtas } from "@/components/sections/DriverRecruitingCtas";
import { DriverPhoneBanner } from "@/components/ui/PhoneContactLink";
import { TalkToRecruiting } from "@/components/sections/TalkToRecruiting";
import { DriverBenefits } from "@/components/sections/DriverBenefits";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { DriverApplicationForm } from "@/components/forms/DriverApplicationForm";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { Card } from "@/components/ui/Card";
import { company, driverFaqs, driverFeatures, driverProcessSteps, driverRequirements } from "@/content/site-content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Drive With Great Lane",
  "Apply to drive with Great Lane Carriers from Louisville, KY — safety-focused operations, responsive dispatch, and a straightforward recruiting process. Call (502) 322-6705 with questions.",
  ROUTES.forDrivers,
);

export default function ForDriversPage() {
  return (
    <>
      <PageHero
        title="Drive with a Louisville carrier that respects your time"
        subtitle={`${company.brand}, operated by ${company.legalName}, is hiring qualified CDL drivers who value professionalism, safety, and clear communication from dispatch.`}
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "For Drivers" },
        ]}
      />
      <DriverPhoneBanner />
      <DriverRecruitingCtas />
      <TalkToRecruiting />
      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <DriverApplicationForm />
        </div>
      </section>
      <section className="section-padding bg-silver-100">
        <div className="container-site max-w-xl">
          <CallbackForm
            id="callback"
            compact
            compactTitle="Request a Recruiting Call Back"
            defaultReason="Drive for us"
          />
        </div>
      </section>
      <DriverBenefits
        title="Why Drive With Us"
        description="A professional environment built on safety, communication, and respect for drivers."
        benefits={driverFeatures}
      />
      <ProcessSteps
        title="Your Path to the Road"
        steps={driverProcessSteps}
      />
      <section className="section-padding bg-silver-100">
        <div className="container-site">
          <Card className="max-w-3xl">
            <h2 className="text-xl font-semibold text-navy-900">Driver Requirements</h2>
            <ul className="mt-6 space-y-3">
              {driverRequirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-charcoal-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {req}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
      <FaqSection title="Driver FAQ" faqs={driverFaqs} />
      <CtaBand
        title="Ready to join the team?"
        description="Apply now or check back for our driver portal launching soon."
        primaryLabel="Apply Now"
        primaryHref="#apply"
        secondaryLabel="Request a Call Back"
        secondaryHref="#callback"
      />
    </>
  );
}
