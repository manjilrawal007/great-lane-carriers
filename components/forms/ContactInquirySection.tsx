"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ContactForm } from "@/components/forms/ContactForm";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { FreightQuoteForm } from "@/components/forms/FreightQuoteForm";
import { FormPrivacyLink } from "@/components/forms/FormPrivacyLink";
import { ROUTES } from "@/lib/constants";

const inquiryTypes = [
  { id: "general", label: "General Message" },
  { id: "callback", label: "Request Callback" },
  { id: "quote", label: "Freight Quote" },
  { id: "driver", label: "Driver Application" },
] as const;

type InquiryId = (typeof inquiryTypes)[number]["id"];

export function ContactInquirySection() {
  const [active, setActive] = useState<InquiryId>("general");

  return (
    <section className="section-padding bg-silver-100">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-navy-900">
            How can we help?
          </h2>
          <p className="mt-2 text-center text-charcoal-700">
            Choose an inquiry type to get started.
          </p>

          <div
            className="mt-8 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Inquiry type"
          >
            {inquiryTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                role="tab"
                aria-selected={active === type.id}
                className={cn(
                  "focus-ring rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  active === type.id
                    ? "bg-navy-900 text-white"
                    : "bg-white text-charcoal-700 hover:bg-silver-100",
                )}
                onClick={() => setActive(type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="mt-10" role="tabpanel">
            {active === "general" && <ContactForm />}
            {active === "callback" && <CallbackForm id="callback" />}
            {active === "quote" && <FreightQuoteForm />}
            {active === "driver" && (
              <div className="rounded-xl border border-silver-300 bg-white p-8 text-center shadow-sm">
                <h3 className="text-lg font-semibold text-navy-900">
                  Apply to Drive
                </h3>
                <p className="mt-2 text-charcoal-700">
                  Complete the full driver application on our For Drivers page,
                  including CDL details and consent acknowledgments.
                </p>
                <Link
                  href={`${ROUTES.forDrivers}#apply`}
                  className="focus-ring mt-6 inline-flex rounded-lg bg-accent-500 px-6 py-3 font-medium text-white hover:bg-accent-600"
                >
                  Go to Driver Application
                </Link>
              </div>
            )}
          </div>

          <p className="mt-8 text-center text-xs text-charcoal-700">
            How we handle form information: <FormPrivacyLink />.
          </p>
        </div>
      </div>
    </section>
  );
}
