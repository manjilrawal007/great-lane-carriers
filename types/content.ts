export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FleetItem {
  name: string;
  year: string;
  specs: string;
  features: string[];
  imageKey?: "truck1" | "truck2" | "fleetYard" | "driver";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export interface ContactCard {
  title: string;
  value: string;
  href?: string;
  description: string;
}
