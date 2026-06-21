import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <label
        htmlFor={inputId}
        className={cn("flex cursor-pointer items-start gap-3", className)}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="focus-ring mt-1 h-4 w-4 rounded border-silver-300 text-accent-500"
          {...props}
        />
        <span className={cn("text-sm", error ? "text-red-600" : "text-charcoal-700")}>
          {label}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
