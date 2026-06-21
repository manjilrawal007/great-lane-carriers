import { handleFormSubmission } from "@/lib/email/handler";
import { quoteEmailTemplate } from "@/lib/email/templates";
import { quoteSchema } from "@/lib/validations/quote";

export async function POST(request: Request) {
  return handleFormSubmission({
    request,
    schema: quoteSchema,
    subject: "[Freight Quote] Great Lane Carriers",
    htmlFn: (data) => quoteEmailTemplate(data as Record<string, unknown>),
  });
}
