import { createAuthClient } from "better-auth/react";

type AuthResponse = { success: true } | { success: false; error: string };

const handleAuthResponse = (response: any): AuthResponse => {
  if (response.error) {
    return { success: false, error: response.error.message };
  }
  return { success: true };
};

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_API_URL, // The base URL of your auth server
});

import type { AuthFormValues } from "@/hooks/useAuthFormTypes";

export const signUp = async (data: AuthFormValues) => {
  const result = await authClient.signUp.email({
    email: data.email,
    password: data.password,
    name: data.name ?? "",
  });
  return handleAuthResponse(result);
};

export const signIn = async (data: AuthFormValues) => {
  const result = await authClient.signIn.email({
    email: data.email,
    password: data.password,
  });
  if (result.error) {
    return { success: false, error: result.error.message };
  }
  return { success: true };
};

export const signInWithProvider = async (provider: string) => {
  const result = await authClient.signIn.social({
    provider: provider,
    callbackURL: `${import.meta.env.VITE_CALLBACK_URL}/dashboard`,
  });

  return handleAuthResponse(result);
};

export const signOut = async () => {
  const result = await authClient.signOut();

  return handleAuthResponse(result);
};
