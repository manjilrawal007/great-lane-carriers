import Link from "next/link";
import { navigation } from "@/content/site-content";
import { ROUTES } from "@/lib/constants";
import { BrandLockup } from "./BrandLockup";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-silver-300 bg-white/95 backdrop-blur-sm">
      <div className="container-site flex h-[3.75rem] items-center justify-between sm:h-16">
        <BrandLockup wordmarkSize="header" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded text-sm font-medium text-charcoal-700 transition-colors hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href={`${ROUTES.forShippers}#quote`}
            className="focus-ring rounded-lg px-3.5 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-silver-100"
          >
            Get a Quote
          </Link>
          <Link
            href={`${ROUTES.forDrivers}#apply`}
            className="focus-ring rounded-lg bg-accent-500 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            Apply to Drive
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
