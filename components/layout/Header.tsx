import Link from "next/link";
import { company, navigation } from "@/content/site-content";
import { ROUTES } from "@/lib/constants";
import { LogoMark } from "./LogoMark";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-silver-300 bg-white/95 backdrop-blur-sm">
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Link href={ROUTES.home} className="focus-ring flex items-center gap-3 rounded-lg">
          <LogoMark />
          <span className="hidden sm:block">
            <span className="text-lg font-bold text-navy-900 md:text-xl">
              Great Lane
            </span>
            <span className="block text-xs font-medium uppercase tracking-widest text-accent-500">
              Carriers
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
