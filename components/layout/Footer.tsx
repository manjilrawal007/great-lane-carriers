import Link from "next/link";
import { company, footerLinks } from "@/content/site-content";
import {
  hasAddress,
  hasAuthorityNumbers,
  hasDispatchEmail,
  hasPhone,
} from "@/lib/company";
import { ROUTES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="lane-stripe" aria-hidden="true" />
      <div className="container-site section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">Great Lane Carriers</p>
            <p className="mt-1 text-sm text-silver-300">
              {company.legalDisplayLine}
            </p>
            {hasAuthorityNumbers() && (
              <p className="mt-4 text-sm text-silver-300">
                {company.dotNumber} · {company.mcNumber}
              </p>
            )}
            {hasAddress() ? (
              <p className="mt-2 text-sm text-silver-300">{company.address!.full}</p>
            ) : (
              <p className="mt-2 text-sm text-silver-300">{company.location}</p>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded text-sm text-silver-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded text-sm text-silver-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-silver-300">
              {hasPhone() && (
                <li>
                  <span className="text-silver-400">Phone · </span>
                  <a href={company.phoneHref!} className="hover:text-white">
                    {company.phone}
                  </a>
                </li>
              )}
              {hasDispatchEmail() && (
                <li>
                  <a href={`mailto:${company.dispatchEmail}`} className="hover:text-white">
                    {company.dispatchEmail}
                  </a>
                </li>
              )}
              {!hasPhone() && !hasDispatchEmail() && (
                <li>Use the Contact page forms to reach our team.</li>
              )}
              <li>{company.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 md:flex-row">
          <p className="text-sm text-silver-300">
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href={ROUTES.privacy}
              className="text-silver-300 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href={ROUTES.portal}
              className="text-accent-500 hover:text-accent-muted"
            >
              Driver Portal →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
