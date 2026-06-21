import { Shield } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ComplianceBadge {
  label: string;
  description: string;
}

interface ComplianceBadgesProps {
  title?: string;
  badges: ComplianceBadge[];
}

export function ComplianceBadges({
  title = "Compliance & Credentials",
  badges,
}: ComplianceBadgesProps) {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container-site">
        <SectionHeading title={title} dark align="center" className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <Card key={badge.label} className="border-navy-800 bg-navy-800 text-center">
              <Shield className="mx-auto h-8 w-8 text-accent-500" />
              <h3 className="mt-4 font-semibold text-white">{badge.label}</h3>
              <p className="mt-2 text-sm text-silver-300">{badge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
