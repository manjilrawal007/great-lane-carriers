"use client";

import { useState } from "react";
import Image from "next/image";
import { siteImages } from "@/lib/media";
import { company } from "@/content/site-content";

export function LogoMark() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-xs font-bold text-accent-500">
        GL
      </div>
    );
  }

  return (
    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-navy-900">
      <Image
        src={siteImages.logo}
        alt={`${company.brand} logo`}
        fill
        className="object-contain p-1"
        sizes="40px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
