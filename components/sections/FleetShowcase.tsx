import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { BrandedVisual } from "@/components/ui/BrandedVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getSiteImage,
  getStockImageAlt,
  getStockImageFocus,
  type SiteImageKey,
  type StockPhotoKey,
} from "@/lib/media";
import { ROUTES } from "@/lib/constants";
import type { FleetItem } from "@/types/content";

interface FleetShowcaseProps {
  title?: string;
  description?: string;
  items: FleetItem[];
  showLink?: boolean;
}

function resolveFleetImage(imageKey?: FleetItem["imageKey"]) {
  if (!imageKey) return undefined;
  return getSiteImage(imageKey as SiteImageKey);
}

function resolveFleetPresentation(imageKey?: FleetItem["imageKey"]) {
  if (!imageKey) {
    return { alt: "Commercial trucking equipment", focus: "50% 40%" };
  }

  const key = imageKey as StockPhotoKey;
  return {
    alt: getStockImageAlt(key),
    focus: getStockImageFocus(key),
  };
}

export function FleetShowcase({
  title = "Modern Fleet",
  description = "Well-maintained tractors and trailers supported by consistent maintenance practices.",
  items,
  showLink = true,
}: FleetShowcaseProps) {
  return (
    <section className="section-padding bg-silver-100">
      <div className="container-site">
        <SectionHeading
          title={title}
          description={description}
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const presentation = resolveFleetPresentation(item.imageKey);

            return (
              <Card key={item.name} className="flex flex-col overflow-hidden p-0">
                <BrandedVisual
                  src={resolveFleetImage(item.imageKey)}
                  alt={presentation.alt}
                  aspectClass="aspect-[16/10] w-full"
                  className="rounded-none"
                  objectPosition={presentation.focus}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-500">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-semibold text-navy-900">{item.name}</h3>
                  <p className="text-sm text-charcoal-700">{item.specs}</p>
                  <ul className="mt-4 flex flex-1 flex-col gap-1">
                    {item.features.map((feature) => (
                      <li key={feature} className="text-sm text-charcoal-700">
                        · {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
        {showLink && (
          <div className="mt-10 text-center">
            <Link
              href={ROUTES.fleetEquipment}
              className="focus-ring inline-flex items-center font-medium text-navy-900 hover:text-accent-600"
            >
              View full fleet details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
