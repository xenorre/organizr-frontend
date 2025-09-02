import { SocialProviders } from "../../../components/SocialProviders";
import AuthForm from "../../../components/AuthForm";

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <AuthForm mode="sign-in" />
      <SocialProviders />
      <p className="text-sm text-[var(--text-secondary)] text-center">
        Don't have an account?{" "}
        <a href="/auth/sign-up" className="text-brand-500 font-medium">
          Create one
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
