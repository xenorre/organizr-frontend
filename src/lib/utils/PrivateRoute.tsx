import { Navigate } from "react-router";
import { authClient } from "@/lib/auth-client";
import LoadingSpinner from "@/components/LoadingSpinner";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { useSession } = authClient;
  const { data: session, isPending } = useSession();

  if (isPending) return <LoadingSpinner type="large" />;
  if (!session?.user) return <Navigate to="/auth?mode=sign-in" replace />;

  return children;
}
