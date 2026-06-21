import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FormPrivacyLinkProps {
  className?: string;
  label?: string;
}

export function FormPrivacyLink({
  className,
  label = "Privacy & applicant data",
}: FormPrivacyLinkProps) {
  return (
    <Link
      href={ROUTES.privacy}
      className={cn(
        "font-medium text-accent-600 underline-offset-2 hover:text-accent-500 hover:underline",
        className,
      )}
    >
      {label}
    </Link>
  );
}

interface FormPrivacyNoticeProps {
  message: string;
  className?: string;
  linkLabel?: string;
}

export function FormPrivacyNotice({
  message,
  className,
  linkLabel,
}: FormPrivacyNoticeProps) {
  return (
    <p className={cn("text-xs leading-relaxed text-charcoal-700", className)}>
      {message}{" "}
      <FormPrivacyLink label={linkLabel} />
      .
    </p>
  );
}
