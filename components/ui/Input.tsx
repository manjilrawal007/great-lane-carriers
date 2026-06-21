import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border bg-white px-4 py-3 text-charcoal-900 transition-colors placeholder:text-charcoal-700/60 focus-ring",
        error ? "border-red-500" : "border-silver-300 focus:border-accent-500",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
