import Link from "next/link";
import { company, navigation } from "@/content/site-content";
import { ROUTES } from "@/lib/constants";
import { LogoMark } from "./LogoMark";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-silver-300 bg-white/95 backdrop-blur-sm">
      <div className="container-site flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link
          href={ROUTES.home}
          className="focus-ring flex min-w-0 items-center gap-2.5 rounded-lg sm:gap-3"
        >
          <LogoMark />
          <span className="min-w-0 leading-none">
            <span className="block truncate text-sm font-bold tracking-wide text-navy-900 sm:text-base lg:text-lg">
              GREATLANE
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-500 sm:text-xs">
              CARRIERS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded text-sm font-medium text-charcoal-700 transition-colors hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`${ROUTES.forShippers}#quote`}
            className="focus-ring rounded-lg px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-silver-100"
          >
            Get a Quote
          </Link>
          <Link
            href={`${ROUTES.forDrivers}#apply`}
            className="focus-ring rounded-lg bg-accent-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            Apply to Drive
          </Link>
        </div>

        <MobileNav />
      </div>
      <div className="lane-stripe" aria-hidden="true" />
      <span className="sr-only">{company.legalDisplayLine}</span>
    </header>
  );
}
