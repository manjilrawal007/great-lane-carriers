"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site-content";
import { ROUTES } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="focus-ring rounded-lg p-2 text-navy-900"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-navy-900/95 backdrop-blur-sm">
          <nav className="container-site flex flex-col gap-2 py-8" aria-label="Mobile">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-4 py-4 text-lg font-medium text-white hover:bg-navy-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3 border-t border-navy-800 pt-6">
              <Link
                href={`${ROUTES.forShippers}#quote`}
                className="focus-ring rounded-lg border border-white/30 px-4 py-4 text-center font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                href={`${ROUTES.forDrivers}#apply`}
                className="focus-ring rounded-lg bg-accent-500 px-4 py-4 text-center font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Apply to Drive
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
