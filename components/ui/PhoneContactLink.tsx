import Link from "next/link";
import { Phone } from "lucide-react";
import { company } from "@/content/site-content";
import { hasPhone } from "@/lib/company";
import { cn } from "@/lib/utils";

interface PhoneContactLinkProps {
  label?: string;
  className?: string;
  linkClassName?: string;
  showIcon?: boolean;
}

export function PhoneContactLink({
  label,
  className,
  linkClassName,
  showIcon = true,
}: PhoneContactLinkProps) {
  if (!hasPhone()) {
    return null;
  }

  return (
    <p className={cn("text-sm sm:text-base", className)}>
      {label && <span className="text-charcoal-700">{label} </span>}
      <a
        href={company.phoneHref!}
        className={cn(
          "inline-flex items-center gap-1.5 font-semibold text-accent-600 hover:text-accent-500",
          linkClassName,
        )}
      >
        {showIcon && <Phone className="h-4 w-4 shrink-0" aria-hidden />}
        {company.phone}
      </a>
    </p>
  );
}

interface DriverPhoneBannerProps {
  className?: string;
}

export function DriverPhoneBanner({ className }: DriverPhoneBannerProps) {
  if (!hasPhone()) {
    return null;
  }

  return (
    <section
      className={cn(
        "border-b border-brand-gold/30 bg-brand-navy text-white",
        className,
      )}
    >
      <div className="container-site py-4">
        <p className="text-center text-sm sm:text-base md:text-left">
          <span className="text-silver-300">Questions before applying?</span>{" "}
          <Link
            href={company.phoneHref!}
            className="focus-ring inline-flex items-center gap-1.5 rounded font-semibold text-brand-gold hover:text-accent-muted"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            Call or text {company.phone}
          </Link>
        </p>
      </div>
    </section>
  );
}
