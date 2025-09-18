import { Navigate } from "react-router";
import { authClient } from "@/lib/auth-client";
import LoadingSpinner from "@/components/LoadingSpinner";

export function SessionRedirect() {
  const { useSession } = authClient;
  const { data: session, isPending } = useSession();

  if (isPending) return <LoadingSpinner type="small" />;
  if (session?.user) return <Navigate to="/dashboard" replace />;
  return <Navigate to="/auth?mode=sign-in" replace />;
}
