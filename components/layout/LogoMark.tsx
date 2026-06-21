"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_ICON_ALT, siteImages } from "@/lib/media";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** When true, hide from assistive tech (use inside BrandLockup with aria-label). */
  decorative?: boolean;
  /** Mobile 36–40px; desktop 44–50px */
  size?: "header" | "portal";
}

const sizeClasses = {
  header: "h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 xl:h-[50px] xl:w-[50px]",
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
        sizes={size === "header" ? "(max-width: 640px) 36px, (max-width: 1280px) 44px, 50px" : "80px"}
        onError={() => setFailed(true)}
        aria-hidden={decorative || undefined}
      />
    </div>
  );
}
