import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/icons";
import type { Feature } from "@/types/content";

interface DriverBenefitsProps {
  title?: string;
  description?: string;
  benefits: Feature[];
}

export function DriverBenefits({
  title = "Why Drive With Us",
  description = "We invest in our drivers because great freight starts with great people.",
  benefits,
}: DriverBenefitsProps) {
  return (
    <section className="section-padding">
      <div className="container-site">
        <SectionHeading title={title} description={description} className="mb-12" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = getIcon(benefit.icon);
            return (
              <Card key={benefit.title}>
                <IconWrapper icon={Icon} />
                <h3 className="mt-4 font-semibold text-navy-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-charcoal-700">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
