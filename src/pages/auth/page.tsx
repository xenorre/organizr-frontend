import { SocialProviders } from "@/components/SocialProviders";
import AuthForm from "@/components/AuthForm";
import { useNavigate } from "react-router";
import { authClient, signIn, signUp } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AuthPage() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode") || "sign-in";

  const { useSession } = authClient;
  const { refetch } = useSession();

  const handleAuth = async (formData: FormData) => {
    let response;
    if (mode === "sign-in") {
      response = await signIn(formData);
    } else {
      response = await signUp(formData);
    }

    if (response.success) {
      refetch();
      navigate("/dashboard");
    } else {
      toast.error(response.error || "An unknown error occurred.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="w-full flex items-center justify-start">
        <img src="/organizr.webp" alt="Organizr Logo" className="h-full w-36" />
      </div>
      <AuthForm mode={mode as "sign-in" | "sign-up"} onSubmit={handleAuth} />
      <SocialProviders />
      <p className="text-sm text-[var(--text-secondary)] text-center">
        {mode === "sign-in"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        {mode === "sign-in" ? (
          <a href="/auth?mode=sign-up" className="text-brand-500 font-medium">
            Create one
          </a>
        ) : (
          <a href="/auth?mode=sign-in" className="text-brand-500 font-medium">
            Sign in
          </a>
        )}
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
