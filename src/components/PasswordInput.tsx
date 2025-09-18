import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, ...props }, ref) => {
    const [show, setShow] = useState(false);
    return (
      <div className="space-y-2">
        <label
          className={`text-sm block font-medium transition-colors ${
            error ? "text-red-500" : ""
          }`}
        >
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            type={show ? "text" : "password"}
            {...props}
            className={`input w-full transition-colors ${
              error ? "!border-red-500 focus:!border-red-500" : ""
            }`}
          />
          {show ? (
            <FiEyeOff
              onClick={() => setShow(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer"
            />
          ) : (
            <FiEye
              onClick={() => setShow(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer"
            />
          )}
        </div>
        {error && error.message && (
          <div className="text-xs mt-1">
            <span className="text-red-500">{error.message}</span>
          </div>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
