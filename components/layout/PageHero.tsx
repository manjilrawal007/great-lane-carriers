import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #D4920A 0, #D4920A 2px, transparent 2px, transparent 60px)",
          }}
        />
      </div>
      <div className="container-site relative section-padding">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="max-w-3xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-silver-300 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
      <div className="lane-stripe" aria-hidden="true" />
    </section>
  );
}
