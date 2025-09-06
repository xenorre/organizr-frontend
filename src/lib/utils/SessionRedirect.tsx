import { Navigate } from "react-router";
import { authClient } from "@/lib/auth-client";
import { ImSpinner2 } from "react-icons/im";

export function SessionRedirect() {
  const { useSession } = authClient;
  const { data: session, isPending } = useSession();

  if (isPending) return <ImSpinner2 className="animate-spin size-24" />;
  if (session?.user) return <Navigate to="/dashboard" replace />;
  return <Navigate to="/auth?mode=sign-in" replace />;
}
