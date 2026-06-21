import Link from "next/link";
import { company } from "@/content/site-content";
import { hasPhone } from "@/lib/company";
import { PhoneContactLink } from "@/components/ui/PhoneContactLink";

export function DriverRecruitingCtas() {
  return (
    <section className="border-b border-silver-300 bg-white py-8">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-navy-900">
              Ready to join {company.brand}?
            </h2>
            <p className="mt-2 max-w-xl text-charcoal-700">
              Apply online from Louisville or anywhere on our lanes. Our recruiting
              team reviews every application personally.
            </p>
            {hasPhone() && (
              <PhoneContactLink
                label="Prefer to talk first?"
                className="mt-3"
              />
            )}
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="#apply"
              className="focus-ring inline-flex items-center justify-center rounded-lg bg-accent-500 px-8 py-3 font-medium text-white transition-colors hover:bg-accent-600"
            >
              Apply Now
            </Link>
            <Link
              href="#callback"
              className="focus-ring inline-flex items-center justify-center rounded-lg border-2 border-navy-900 px-8 py-3 font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              Request a Call Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
