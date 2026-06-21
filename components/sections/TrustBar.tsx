import { Badge } from "@/components/ui/Badge";
import { company } from "@/content/site-content";
import { hasAuthorityNumbers } from "@/lib/company";

export function TrustBar() {
  return (
    <section className="border-b border-silver-300 bg-silver-100 py-6">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-between md:gap-8">
          {hasAuthorityNumbers() && (
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-navy-900">
              <span>{company.dotNumber}</span>
              <span className="hidden text-silver-300 sm:inline">|</span>
              <span>{company.mcNumber}</span>
            </div>
          )}
          <p className="text-center text-sm text-charcoal-700">
            <strong>{company.legalDisplayLine}</strong>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {company.serviceRegions.slice(0, 3).map((region) => (
              <Badge key={region}>{region}</Badge>
            ))}
            <Badge className="bg-navy-900 text-white">Responsive Dispatch</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
