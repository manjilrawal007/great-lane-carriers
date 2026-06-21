import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://greatlanecarriers.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Great Lane Carriers | Louisville Trucking & Freight",
    template: "%s | Great Lane Carriers",
  },
  description:
    "Grewal Trucking Inc. DBA Great Lane Carriers — Louisville-based freight across the Midwest, South, and Southeast. Call (502) 322-6705.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Great Lane Carriers",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Great Lane Carriers — Louisville trucking and freight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}
