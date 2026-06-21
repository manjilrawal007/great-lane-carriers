import Link from "next/link";
import { ROUTES } from "@/lib/constants";

interface CtaBandProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBand({
  title,
  description,
  primaryLabel = "Apply to Drive",
  primaryHref = `${ROUTES.forDrivers}#apply`,
  secondaryLabel = "Request a Callback",
  secondaryHref = `${ROUTES.contact}#callback`,
}: CtaBandProps) {
  return (
    <section className="bg-navy-900 section-padding text-white">
      <div className="container-site text-center">
        <h2 className="font-bold">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-silver-300">{description}</p>
        )}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="focus-ring inline-flex items-center justify-center rounded-lg bg-accent-500 px-8 py-4 font-medium text-white transition-colors hover:bg-accent-600"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="focus-ring inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
      <div className="lane-stripe mt-12" aria-hidden="true" />
    </section>
  );
}
