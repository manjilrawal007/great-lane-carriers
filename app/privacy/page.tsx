import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { company } from "@/content/site-content";
import { hasDispatchEmail, hasPhone, hasRecruitingEmail } from "@/lib/company";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Privacy & Applicant Data",
  "How Great Lane Carriers collects and uses information submitted through website forms.",
  ROUTES.privacy,
);

const sections = [
  {
    title: "What we collect",
    body: [
      "When you use our website forms, we may collect information you choose to provide, such as your name, phone number, email address, company name, and the content of your message.",
      "Driver applications may also include CDL details, experience, endorsements, lane preferences, and other information relevant to recruiting.",
    ],
  },
  {
    title: "Why we collect it",
    body: [
      "We use form information to respond to inquiries, provide freight quotes, schedule callbacks, and review driver applications.",
      "For applicants, information helps our recruiting team evaluate qualifications, follow up about opportunities, and move qualified candidates through the hiring process.",
    ],
  },
  {
    title: "Who receives it internally",
    body: [
      "Submissions are routed to the appropriate team at Grewal Trucking Inc. (DBA Great Lane Carriers), such as dispatch, recruiting, accounting, or safety, depending on the form you use.",
      "Only team members who need the information to handle your request or application should access it.",
    ],
  },
  {
    title: "Correction or removal requests",
    body: [
      "If you submitted information in error or would like us to update or remove details you provided through a form, contact us using the information on our Contact page.",
      "We will review reasonable requests and respond as promptly as we can.",
    ],
  },
  {
    title: "Sensitive applicant information",
    body: [
      "Please do not submit sensitive personal information through our website forms unless our recruiting team specifically asks for it.",
      "This includes items such as Social Security numbers, full motor vehicle records, medical records, or financial account details. Our recruiting team will explain when additional documentation is needed and how to provide it securely.",
    ],
  },
];

export default function PrivacyPage() {
  const correctionContacts = [
    hasRecruitingEmail() ? company.recruitingEmail : null,
    hasDispatchEmail() ? company.dispatchEmail : null,
  ].filter(Boolean);

  const showPhoneContact = hasPhone() && correctionContacts.length === 0;

  return (
    <>
      <PageHero
        title="Privacy & applicant data"
        subtitle="A straightforward overview of how we handle information submitted through our website forms."
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "Privacy" },
        ]}
      />
      <section className="section-padding">
        <div className="container-site max-w-3xl space-y-8">
          <p className="text-lg text-charcoal-700">
            {company.brand}, operated by {company.legalName}, respects your privacy.
            This page explains how we use information collected through forms on
            this website. It is intended to be clear and practical — not a full
            legal policy.
          </p>

          {sections.map((section) => (
            <Card key={section.title}>
              <h2 className="text-xl font-semibold text-navy-900">{section.title}</h2>
              <div className="mt-4 space-y-3 text-charcoal-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}

          <Card>
            <h2 className="text-xl font-semibold text-navy-900">Questions</h2>
            <p className="mt-4 text-charcoal-700">
              For privacy-related questions or correction/removal requests, reach
              us through our{" "}
              <Link
                href={ROUTES.contact}
                className="font-medium text-accent-600 hover:text-accent-500"
              >
                Contact page
              </Link>
              {correctionContacts.length > 0 && (
                <>
                  {" "}
                  or email{" "}
                  {correctionContacts.map((email, index) => (
                    <span key={email}>
                      {index > 0 && " or "}
                      <a
                        href={`mailto:${email}`}
                        className="font-medium text-accent-600 hover:text-accent-500"
                      >
                        {email}
                      </a>
                    </span>
                  ))}
                </>
              )}
              {showPhoneContact && (
                <>
                  {" "}
                  or call{" "}
                  <a
                    href={company.phoneHref!}
                    className="font-medium text-accent-600 hover:text-accent-500"
                  >
                    {company.phone}
                  </a>
                </>
              )}
              .
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
