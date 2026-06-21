import { handleFormSubmission } from "@/lib/email/handler";
import { portalNotifyEmailTemplate } from "@/lib/email/templates";
import { portalNotifySchema } from "@/lib/validations/portal-notify";

export async function POST(request: Request) {
  return handleFormSubmission({
    request,
    schema: portalNotifySchema,
    subject: "[Portal Notify] Great Lane Carriers",
    htmlFn: (data) => portalNotifyEmailTemplate(data as Record<string, unknown>),
  });
}
