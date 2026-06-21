import { handleFormSubmission } from "@/lib/email/handler";
import { contactEmailTemplate } from "@/lib/email/templates";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  return handleFormSubmission({
    request,
    schema: contactSchema,
    subject: "[Contact] Great Lane Carriers",
    htmlFn: (data) => contactEmailTemplate(data as Record<string, unknown>),
  });
}
