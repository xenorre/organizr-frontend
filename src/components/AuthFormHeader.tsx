type AuthFormHeaderProps = {
  isSignUp: boolean;
};

export default function AuthFormHeader({ isSignUp }: AuthFormHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 id="auth-heading" className="text-xl font-semibold">
        {isSignUp ? "Create your account" : "Sign in to your account"}
      </h1>
    </div>
  );
}
