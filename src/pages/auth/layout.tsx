import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-full min-w-md max-w-6xl grid grid-cols-1 gap-6 items-stretch">
          <section className="p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg shadow-1">
            <div className="max-w-md mx-auto">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
