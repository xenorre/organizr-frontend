import { Navigate } from "react-router";
import { authClient } from "@/lib/auth-client";
import LoadingSpinner from "@/components/LoadingSpinner";

export function PublicRoute({ children }: { children: React.ReactNode }) {
  const { useSession } = authClient;
  const { data: session, isPending } = useSession();

  if (isPending) return <LoadingSpinner type="large" />;
  if (session?.user) return <Navigate to="/dashboard" replace />;

  return children;
}
