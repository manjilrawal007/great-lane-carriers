import { company } from "@/content/site-content";

export interface CompanyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export { formatPhoneHref } from "@/lib/phone";

export function hasPhone(): boolean {
  return Boolean(company.phone && company.phoneHref);
}

export function hasAddress(): boolean {
  return Boolean(company.address?.full);
}

export function hasAuthorityNumbers(): boolean {
  return Boolean(company.dotNumber && company.mcNumber);
}

export function hasDispatchEmail(): boolean {
  return Boolean(company.dispatchEmail);
}

export function hasRecruitingEmail(): boolean {
  return Boolean(company.recruitingEmail);
}

export function hasAccountingEmail(): boolean {
  return Boolean(company.accountingEmail);
}

export function hasAnyCompanyEmail(): boolean {
  return Boolean(
    company.dispatchEmail || company.recruitingEmail || company.accountingEmail,
  );
}

export function hasRecruitingContact(): boolean {
  return hasPhone() || hasRecruitingEmail();
}

export function formSubmissionFallbackMessage(): string {
  if (hasPhone()) {
    return `Submission could not be sent right now. Please call us at ${company.phone}.`;
  }

  return "Submission could not be sent right now. Please visit our Contact page.";
}

export function contactFallbackMessage(): string | null {
  return null;
}
