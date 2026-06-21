import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandedVisual } from "@/components/ui/BrandedVisual";
import { cn } from "@/lib/utils";

interface SplitContentProps {
  title: string;
  description: string;
  bullets?: string[];
  linkLabel?: string;
  linkHref?: string;
  imagePosition?: "left" | "right";
  dark?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageObjectPosition?: string;
}

export function SplitContent({
  title,
  description,
  bullets,
  linkLabel,
  linkHref,
  imagePosition = "right",
  dark = false,
  imageSrc,
  imageAlt,
  imageObjectPosition = "50% 40%",
}: SplitContentProps) {
  return (
    <section className={cn(dark ? "bg-navy-900 text-white section-padding" : "section-padding")}>
      <div className="container-site">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-12",
            imagePosition === "left" && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div>
            <h2 className={cn("font-bold", dark ? "text-white" : "text-navy-900")}>
              {title}
            </h2>
            <p className={cn("mt-4 text-lg", dark ? "text-silver-300" : "text-charcoal-700")}>
              {description}
            </p>
            {bullets && (
              <ul className="mt-6 space-y-2">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={cn(
                      "flex items-start gap-2 text-sm",
                      dark ? "text-silver-300" : "text-charcoal-700",
                    )}
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
            {linkLabel && linkHref && (
              <Link
                href={linkHref}
                className="focus-ring mt-8 inline-flex items-center font-medium text-accent-500 hover:text-accent-600"
              >
                {linkLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
          <BrandedVisual
            src={imageSrc}
            alt={imageAlt ?? title}
            dark={dark}
            aspectClass="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]"
            className="w-full shadow-lg ring-1 ring-black/5"
            objectPosition={imageObjectPosition}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
