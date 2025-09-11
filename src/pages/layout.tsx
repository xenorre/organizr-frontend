import { Outlet } from "react-router";
import "../index.css";
import Providers from "@/lib/utils/Providers";

export default function RootLayout() {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col">
        <main>
          <Outlet />
        </main>
      </div>
    </Providers>
  );
}
