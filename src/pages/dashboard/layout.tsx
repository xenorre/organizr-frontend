import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)]">
      <Navbar />
      <div className="py-2 px-4">
        <Outlet />
      </div>
    </div>
  );
}
