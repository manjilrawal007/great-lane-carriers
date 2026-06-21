import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent-muted px-3 py-1 text-xs font-medium text-navy-900",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
