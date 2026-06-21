import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { BrandLockup } from "@/components/layout/BrandLockup";
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
          <BrandLockup
            href={ROUTES.home}
            layout="vertical"
            wordmarkSize="portal"
            className="mx-auto"
          />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Coming Soon
          </p>
          <h1 className="mt-4 font-bold text-brand-navy">Driver Portal</h1>
          <p className="mt-4 text-lg text-charcoal-700">
            We&apos;re building a secure portal for our drivers. Sign up to be
            notified when it launches.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <PortalNotifyForm />
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <h2 className="text-center text-lg font-semibold text-brand-navy">
            What&apos;s coming
          </h2>
          <ul className="mt-6 space-y-3">
            {portalFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-charcoal-700">
                <CheckCircle className="h-5 w-5 shrink-0 text-brand-gold" />
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
