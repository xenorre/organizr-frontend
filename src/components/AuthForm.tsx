import {
  barWidth,
  passwordStrength,
  strengthLabels,
} from "@/lib/passwordCheck";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const signUpSchema = signInSchema
  .extend({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

type Props = {
  mode: "sign-in" | "sign-up";
  onSubmit: (formData: FormData) => Promise<void>;
};

export default function AuthForm({ mode, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isSignUp = mode === "sign-up";

  const validateField = (field: string, value: string) => {
    if (!isSignUp) return; // Walidacja tylko podczas rejestracji
    let data: any = { name, email, password, confirm };
    data = { ...data, [field]: value };
    const result = signUpSchema.safeParse(data);
    if (!result.success) {
      const fieldError = result.error.issues.find((e) => e.path[0] === field);
      setErrors((prev) => ({
        ...prev,
        [field]: fieldError ? fieldError.message : "",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = isSignUp
      ? { name, email, password, confirm }
      : { email, password };

    const schema = isSignUp ? signUpSchema : signInSchema;
    const result = schema.safeParse(data);

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      for (const err of result.error.issues) {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setPending(true);

    const formData = new FormData();

    if (isSignUp) formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (isSignUp) formData.append("confirm", confirm);

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Error during sending form data:", error);
      toast.error("Error during sending form data: " + error);
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby="auth-heading"
    >
      <div className="flex items-center justify-between">
        <h1 id="auth-heading" className="text-xl font-semibold">
          {isSignUp ? "Create your account" : "Sign in to your account"}
        </h1>
      </div>

      {isSignUp && (
        <div className="space-y-2">
          <label
            className={`text-sm block font-medium transition-colors ${
              errors.name ? "text-red-500" : ""
            }`}
            htmlFor="name"
          >
            Username
          </label>
          <input
            aria-label="Name"
            id="name"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateField("name", e.target.value);
            }}
            className={`input w-full transition-colors ${
              errors.name ? "!border-red-500 focus:!border-red-500" : ""
            }`}
            placeholder="Your username"
          />
          {errors.name && (
            <div className="text-xs mt-1">
              <span className="text-red-500">{errors.name}</span>
            </div>
          )}
        </div>
      )}

      <div className="space-y-2">
        <label
          className={`text-sm block font-medium transition-colors ${
            isSignUp && errors.email ? "text-red-500" : ""
          }`}
          htmlFor="email"
        >
          Email address
        </label>
        <input
          aria-label="Email"
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateField("email", e.target.value);
          }}
          className={`input w-full transition-colors ${
            isSignUp && errors.email
              ? "!border-red-500 focus:!border-red-500"
              : ""
          }`}
          placeholder="you@example.com"
        />
        {isSignUp && errors.email && (
          <div className="text-xs mt-1">
            <span className="text-red-500">{errors.email}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label
          className={`text-sm block font-medium transition-colors ${
            isSignUp && errors.password ? "text-red-500" : ""
          }`}
          htmlFor="password"
        >
          Password
        </label>
        <div className="w-full relative">
          <input
            aria-label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateField("password", e.target.value);
            }}
            className={`input w-full transition-colors ${
              isSignUp && errors.password
                ? "!border-red-500 focus:!border-red-500"
                : ""
            }`}
            placeholder="Your password"
          />
          {!showPassword ? (
            <FiEye
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer"
            />
          ) : (
            <FiEyeOff
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer"
            />
          )}
        </div>
        {isSignUp && errors.password && (
          <div className="text-xs mt-1">
            <span className="text-red-500">{errors.password}</span>
          </div>
        )}
      </div>

      {isSignUp && (
        <>
          <div className="space-y-2">
            <label
              className={`text-sm block font-medium transition-colors ${
                errors.confirm ? "text-red-500" : ""
              }`}
              htmlFor="confirm"
            >
              Confirm password
            </label>
            <div className="mb-1"></div>
            <div className="w-full relative">
              <input
                aria-label="Confirm password"
                id="confirm"
                type={showPassword ? "text" : "password"}
                required
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                  validateField("confirm", e.target.value);
                }}
                className={`input w-full transition-colors ${
                  errors.confirm ? "!border-red-500 focus:!border-red-500" : ""
                }`}
                placeholder="Confirm password"
              />
              {!showPassword ? (
                <FiEye
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer"
                />
              ) : (
                <FiEyeOff
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 cursor-pointer"
                />
              )}
            </div>
            {errors.confirm && (
              <div className="text-xs mt-1">
                <span className="text-red-500">{errors.confirm}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex-1">
              <div className="relative w-full h-2.5 rounded-md bg-[#373737] overflow-hidden shadow-sm">
                <div
                  className={`absolute left-0 top-0 h-full rounded-md transition-all duration-300 ${
                    barWidth[passwordStrength(password) - 1] || ""
                  }`}
                  style={{
                    background: "#e1e1e1",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center min-h-[1.5rem]">
            <span className="text-xs text-gray-600 h-full">
              Password strength
            </span>
            <span
              className={`px-2 py-0.5 rounded-md border text-xs font-medium shadow-sm select-none transition-colors duration-200 bg-white text-black`}
            >
              {strengthLabels[passwordStrength(password) - 1] || "Weak"}
            </span>
          </div>
        </>
      )}

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-[var(--text-secondary)]">
          <input type="checkbox" className="w-4 h-4" /> Remember me
        </label>
        <a className="text-brand-500 hover:underline" href="#">
          Forgot?
        </a>
      </div>

      <div className="grid gap-3">
        <button
          type="submit"
          className="btn btn--primary w-full flex items-center justify-center"
        >
          {pending ? (
            <ImSpinner2 className="animate-spin" />
          ) : isSignUp ? (
            "Create account"
          ) : (
            "Sign in"
          )}
        </button>

        <div className="flex items-center gap-3">
          <hr className="flex-1 border-[var(--border)]" />
          <span className="text-sm text-[var(--text-secondary)]">
            or continue with
          </span>
          <hr className="flex-1 border-[var(--border)]" />
        </div>
      </div>
    </form>
  );
}
