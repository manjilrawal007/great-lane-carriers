import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BrandWordmark } from "./BrandWordmark";
import { LogoMark } from "./LogoMark";

interface BrandLockupProps {
  href?: string;
  /** Horizontal lockup for header; vertical for portal hero */
  layout?: "horizontal" | "vertical";
  wordmarkVariant?: "light" | "dark";
  wordmarkSize?: "header" | "footer" | "portal";
  className?: string;
  iconClassName?: string;
}

export function BrandLockup({
  href = ROUTES.home,
  layout = "horizontal",
  wordmarkVariant = "light",
  wordmarkSize = "header",
  className,
  iconClassName,
}: BrandLockupProps) {
  const content = (
    <>
      <LogoMark
        size={wordmarkSize === "portal" ? "portal" : "header"}
        decorative
        className={iconClassName}
      />
      <BrandWordmark variant={wordmarkVariant} size={wordmarkSize} />
    </>
  );

  const layoutClass =
    layout === "horizontal"
      ? "flex min-w-0 items-center gap-2.5 sm:gap-3"
      : "flex flex-col items-center gap-3 sm:gap-4";

  if (href) {
    return (
      <Link
        href={href}
        className={cn("focus-ring rounded-lg", layoutClass, className)}
        aria-label="Great Lane Carriers"
      >
        {content}
      </Link>
    );
  }

  return <div className={cn(layoutClass, className)}>{content}</div>;
}
