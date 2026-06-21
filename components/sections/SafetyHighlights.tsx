import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/icons";
import { ROUTES } from "@/lib/constants";
import type { Feature } from "@/types/content";

interface SafetyHighlightsProps {
  title?: string;
  description?: string;
  highlights: Feature[];
  showLink?: boolean;
}

export function SafetyHighlights({
  title = "Safety-First Culture",
  description = "Every mile is backed by rigorous standards and continuous improvement.",
  highlights,
  showLink = true,
}: SafetyHighlightsProps) {
  return (
    <section className="section-padding">
      <div className="container-site">
        <SectionHeading title={title} description={description} className="mb-12" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <Card key={item.title}>
                <IconWrapper icon={Icon} />
                <h3 className="mt-4 font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal-700">{item.description}</p>
              </Card>
            );
          })}
        </div>
        {showLink && (
          <div className="mt-10">
            <Link
              href={ROUTES.safetyCompliance}
              className="focus-ring inline-flex items-center font-medium text-navy-900 hover:text-accent-600"
            >
              Explore safety & compliance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
