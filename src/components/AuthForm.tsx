import { useState } from "react";

type Props = {
  mode: "sign-in" | "sign-up";
};

export default function AuthForm({ mode }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const isSignUp = mode === "sign-up";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: call auth API / integrate Better Auth
    setTimeout(() => setLoading(false), 600);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
      aria-labelledby="auth-heading"
    >
      <div className="flex items-center justify-between">
        <h1 id="auth-heading" className="text-xl font-semibold">
          {isSignUp ? "Create your account" : "Sign in to your account"}
        </h1>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <input
          aria-label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input w-full"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <input
          aria-label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input w-full"
          placeholder="Your password"
        />
      </div>

      {isSignUp && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Confirm password</label>
          <input
            aria-label="Confirm password"
            type="password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="input w-full"
            placeholder="Confirm password"
          />
        </div>
      )}

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-[var(--text-secondary)]">
          <input type="checkbox" className="w-4 h-4" /> Remember me
        </label>
        <a className="text-brand-500 hover:underline" href="#">
          Forgot?
        </a>
      </div>

      <div className="grid gap-3">
        <button
          type="submit"
          className="btn btn--primary w-full"
          disabled={loading}
        >
          {loading ? "Processing..." : isSignUp ? "Create account" : "Sign in"}
        </button>

        <div className="flex items-center gap-3">
          <hr className="flex-1 border-[var(--border)]" />
          <span className="text-sm text-[var(--text-secondary)]">
            or continue with
          </span>
          <hr className="flex-1 border-[var(--border)]" />
        </div>
      </div>
    </form>
  );
}
