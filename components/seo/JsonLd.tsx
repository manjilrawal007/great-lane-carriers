import { company } from "@/content/site-content";
import { hasAddress, hasDispatchEmail, hasPhone } from "@/lib/company";

export function JsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://greatlanecarriers.com";

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: company.brand,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.svg`,
    description: `${company.tagline} Based in ${company.location}.`,
  };

  if (hasPhone() || hasDispatchEmail()) {
    organization.contactPoint = {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "US",
      ...(hasPhone() ? { telephone: company.phone } : {}),
      ...(hasDispatchEmail() ? { email: company.dispatchEmail } : {}),
    };
  }

  const graph: Record<string, unknown>[] = [organization];

  if (hasAddress() && company.address) {
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: company.brand,
      description: `${company.tagline} Based in ${company.location}.`,
      url: siteUrl,
      ...(hasPhone() ? { telephone: company.phone } : {}),
      ...(hasDispatchEmail() ? { email: company.dispatchEmail } : {}),
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: "US",
      },
      areaServed: company.serviceRegions.map((region) => ({
        "@type": "Place",
        name: region,
      })),
      parentOrganization: {
        "@id": `${siteUrl}/#organization`,
      },
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
