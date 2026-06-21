import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center section-padding">
      <div className="container-site text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
          404
        </p>
        <h1 className="mt-4 font-bold text-navy-900">Page not found</h1>
        <p className="mt-4 text-charcoal-700">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href={ROUTES.home}
          className="focus-ring mt-8 inline-block rounded-lg bg-navy-900 px-6 py-3 font-medium text-white hover:bg-navy-800"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
