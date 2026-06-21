import { Resend } from "resend";
import { FORM_SUBMISSION_UNAVAILABLE_MESSAGE } from "@/lib/forms/constants";

export const resend = process.env.RESEND_API_KEY?.trim()
  ? new Resend(process.env.RESEND_API_KEY.trim())
  : null;

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

export function getFromEmail(): string | undefined {
  const value = process.env.FORM_FROM_EMAIL?.trim();
  return value || undefined;
}

export function getDispatchEmail(): string | undefined {
  const value = process.env.FORM_TO_EMAIL?.trim();
  return value || undefined;
}

export function getRecruitingEmail(): string | undefined {
  const value = process.env.FORM_RECRUITING_EMAIL?.trim();
  return value || undefined;
}

export function isEmailConfigured(options?: { needsRecruiting?: boolean }): boolean {
  const baseConfigured = Boolean(
    process.env.RESEND_API_KEY?.trim() && getFromEmail() && getDispatchEmail(),
  );

  if (options?.needsRecruiting) {
    return baseConfigured && Boolean(getRecruitingEmail());
  }

  return baseConfigured;
}

/** @deprecated Use FORM_SUBMISSION_UNAVAILABLE_MESSAGE from @/lib/forms/constants */
export const EMAIL_NOT_CONFIGURED_MESSAGE = FORM_SUBMISSION_UNAVAILABLE_MESSAGE;
