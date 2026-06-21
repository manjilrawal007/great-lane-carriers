import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconWrapperProps {
  icon: LucideIcon;
  className?: string;
  dark?: boolean;
}

export function IconWrapper({ icon: Icon, className, dark = false }: IconWrapperProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-lg",
        dark ? "bg-navy-800 text-accent-500" : "bg-accent-muted text-accent-600",
        className,
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </div>
  );
}
