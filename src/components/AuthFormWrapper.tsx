import type { FormEventHandler, ReactNode } from "react";

type AuthFormWrapperProps = {
  onSubmit: FormEventHandler;
  children: ReactNode;
};

function AuthFormWrapper({ onSubmit, children }: AuthFormWrapperProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
      aria-labelledby="auth-heading"
    >
      {children}
    </form>
  );
}

export default AuthFormWrapper;
