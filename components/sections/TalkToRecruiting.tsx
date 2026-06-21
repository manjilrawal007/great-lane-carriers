import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { BrandedVisual } from "@/components/ui/BrandedVisual";
import { company } from "@/content/site-content";
import {
  hasPhone,
  hasRecruitingContact,
  hasRecruitingEmail,
} from "@/lib/company";
import { getStockImageAlt, getStockImageFocus, siteImages } from "@/lib/media";

export function TalkToRecruiting() {
  if (!hasRecruitingContact()) {
    return null;
  }

  return (
    <section className="section-padding bg-silver-100">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Talk to Recruiting</h2>
            <p className="mt-4 text-charcoal-700">
              Have questions before you apply?{" "}
              {hasRecruitingEmail()
                ? "Reach our recruiting team using the contact options below."
                : hasPhone()
                  ? `Call our team at ${company.phone}.`
                  : "Use the contact options below."}
            </p>
            <div className="mt-8 space-y-4">
              {hasPhone() && (
                <Card className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-muted text-accent-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-900">Phone</p>
                    <a
                      href={company.phoneHref!}
                      className="text-accent-600 hover:text-accent-500"
                    >
                      {company.phone}
                    </a>
                  </div>
                </Card>
              )}
              {hasRecruitingEmail() && (
                <Card className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-muted text-accent-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-900">Recruiting Email</p>
                    <a
                      href={`mailto:${company.recruitingEmail}`}
                      className="break-all text-accent-600 hover:text-accent-500"
                    >
                      {company.recruitingEmail}
                    </a>
                  </div>
                </Card>
              )}
            </div>
          </div>
          <BrandedVisual
            src={siteImages.driver}
            alt={getStockImageAlt("driver")}
            aspectClass="aspect-[4/3] sm:aspect-[5/4]"
            className="w-full shadow-lg ring-1 ring-black/5"
            objectPosition={getStockImageFocus("driver")}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
