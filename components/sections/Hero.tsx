import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { company } from "@/content/site-content";
import { hasPhone } from "@/lib/company";
import { heroVideoFileExists } from "@/lib/hero-video";
import { ROUTES } from "@/lib/constants";

function TaglineHeading() {
  const match = company.tagline.match(/^(.+\.)\s*(.+)$/);

  if (!match) {
    return <h1 className="max-w-4xl font-bold leading-tight">{company.tagline}</h1>;
  }

  return (
    <h1 className="max-w-4xl font-bold leading-tight">
      {match[1]}{" "}
      <span className="text-white">{match[2]}</span>
    </h1>
  );
}

export function Hero() {
  const videoAvailable = heroVideoFileExists();

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-navy-900 text-white">
      <HeroBackground videoAvailable={videoAvailable} />
      <div className="absolute inset-0 hero-overlay-video" aria-hidden="true" />
      <div className="container-site relative flex min-h-[85vh] flex-col justify-center section-padding">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-silver-300">
          Louisville, Kentucky · {company.dotNumber} · {company.mcNumber}
        </p>
        <TaglineHeading />
        <p className="mt-6 max-w-2xl text-lg text-silver-300 md:text-xl">
          {company.brand} is the operating brand of {company.legalName} — a
          Louisville-based carrier moving freight across the{" "}
          {company.serviceRegions.join(", ")} with responsive dispatch and
          safety-first operations.
        </p>
        {hasPhone() && (
          <p className="mt-5">
            <Link
              href={company.phoneHref!}
              className="focus-ring inline-flex items-center gap-2 rounded-lg text-base font-semibold text-brand-gold hover:text-white md:text-lg"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              Call or text {company.phone}
            </Link>
          </p>
        )}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={`${ROUTES.forDrivers}#apply`}
            className="focus-ring inline-flex items-center justify-center rounded-lg bg-accent-500 px-8 py-4 font-medium text-white transition-colors hover:bg-accent-600"
          >
            Apply to Drive
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href={`${ROUTES.forShippers}#quote`}
            className="focus-ring inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Request Freight Quote
          </Link>
        </div>
      </div>
      <div className="accent-rule absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  );
}
