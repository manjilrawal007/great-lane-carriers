import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://greatlanecarriers.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Great Lane Carriers | Premium Trucking & Logistics",
    template: "%s | Great Lane Carriers",
  },
  description:
    "Great Lane Carriers, operated by Grewal Trucking Inc., delivers reliable freight and trusted lanes across the Midwest, South, and Southeast.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Great Lane Carriers",
    images: [{ url: "/images/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/images/great-lane-icon-cropped.png", type: "image/png" }],
    apple: [{ url: "/images/great-lane-icon-cropped.png", type: "image/png" }],
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
