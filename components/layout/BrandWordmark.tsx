import { cn } from "@/lib/utils";

interface BrandWordmarkProps {
  /** `light` = on white/light backgrounds; `dark` = on navy/dark backgrounds */
  variant?: "light" | "dark";
  size?: "header" | "footer" | "portal";
  className?: string;
}

const sizeStyles = {
  header: {
    primary: "text-[0.8125rem] sm:text-sm lg:text-[1.0625rem]",
    secondary: "text-[0.625rem] sm:text-[0.6875rem] lg:text-[0.75rem]",
  },
  footer: {
    primary: "text-base lg:text-lg",
    secondary: "text-[0.6875rem] lg:text-xs",
  },
  portal: {
    primary: "text-xl sm:text-2xl",
    secondary: "text-xs sm:text-sm",
  },
} as const;

export function BrandWordmark({
  variant = "light",
  size = "header",
  className,
}: BrandWordmarkProps) {
  const styles = sizeStyles[size];
  const primaryColor =
    variant === "light" ? "text-brand-navy" : "text-white";
  const secondaryColor = "text-brand-gold";

  return (
    <span className={cn("inline-flex min-w-0 flex-col justify-center leading-none", className)}>
      <span
        className={cn(
          "block truncate font-display font-bold uppercase tracking-[0.04em]",
          styles.primary,
          primaryColor,
        )}
      >
        GREATLANE
      </span>
      <span
        className={cn(
          "mt-0.5 block truncate font-display font-semibold uppercase tracking-[0.22em]",
          styles.secondary,
          secondaryColor,
        )}
      >
        CARRIERS
      </span>
    </span>
  );
}
