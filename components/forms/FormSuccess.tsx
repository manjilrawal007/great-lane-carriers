import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  title?: string;
  message?: string;
}

export function FormSuccess({
  title = "Thank you!",
  message = "Your submission has been received. We'll be in touch shortly.",
}: FormSuccessProps) {
  return (
    <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
      <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-charcoal-700">{message}</p>
    </div>
  );
}
