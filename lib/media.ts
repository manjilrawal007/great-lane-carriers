export const siteImages = {
  /** Circular truck/road icon — header, favicon, portal */
  icon: "/images/great-lane-icon.png",
  /** Full badge / wordmark — footer, social, print, decals (when added) */
  badgeLogo: "/images/logo.svg",
  truck1: "/images/truck-1.jpg",
  truck2: "/images/truck-2.jpg",
  fleetYard: "/images/fleet-yard.jpg",
  driver: "/images/driver.jpg",
  driverAlt: "/images/driver-alt.jpg",
} as const;

export const BRAND_ICON_ALT = "Great Lane Carriers icon.";

export type SiteImageKey = keyof typeof siteImages;

export type StockPhotoKey = Exclude<SiteImageKey, "icon" | "badgeLogo">;

/** Generic alt text — describes the scene, not company-owned assets. */
export const stockImageAlt: Record<StockPhotoKey, string> = {
  truck1: "Semi-truck traveling on an open highway",
  truck2: "Commercial semi-truck on a highway",
  fleetYard: "Freight yard with parked trailers and tractors",
  driver: "Professional truck driver beside a tractor",
  driverAlt: "Professional truck driver in front of a tractor",
};

/** Tuned crop anchors per placeholder aspect ratio and subject. */
export const stockImageFocus: Record<StockPhotoKey, string> = {
  truck1: "50% 42%",
  truck2: "55% 38%",
  fleetYard: "50% 40%",
  driver: "50% 28%",
  driverAlt: "50% 35%",
};

export function getSiteImage(key: SiteImageKey): string {
  return siteImages[key];
}

export function getStockImageAlt(key: StockPhotoKey): string {
  return stockImageAlt[key];
}

export function getStockImageFocus(key: StockPhotoKey): string {
  return stockImageFocus[key];
}
