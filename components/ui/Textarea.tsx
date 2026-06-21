import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
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

Textarea.displayName = "Textarea";
