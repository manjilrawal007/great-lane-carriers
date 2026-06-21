import type { Metadata } from "next";
import { createPageMetadata } from "@/components/seo/PageMetadata";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { ContactInquirySection } from "@/components/forms/ContactInquirySection";
import { PhoneContactLink } from "@/components/ui/PhoneContactLink";
import { contactCards } from "@/content/site-content";
import { hasPhone } from "@/lib/company";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Contact Us",
  "Call Great Lane Carriers at (502) 322-6705 for dispatch, recruiting, accounting, or general inquiries — or send a message through our contact forms.",
  ROUTES.contact,
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Reach our Louisville team by phone"
        subtitle="Call us for dispatch, recruiting, accounting, or general inquiries — or send a message using the forms below."
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: "Contact" },
        ]}
      />
      {hasPhone() && (
        <section className="border-b border-brand-gold/30 bg-brand-navy text-white">
          <div className="container-site py-4 text-center md:text-left">
            <PhoneContactLink
              label="Main line:"
              className="text-base text-silver-200"
              linkClassName="text-brand-gold hover:text-accent-muted"
            />
          </div>
        </section>
      )}
      {contactCards.length > 0 && (
        <section className="section-padding">
          <div className="container-site">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contactCards.map((card) => (
                <Card key={card.title}>
                  <h3 className="font-semibold text-navy-900">{card.title}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-2 block text-accent-600 hover:text-accent-500"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-charcoal-700">{card.value}</p>
                  )}
                  <p className="mt-2 text-sm text-charcoal-700">{card.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      <ContactInquirySection />
    </>
  );
}
