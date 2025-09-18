import { z } from "zod";

const passwordValidation = z
  .string()
  .min(6, { message: "Password must be at least 6 characters" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one digit" })
  .regex(/[^A-Za-z0-9]/, {
    message: "Password must contain at least one special character",
  });

export const signInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: passwordValidation,
});

export const signUpSchema = signInSchema
  .extend({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    password: passwordValidation,
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });
