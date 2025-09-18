interface FormErrorProps {
  error?: { message?: string };
}

export default function FormError({ error }: FormErrorProps) {
  if (!error?.message) return null;
  return (
    <div className="text-xs mt-1">
      <span className="text-red-500">{error.message}</span>
    </div>
  );
}
