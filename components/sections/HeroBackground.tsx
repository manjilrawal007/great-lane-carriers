"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
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

function subscribeReducedMotion(onStoreChange: () => void) {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener("change", onStoreChange);
  return () => motionQuery.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return true;
}

export function HeroBackground({ videoAvailable = false }: HeroBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const useVideo = videoAvailable && !prefersReducedMotion && !videoFailed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useVideo) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;

    const startPlayback = async () => {
      try {
        await video.play();
        setVideoReady(true);
      } catch {
        setVideoFailed(true);
      }
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void startPlayback();
    } else {
      video.addEventListener("canplay", startPlayback, { once: true });
      return () => video.removeEventListener("canplay", startPlayback);
    }
  }, [useVideo]);

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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={siteImages.truck1}
          onError={() => setVideoFailed(true)}
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
