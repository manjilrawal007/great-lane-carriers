import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/icons";
import type { Feature } from "@/types/content";

interface FeatureGridProps {
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3;
  dark?: boolean;
}

export function FeatureGrid({
  title,
  description,
  features,
  columns = 3,
  dark = false,
}: FeatureGridProps) {
  return (
    <section className={dark ? "bg-navy-900 text-white section-padding" : "section-padding"}>
      <div className="container-site">
        <SectionHeading
          title={title}
          description={description}
          dark={dark}
          align="center"
          className="mb-12"
        />
        <div
          className={`grid gap-6 ${
            columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {features.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <Card
                key={feature.title}
                className={dark ? "border-navy-800 bg-navy-800" : undefined}
              >
                <IconWrapper icon={Icon} dark={dark} />
                <h3
                  className={`mt-4 font-semibold ${dark ? "text-white" : "text-navy-900"}`}
                >
                  {feature.title}
                </h3>
                <p className={`mt-2 text-sm ${dark ? "text-silver-300" : "text-charcoal-700"}`}>
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
