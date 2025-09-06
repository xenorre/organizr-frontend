import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signInWithProvider } from "@/lib/auth-client";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function SocialProviders() {
  const navigate = useNavigate();
  const handleSignIn = async (provider: string) => {
    const response = await signInWithProvider(provider);
    if (response.success) {
      navigate("/dashboard"); // przekierowanie po sukcesie
    } else {
      toast.error(response.error);
    }
  };

  return (
    <div className="grid gap-3">
      <button
        type="button"
        onClick={() => handleSignIn("google")}
        className="btn btn--ghost flex items-center justify-center gap-3 w-full"
        aria-label="Sign in with Google"
      >
        <FcGoogle className="w-5 h-5" />
        <span>Google</span>
      </button>

      <button
        type="button"
        onClick={() => handleSignIn("github")}
        className="btn btn--ghost flex items-center justify-center gap-3 w-full"
        aria-label="Sign in with Github"
      >
        <FaGithub className="w-5 h-5" />
        <span>Github</span>
      </button>
    </div>
  );
}
