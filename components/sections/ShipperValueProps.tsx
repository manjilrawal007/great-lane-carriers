import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/icons";
import type { Feature } from "@/types/content";

interface ShipperValuePropsProps {
  title?: string;
  description?: string;
  values: Feature[];
}

export function ShipperValueProps({
  title = "Built for Shippers Who Demand More",
  description = "Professional capacity, clear communication, and documentation you can trust.",
  values,
}: ShipperValuePropsProps) {
  return (
    <section className="section-padding">
      <div className="container-site">
        <SectionHeading title={title} description={description} className="mb-12" />
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = getIcon(value.icon);
            return (
              <Card key={value.title} className="flex gap-4">
                <IconWrapper icon={Icon} className="shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-700">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
