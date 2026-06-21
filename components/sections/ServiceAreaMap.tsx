import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

interface ServiceAreaMapProps {
  title?: string;
  description?: string;
  regions: string[];
}

export function ServiceAreaMap({
  title = "Service Areas",
  description = "Strategic coverage across key freight corridors in the United States.",
  regions,
}: ServiceAreaMapProps) {
  return (
    <section className="section-padding">
      <div className="container-site">
        <SectionHeading title={title} description={description} className="mb-12" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative flex aspect-[4/3] items-center justify-center rounded-xl bg-navy-900/5 p-8">
            <svg
              viewBox="0 0 400 250"
              className="h-full w-full text-navy-900/20"
              aria-hidden="true"
            >
              <rect x="20" y="40" width="360" height="170" rx="8" fill="currentColor" />
              <path
                d="M60 80 L120 60 L200 70 L280 55 L340 75 L340 160 L60 160 Z"
                fill="var(--color-accent-500)"
                opacity="0.3"
              />
            </svg>
            <MapPin className="absolute h-8 w-8 text-accent-500" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-900">Primary Operating Regions</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {regions.map((region) => (
                <Badge key={region} className="text-sm">
                  {region}
                </Badge>
              ))}
            </div>
            <p className="mt-6 text-sm text-charcoal-700">
              We also accommodate spot freight and overflow capacity beyond our core
              regions. Contact dispatch to discuss lane-specific availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
