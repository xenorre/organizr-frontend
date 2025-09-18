import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => (
    <div className="space-y-2">
      <label
        className={`text-sm block font-medium transition-colors ${
          error ? "text-red-500" : ""
        }`}
      >
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className={`input w-full transition-colors ${
          error ? "!border-red-500 focus:!border-red-500" : ""
        }`}
      />
      {error && error.message && (
        <div className="text-xs mt-1">
          <span className="text-red-500">{error.message}</span>
        </div>
      )}
    </div>
  )
);

FormInput.displayName = "FormInput";
export default FormInput;
