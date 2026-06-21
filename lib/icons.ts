import {
  Armchair,
  BarChart3,
  CalendarCheck,
  Clock,
  DollarSign,
  Fuel,
  GraduationCap,
  Headphones,
  Home,
  MessageSquare,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  TestTube,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Armchair,
  BarChart3,
  CalendarCheck,
  Clock,
  DollarSign,
  Fuel,
  GraduationCap,
  Headphones,
  Home,
  MessageSquare,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  TestTube,
  Truck,
  Wrench,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Truck;
}
