import LoadingSpinner from "./LoadingSpinner";

interface AuthFormActionsProps {
  isSubmitting: boolean;
  isSignUp: boolean;
}

export default function AuthFormActions({
  isSubmitting,
  isSignUp,
}: AuthFormActionsProps) {
  return (
    <div className="grid gap-3">
      <button
        type="submit"
        className="btn btn--primary w-full flex items-center justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <LoadingSpinner type="small" />
        ) : isSignUp ? (
          "Create account"
        ) : (
          "Sign in"
        )}
      </button>
      <div className="flex items-center gap-3">
        <hr className="flex-1 border-[var(--border)]" />
        <span className="text-sm text-[var(--text-secondary)]">
          or continue with
        </span>
        <hr className="flex-1 border-[var(--border)]" />
      </div>
    </div>
  );
}
