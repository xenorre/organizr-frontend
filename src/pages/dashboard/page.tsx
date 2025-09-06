import { ImSpinner2 } from "react-icons/im";
import { authClient, signOut } from "@/lib/auth-client";

function MainDashboard() {
  const { useSession } = authClient;

  const { data: session, isPending } = useSession();
  let avatarUrl = session?.user?.image;

  return (
    <div className="flex flex-col text-center">
      <p className="font-bold">Main dashboard page</p>
      <p className="flex items-center justify-center gap-x-4">
        Current user:{" "}
        {isPending ? (
          <ImSpinner2 className="animate-spin" />
        ) : (
          session?.user?.name || "No user"
        )}
      </p>
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-900 flex items-center justify-center bg-neutral-200 mx-auto">
        {avatarUrl ? (
          <img
            className="w-full h-full object-cover"
            src={avatarUrl}
            alt="User avatar"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-neutral-400">
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
      </div>
      <p>This is a protected route.</p>
      <button onClick={signOut} className="btn btn-sm btn-outline mx-auto">
        Sign Out
      </button>
    </div>
  );
}

export default MainDashboard;
