"use client";

import { useState } from "react";
import Image from "next/image";
import { type LucideIcon, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandedVisualProps {
  src?: string;
  alt: string;
  decorative?: boolean;
  icon?: LucideIcon;
  dark?: boolean;
  className?: string;
  imageClassName?: string;
  aspectClass?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
}

function BrandedFallback({
  icon: Icon = Truck,
  dark,
  className,
  aspectClass = "aspect-[4/3]",
}: {
  icon?: LucideIcon;
  dark?: boolean;
  className?: string;
  aspectClass?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl",
        aspectClass,
        dark
          ? "bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800"
          : "bg-gradient-to-br from-silver-100 via-white to-accent-500/10",
        className,
      )}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #D4920A 0, #D4920A 2px, transparent 2px, transparent 48px)",
        }}
      />
      <div
        className={cn(
          "relative flex h-20 w-20 items-center justify-center rounded-2xl",
          dark ? "bg-navy-800/80 text-accent-500" : "bg-white/80 text-accent-600 shadow-sm",
        )}
      >
        <Icon className="h-10 w-10" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export function BrandedVisual({
  src,
  alt,
  decorative = false,
  icon,
  dark,
  className,
  imageClassName,
  aspectClass = "aspect-[4/3]",
  objectPosition = "50% 50%",
  objectFit = "cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: BrandedVisualProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <BrandedFallback
        icon={icon}
        dark={dark}
        className={className}
        aspectClass={aspectClass}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-navy-900/5",
        aspectClass,
        className,
      )}
    >
      <Image
        src={src}
        alt={decorative ? "" : alt}
        fill
        priority={priority}
        className={cn(
          objectFit === "cover" ? "object-cover" : "object-contain",
          imageClassName,
        )}
        style={{ objectPosition }}
        sizes={sizes}
        onError={() => setFailed(true)}
        aria-hidden={decorative || undefined}
      />
    </div>
  );
}

export { BrandedFallback };
