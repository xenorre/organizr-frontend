import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function SocialProviders() {
  return (
    <div className="grid gap-3">
      <button
        type="button"
        className="btn btn--ghost flex items-center justify-center gap-3 w-full"
        aria-label="Sign in with Google"
      >
        <FcGoogle className="w-5 h-5" />
        <span>Google</span>
      </button>

      <button
        type="button"
        className="btn btn--ghost flex items-center justify-center gap-3 w-full"
        aria-label="Sign in with Apple"
      >
        <FaApple className="w-5 h-5" />
        <span>Apple</span>
      </button>
    </div>
  );
}
