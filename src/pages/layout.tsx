import { Outlet } from "react-router";
import "../index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/reactQuery";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <header className="w-full bg-[var(--bg-surface)] border-b border-[var(--border)]">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/organizr.webp" alt="Logo" className="h-full w-40" />
            </div>
            <nav className="text-sm text-[var(--text-secondary)] hidden md:block">
              Built with ❤️
            </nav>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center py-8">
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
}
