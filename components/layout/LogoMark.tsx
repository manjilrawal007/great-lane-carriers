"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_ICON_ALT, siteImages } from "@/lib/media";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  /** Default: 40px mobile, 44px tablet, 48px desktop */
  size?: "header" | "portal";
}

const sizeClasses = {
  header: "size-10 md:size-11 lg:size-12",
  portal: "size-16 md:size-20",
} as const;

export function LogoMark({ className, size = "header" }: LogoMarkProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-accent-500",
          sizeClasses[size],
          className,
        )}
        aria-hidden
      >
        GL
      </div>
    );
  }

  return (
    <div
      className={cn("relative shrink-0", sizeClasses[size], className)}
    >
      <Image
        src={siteImages.icon}
        alt={BRAND_ICON_ALT}
        fill
        priority={size === "header"}
        className="object-contain"
        sizes={size === "header" ? "(max-width: 768px) 40px, 48px" : "80px"}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
