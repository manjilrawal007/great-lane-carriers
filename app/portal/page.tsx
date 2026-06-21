import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { LogoMark } from "@/components/layout/LogoMark";
import { PortalNotifyForm } from "@/components/forms/PortalNotifyForm";
import { portalFeatures } from "@/content/site-content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Driver Portal — Coming Soon",
  description:
    "The Great Lane Carriers driver portal is launching soon. Sign up to be notified.",
  robots: { index: false, follow: true },
};

export default function PortalPage() {
  return (
    <div className="min-h-[80vh] bg-silver-100">
      <div className="container-site section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center">
            <LogoMark size="portal" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-accent-500">
              Great Lane Carriers
            </p>
          </div>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent-500">
            Coming Soon
          </p>
          <h1 className="mt-4 font-bold text-navy-900">Driver Portal</h1>
          <p className="mt-4 text-lg text-charcoal-700">
            We&apos;re building a secure portal for our drivers. Sign up to be
            notified when it launches.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <PortalNotifyForm />
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <h2 className="text-center text-lg font-semibold text-navy-900">
            What&apos;s coming
          </h2>
          <ul className="mt-6 space-y-3">
            {portalFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-charcoal-700">
                <CheckCircle className="h-5 w-5 shrink-0 text-accent-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`${ROUTES.forDrivers}#apply`}
            className="focus-ring font-medium text-accent-600 hover:text-accent-500"
          >
            Apply to drive while you wait →
          </Link>
        </div>
      </div>
    </div>
  );
}
