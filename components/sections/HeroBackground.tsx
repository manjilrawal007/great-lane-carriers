"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getStockImageFocus,
  siteImages,
  siteVideos,
} from "@/lib/media";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  /** Set on the server when /public/videos/truck-hero.mp4 is present. */
  videoAvailable?: boolean;
}

export function HeroBackground({ videoAvailable = false }: HeroBackgroundProps) {
  const [useVideo, setUseVideo] = useState(videoAvailable);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!videoAvailable) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const disableVideo = () => setUseVideo(false);

    if (motionQuery.matches) {
      disableVideo();
      return;
    }

    motionQuery.addEventListener("change", disableVideo);
    return () => motionQuery.removeEventListener("change", disableVideo);
  }, [videoAvailable]);

  return (
    <div className="absolute inset-0 bg-navy-900">
      <Image
        src={siteImages.truck1}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: getStockImageFocus("truck1") }}
        aria-hidden
      />

      {useVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={siteImages.truck1}
          onError={() => setUseVideo(false)}
          onLoadedData={() => setVideoReady(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          style={{ objectPosition: getStockImageFocus("truck1") }}
          aria-hidden
        >
          <source src={siteVideos.hero} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
