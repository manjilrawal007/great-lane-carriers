"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_ICON_ALT, siteImages } from "@/lib/media";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** When true, hide from assistive tech (use inside BrandLockup with aria-label). */
  decorative?: boolean;
  /** Default: 40px mobile, 44px tablet, 48px desktop */
  size?: "header" | "portal";
}

const sizeClasses = {
  header: "size-9 sm:size-10 lg:size-12",
  portal: "size-16 md:size-20",
} as const;

export function LogoMark({
  className,
  decorative = false,
  size = "header",
}: LogoMarkProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-brand-gold",
          sizeClasses[size],
          className,
        )}
        aria-hidden={decorative || undefined}
      >
        GL
      </div>
    );
  }

  return (
    <div className={cn("relative shrink-0", sizeClasses[size], className)}>
      <Image
        src={siteImages.icon}
        alt={decorative ? "" : BRAND_ICON_ALT}
        fill
        priority={size === "header"}
        className="object-contain scale-[1.05]"
        sizes={size === "header" ? "(max-width: 640px) 36px, 48px" : "80px"}
        onError={() => setFailed(true)}
        aria-hidden={decorative || undefined}
      />
    </div>
  );
}
