import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  dark?: boolean;
  className?: string;
}

export function StatBlock({ value, label, dark = false, className }: StatBlockProps) {
  return (
    <div className={cn("text-center", className)}>
      <p
        className={cn(
          "text-3xl font-bold md:text-4xl",
          dark ? "text-accent-500" : "text-accent-500",
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-sm font-medium uppercase tracking-wide",
          dark ? "text-silver-300" : "text-charcoal-700",
        )}
      >
        {label}
      </p>
    </div>
  );
}
