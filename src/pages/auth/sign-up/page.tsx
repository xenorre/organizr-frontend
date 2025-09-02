import { SocialProviders } from "../../../components/SocialProviders";
import AuthForm from "../../../components/AuthForm";

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <AuthForm mode="sign-up" />
      <SocialProviders />
      <p className="text-sm text-[var(--text-secondary)] text-center">
        Already have an account?{" "}
        <a href="/auth/sign-in" className="text-brand-500 font-medium">
          Sign in
        </a>
      </p>
      <a
        href="https://deezby.pl"
        className="w-full h-4 flex opacity-90 items-center justify-center"
      >
        <img
          src="https://deezby.pl/logo.svg"
          alt="Deezby Logo"
          className="h-full w-full"
        />
      </a>
    </div>
  );
}
