import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import type { AuthFormValues } from "@/hooks/useAuthFormTypes";
import { signInSchema, signUpSchema } from "@/lib/zod/schemas";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import AuthFormHeader from "./AuthFormHeader";
import PasswordStrengthBar from "./PasswordStrengthBar";
import AuthFormActions from "./AuthFormActions";
import AuthFormOptions from "./AuthFormOptions";

import AuthFormWrapper from "./AuthFormWrapper";

type Props = {
  mode: "sign-in" | "sign-up";
  onSubmit: (data: AuthFormValues) => Promise<void>;
};
export default function AuthForm({ mode, onSubmit }: Props) {
  const isSignUp = mode === "sign-up";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<AuthFormValues>({
    mode: "onChange",
    resolver: zodResolver(isSignUp ? signUpSchema : signInSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      remember: false,
    },
  });

  const password = watch("password");

  const onFormSubmit = async (data: AuthFormValues) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Error during sending form data:", error);
      toast.error("Error during sending form data: " + error);
    }
  };

  return (
    <AuthFormWrapper onSubmit={handleSubmit(onFormSubmit)}>
      <AuthFormHeader isSignUp={isSignUp} />

      {isSignUp && (
        <FormInput
          label="Username"
          {...register("name")}
          error={errors.name}
          placeholder="Your username"
        />
      )}

      <FormInput
        label="Email address"
        type="email"
        {...register("email")}
        error={errors.email}
        placeholder="you@example.com"
      />

      <PasswordInput
        label="Password"
        {...register("password")}
        error={errors.password}
        placeholder="Your password"
      />

      {isSignUp && (
        <>
          <PasswordInput
            label="Confirm password"
            {...register("confirm")}
            error={errors.confirm}
            placeholder="Confirm password"
          />
          <PasswordStrengthBar password={password} />
        </>
      )}

      <AuthFormOptions register={register} />

      <AuthFormActions isSubmitting={isSubmitting} isSignUp={isSignUp} />
    </AuthFormWrapper>
  );
}
