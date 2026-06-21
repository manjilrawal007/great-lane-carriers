import { AlertCircle } from "lucide-react";

interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
      <AlertCircle className="h-5 w-5 shrink-0" />
      {message}
    </div>
  );
}
