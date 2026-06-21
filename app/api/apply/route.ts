import { handleFormSubmission } from "@/lib/email/handler";
import { applyEmailTemplate } from "@/lib/email/templates";
import { applySchema } from "@/lib/validations/apply";

export async function POST(request: Request) {
  return handleFormSubmission({
    request,
    schema: applySchema,
    subject: (data) => `[Driver Application] ${data.firstName} ${data.lastName}`,
    htmlFn: (data) => applyEmailTemplate(data as Record<string, unknown>),
    needsRecruiting: true,
  });
}
