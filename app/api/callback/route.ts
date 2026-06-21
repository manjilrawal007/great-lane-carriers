import { handleFormSubmission } from "@/lib/email/handler";
import { callbackEmailTemplate } from "@/lib/email/templates";
import { callbackSchema } from "@/lib/validations/callback";

export async function POST(request: Request) {
  return handleFormSubmission({
    request,
    schema: callbackSchema,
    subject: "[Callback Request] Great Lane Carriers",
    htmlFn: (data) => callbackEmailTemplate(data as Record<string, unknown>),
  });
}
