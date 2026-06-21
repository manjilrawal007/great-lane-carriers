import { NextResponse } from "next/server";
import type { ZodSchema } from "zod";
import { formSubmissionFallbackMessage } from "@/lib/company";
import {
  getDispatchEmail,
  getFromEmail,
  getRecruitingEmail,
  isEmailConfigured,
  isProduction,
  resend,
} from "@/lib/email/resend";

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateLimitMap.get(ip);
  if (last && now - last < RATE_LIMIT_MS) return true;
  rateLimitMap.set(ip, now);
  return false;
}

function submissionUnavailableResponse(status = 503) {
  return NextResponse.json(
    { success: false, error: formSubmissionFallbackMessage() },
    { status },
  );
}

function logDevSubmission<T extends Record<string, unknown>>(
  subject: string,
  data: T,
) {
  console.log(`[Form Dev] ${subject}`, data);
}

export async function handleFormSubmission<T extends Record<string, unknown>>({
  request,
  schema,
  subject,
  htmlFn,
  to,
  needsRecruiting = false,
}: {
  request: Request;
  schema: ZodSchema<T>;
  subject: string | ((data: T) => string);
  htmlFn: (data: T) => string;
  to?: string | ((data: T) => string);
  needsRecruiting?: boolean;
}) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    const emailSubject =
      typeof subject === "function" ? subject(result.data) : subject;

    if (!isEmailConfigured({ needsRecruiting })) {
      if (isProduction()) {
        return submissionUnavailableResponse();
      }

      logDevSubmission(emailSubject, result.data);
      return NextResponse.json({ success: true });
    }

    const fromEmail = getFromEmail();
    const emailTo =
      typeof to === "function"
        ? to(result.data)
        : (to ?? (needsRecruiting ? getRecruitingEmail() : getDispatchEmail()));

    if (!resend || !fromEmail || !emailTo?.trim()) {
      if (isProduction()) {
        return submissionUnavailableResponse();
      }

      logDevSubmission(emailSubject, result.data);
      return NextResponse.json({ success: true });
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: emailTo.trim(),
      subject: emailSubject,
      html: htmlFn(result.data),
    });

    if (error) {
      console.error("Resend error:", error);
      return submissionUnavailableResponse(503);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}

export { getRecruitingEmail };
