import { formSubmissionFallbackMessage } from "@/lib/company";

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitToFormApi(
  endpoint: string,
  data: unknown,
): Promise<SubmitResult> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      error?: string;
    };

    if (!res.ok || json.success !== true) {
      return {
        ok: false,
        error:
          typeof json.error === "string" && json.error.trim()
            ? json.error
            : formSubmissionFallbackMessage(),
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: formSubmissionFallbackMessage() };
  }
}
