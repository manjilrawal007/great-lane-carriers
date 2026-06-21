/** Phone formatting — kept separate from lib/company.ts to avoid circular imports with site-content. */

export function formatPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `tel:+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `tel:+${digits}`;
  }

  return `tel:+${digits}`;
}
