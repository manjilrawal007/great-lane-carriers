import { ROUTES } from "@/lib/constants";
import type { CompanyAddress } from "@/lib/company";
import { formatPhoneHref } from "@/lib/phone";
import type {
  ContactCard,
  FaqItem,
  Feature,
  FleetItem,
  NavItem,
  ProcessStep,
  Stat,
  TeamMember,
} from "@/types/content";

/**
 * Central company facts. Set a field when confirmed; leave null to hide from UI.
 * When adding a phone number, set COMPANY_PHONE only — phoneHref is derived via formatPhoneHref().
 */
const COMPANY_PHONE = "(502) 322-6705";
const COMPANY_DISPATCH_EMAIL = null as string | null;
const COMPANY_RECRUITING_EMAIL = null as string | null;
const COMPANY_ACCOUNTING_EMAIL = null as string | null;
const COMPANY_STREET_ADDRESS: CompanyAddress = {
  street: "14709 Forbes Cir",
  city: "Louisville",
  state: "KY",
  zip: "40245",
  full: "14709 Forbes Cir, Louisville, KY 40245",
};
const COMPANY_FLEET_SIZE = null as string | null;
const COMPANY_EQUIPMENT_TYPE = null as string | null;
const COMPANY_FOUNDED_YEAR = "2011";
const COMPANY_YEARS_IN_BUSINESS = "15+ years";

export const company = {
  brand: "Great Lane Carriers",
  legalName: "Grewal Trucking Inc.",
  legalDisplayLine: "Grewal Trucking Inc. DBA Great Lane Carriers",
  tagline: "Reliable Freight. Trusted Lanes.",
  dotNumber: "DOT # 2054420",
  mcNumber: "MC # 719987",
  phone: COMPANY_PHONE,
  phoneHref: COMPANY_PHONE ? formatPhoneHref(COMPANY_PHONE) : null,
  dispatchEmail: COMPANY_DISPATCH_EMAIL,
  recruitingEmail: COMPANY_RECRUITING_EMAIL,
  accountingEmail: COMPANY_ACCOUNTING_EMAIL,
  address: COMPANY_STREET_ADDRESS,
  location: "Louisville, KY",
  fleetSize: COMPANY_FLEET_SIZE,
  equipmentType: COMPANY_EQUIPMENT_TYPE,
  foundedYear: COMPANY_FOUNDED_YEAR,
  yearsInBusiness: COMPANY_YEARS_IN_BUSINESS,
  hours: "Contact our team for current dispatch hours",
  serviceRegions: ["Midwest", "South", "Southeast"],
};

export const navigation: NavItem[] = [
  { label: "For Shippers", href: ROUTES.forShippers },
  { label: "For Drivers", href: ROUTES.forDrivers },
  { label: "Safety", href: ROUTES.safetyCompliance },
  { label: "Fleet", href: ROUTES.fleetEquipment },
  { label: "About", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: ROUTES.about },
    { label: "Safety & Compliance", href: ROUTES.safetyCompliance },
    { label: "Fleet & Equipment", href: ROUTES.fleetEquipment },
    { label: "Privacy", href: ROUTES.privacy },
    { label: "Driver Portal", href: ROUTES.portal },
  ],
  services: [
    { label: "For Shippers", href: ROUTES.forShippers },
    { label: "For Drivers", href: ROUTES.forDrivers },
    { label: "Request a Quote", href: `${ROUTES.contact}#quote` },
    { label: "Apply to Drive", href: `${ROUTES.forDrivers}#apply` },
  ],
};

export const homeStats: Stat[] = [
  { value: "Safety-first", label: "Operations culture" },
  { value: "Responsive", label: "Dispatch support" },
  { value: "Compliance-minded", label: "Processes" },
  { value: "Reliable", label: "Communication" },
];

export const safetyStats: Stat[] = [
  { value: "Routine", label: "Pre-trip inspections" },
  { value: "Responsive", label: "Dispatch support" },
  { value: "Documented", label: "Maintenance practices" },
  { value: "Safety-focused", label: "Team culture" },
];

export const fleetStats: Stat[] = [
  { value: "Well-maintained", label: "Equipment standard" },
  { value: "Scheduled", label: "Maintenance practices" },
  { value: "Responsive", label: "Support when needed" },
  { value: "Professional", label: "Equipment presentation" },
];

export const aboutStats: Stat[] = [
  { value: "2011", label: "Founded" },
  { value: "15+", label: "Years in business" },
  { value: "3", label: "Primary regions" },
  { value: "Louisville", label: "Based in Kentucky" },
];

export const homeProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Book",
    description: "Request a quote or contact dispatch to discuss capacity for your lane.",
  },
  {
    step: 2,
    title: "Dispatch",
    description: "We match your freight with a qualified driver and confirmed equipment.",
  },
  {
    step: 3,
    title: "Track",
    description: "Stay informed with proactive updates from our dispatch team.",
  },
  {
    step: 4,
    title: "Deliver",
    description: "Delivery backed by documentation and professional communication.",
  },
];

export const shipperProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Quote",
    description: "Share lane details and we will respond with pricing based on current availability.",
  },
  {
    step: 2,
    title: "Book",
    description: "Confirm pickup windows, equipment type, and special requirements.",
  },
  {
    step: 3,
    title: "Track",
    description: "Receive status updates from pickup through final delivery.",
  },
  {
    step: 4,
    title: "Invoice",
    description: "Clean paperwork and timely billing for smooth accounts payable.",
  },
];

export const driverProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Apply",
    description: "Submit your application online — our recruiting team reviews every candidate.",
  },
  {
    step: 2,
    title: "Review",
    description: "MVR, employment history, and safety record verification.",
  },
  {
    step: 3,
    title: "Orientation",
    description: "Equipment walkthrough, safety briefing, and dispatch introduction.",
  },
  {
    step: 4,
    title: "Roll",
    description: "Hit the road with well-maintained equipment and dispatch support behind you.",
  },
];

export const driverFeatures: Feature[] = [
  {
    title: "Professional Opportunity",
    description: "Recruiting conversations focus on your experience, lanes, and fit with our team.",
    icon: "DollarSign",
  },
  {
    title: "Well-Maintained Equipment",
    description: "Equipment maintained to company standards with driver support on the road.",
    icon: "Truck",
  },
  {
    title: "Responsive Dispatch",
    description: "A dispatch team focused on clear communication and driver support.",
    icon: "Headphones",
  },
  {
    title: "Maintenance Support",
    description: "Proactive shop coordination to help keep equipment road-ready.",
    icon: "Wrench",
  },
  {
    title: "Schedule Discussions",
    description: "Home time and lane preferences reviewed during the recruiting process.",
    icon: "Home",
  },
  {
    title: "Onboarding Support",
    description: "Orientation covers equipment, safety policies, and dispatch procedures.",
    icon: "Fuel",
  },
];

export const shipperFeatures: Feature[] = [
  {
    title: "Reliable Capacity",
    description: "Ask our team about current availability on your lanes and freight needs.",
    icon: "CalendarCheck",
  },
  {
    title: "Proactive Communication",
    description: "Dispatch updates at pickup, in-transit, and delivery milestones.",
    icon: "MessageSquare",
  },
  {
    title: "Compliance Ready",
    description: "Documentation available upon request for qualified business partners.",
    icon: "ShieldCheck",
  },
  {
    title: "Flexible Solutions",
    description: "Spot, recurring, and dedicated options discussed based on your network.",
    icon: "Route",
  },
];

export const fleetFeatures: Feature[] = [
  {
    title: "Preventive Maintenance",
    description: "Scheduled service intervals help keep tractors and trailers road-ready.",
    icon: "Wrench",
  },
  {
    title: "Roadside Support",
    description: "Responsive assistance when drivers need help on the road.",
    icon: "Phone",
  },
  {
    title: "Clean Standards",
    description: "Professional equipment presentation for every pickup and delivery.",
    icon: "Sparkles",
  },
  {
    title: "Driver Comfort",
    description: "Equipment selected and maintained with long-haul performance in mind.",
    icon: "Armchair",
  },
];

export const safetyHighlights: Feature[] = [
  {
    title: "Safety-Focused Operations",
    description: "Safety metrics reviewed regularly with corrective action when needed.",
    icon: "BarChart3",
  },
  {
    title: "Driver Training",
    description: "Ongoing safety briefings, defensive driving, and compliance education.",
    icon: "GraduationCap",
  },
  {
    title: "HOS Compliance",
    description: "Electronic logging and dispatch coordination to support compliance.",
    icon: "Clock",
  },
  {
    title: "Drug & Alcohol Program",
    description: "DOT-aligned testing program for safety-sensitive positions.",
    icon: "TestTube",
  },
];

export const complianceBadges = [
  {
    label: "Safety-Focused",
    description: "Operations built around driver and public safety",
  },
  {
    label: "Documentation Available",
    description: "Ask our team for current compliance materials",
  },
  {
    label: "Compliance-Minded",
    description: "Processes aligned with industry requirements",
  },
  {
    label: "ELD-Equipped",
    description: "Electronic logging for hours-of-service compliance",
  },
];

export const fleetItems: FleetItem[] = [
  {
    name: "Sleeper Tractors",
    year: "Well-maintained",
    specs: "Class 8 tractors",
    features: ["Comfort-focused cabs", "Maintained to company standards", "Driver amenities where equipped"],
    imageKey: "truck2",
  },
  {
    name: "Day-Cab Tractors",
    year: "Well-maintained",
    specs: "Regional and local options",
    features: ["Maintained to company standards", "Suited for assigned lanes", "Professional presentation"],
    imageKey: "truck2",
  },
  {
    name: "53' Dry Van",
    year: "Well-maintained",
    specs: "Air-ride trailer",
    features: ["Swing doors", "E-track", "Clean, professional units"],
    imageKey: "fleetYard",
  },
  {
    name: "53' Reefer",
    year: "Well-maintained",
    specs: "Temperature-controlled",
    features: ["Refrigeration units maintained regularly", "Suited for temperature-sensitive freight"],
    imageKey: "fleetYard",
  },
];

export const driverRequirements = [
  "Valid CDL-A license (minimum 1 year OTR experience preferred)",
  "Clean MVR and acceptable PSP report",
  "Pass DOT drug screen and physical",
  "No serious violations in the past 3 years",
  "Professional communication skills",
  "Willingness to comply with company safety policies",
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What lanes do you primarily serve?",
    answer:
      "We operate across the Midwest, South, and Southeast. Ask our team for current lane availability and capacity.",
  },
  {
    question: "What equipment types are available?",
    answer:
      "Contact dispatch for current equipment details based on your freight requirements.",
  },
  {
    question: "How do I request a freight quote?",
    answer:
      "Use our online quote form or contact dispatch through the Contact page. Our team will respond as promptly as possible.",
  },
  {
    question: "Are you hiring CDL drivers?",
    answer:
      "Yes — we are looking for safety-minded professional drivers. Visit our For Drivers page to apply.",
  },
  {
    question: "Can you provide insurance and authority documents?",
    answer:
      "Contact our dispatch or safety team to request compliance documentation for your onboarding process.",
  },
];

export const driverFaqs: FaqItem[] = [
  {
    question: "What is the pay schedule?",
    answer:
      "Pay schedule and settlement details are discussed during the interview process with recruiting.",
  },
  {
    question: "What routes are available?",
    answer:
      "Regional and OTR options depend on experience and preference. Lanes are discussed during recruiting.",
  },
  {
    question: "Is there a rider or pet policy?",
    answer:
      "Rider and pet policies, if available, are discussed during recruiting for current program details.",
  },
  {
    question: "Do you offer orientation?",
    answer:
      "Yes — new drivers complete orientation covering equipment, safety policies, and dispatch procedures.",
  },
];

export const safetyFaqs: FaqItem[] = [
  {
    question: "How do you approach safety performance?",
    answer:
      "We review safety data regularly, address findings promptly, and invest in preventive maintenance and driver coaching.",
  },
  {
    question: "What is your maintenance program?",
    answer:
      "Tractors and trailers follow scheduled service intervals with pre-trip and post-trip inspection requirements for drivers.",
  },
  {
    question: "Can shippers request compliance documents?",
    answer:
      "Yes — contact dispatch or safety to request certificates of insurance, authority, and W-9 documentation where applicable.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Raj Grewal",
    title: "President & CEO",
    bio: "Leads Grewal Trucking Inc. with a commitment to safety, integrity, and driver respect.",
  },
];

function hasAnyCompanyEmail(): boolean {
  return Boolean(
    company.dispatchEmail || company.recruitingEmail || company.accountingEmail,
  );
}

function buildContactCards(): ContactCard[] {
  const cards: ContactCard[] = [];

  if (company.phone && company.phoneHref) {
    cards.push({
      title: hasAnyCompanyEmail() ? "Dispatch" : "Phone",
      value: company.phone,
      href: company.phoneHref,
      description: hasAnyCompanyEmail()
        ? "Load booking, tracking, and freight inquiries"
        : "Call us for dispatch, recruiting, accounting, or general inquiries",
    });
  }

  if (company.recruitingEmail) {
    cards.push({
      title: "Recruiting",
      value: company.recruitingEmail,
      href: `mailto:${company.recruitingEmail}`,
      description: "Driver applications and hiring questions",
    });
  }

  if (company.dispatchEmail) {
    cards.push({
      title: "Dispatch Email",
      value: company.dispatchEmail,
      href: `mailto:${company.dispatchEmail}`,
      description: "Quotes, partnerships, and freight inquiries",
    });
  }

  if (company.accountingEmail) {
    cards.push({
      title: "Accounting",
      value: company.accountingEmail,
      href: `mailto:${company.accountingEmail}`,
      description: "Billing and accounts payable questions",
    });
  }

  if (company.address?.full) {
    cards.push({
      title: "Office",
      value: company.address.full,
      description: company.hours,
    });
  } else if (company.location) {
    cards.push({
      title: "Location",
      value: company.location,
      description: company.hours,
    });
  }

  return cards;
}

export const contactCards = buildContactCards();

export const portalFeatures = [
  "View pay stubs and settlement history",
  "Access assigned load information",
  "Upload compliance documents",
  "Receive safety and training reminders",
  "Update contact and emergency info",
];

export const serviceRegions = company.serviceRegions;

export const driverApplicationSubmitNotice =
  "By submitting this form, you agree that Great Lane Carriers / Grewal Trucking Inc. may contact you about driver opportunities and review the information you provide for recruiting and qualification purposes.";

export const driverApplicantConsentLabel =
  "I confirm the information provided is accurate and I agree to be contacted about driver opportunities.";

export const contactFormPrivacyNotice =
  "We use the information you submit to respond to your inquiry and route it to the appropriate team.";

export const driverApplicationPrivacyNotice =
  "Do not include sensitive personal information (such as Social Security numbers, full MVR reports, or medical records) unless our recruiting team specifically requests it.";
