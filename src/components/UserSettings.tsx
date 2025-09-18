import { Pencil, Sun, LogOut, User } from "lucide-react";
import { signOut } from "@/lib/auth-client";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Toggle } from "./ui/toggle";
import { useState } from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

function UserSettings() {
  const [themeSwitchOn, setThemeSwitchOn] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <Popover open={userMenuOpen} onOpenChange={setUserMenuOpen}>
      <PopoverTrigger asChild>
        <Toggle
          aria-label="User menu"
          className={
            `w-9 h-9 border border-[var(--border)] transition-colors ` +
            (userMenuOpen
              ? "bg-accent text-accent-foreground"
              : "bg-[var(--bg-muted)] text-[var(--text-secondary)]")
          }
          pressed={userMenuOpen}
          onPressedChange={setUserMenuOpen}
        >
          <User size={16} />
        </Toggle>
      </PopoverTrigger>
      <PopoverContent
        className="min-w-[140px] w-[160px] p-2 rounded-lg floating border bg-[var(--bg-surface)] flex flex-col gap-1"
        style={{ boxShadow: "var(--shadow-floating)", right: "16px" }}
      >
        <NavLink to="/profile" onClick={() => setUserMenuOpen(false)}>
          <Button
            variant="ghost"
            className="justify-start w-full flex items-center gap-2 text-[var(--text-primary)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)] rounded-md px-2 py-2 text-sm transition-colors"
            size="sm"
          >
            <Pencil size={16} className="text-[var(--muted-700)]" />
            Edit profile
          </Button>
        </NavLink>
        <div
          className="w-full flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer select-none hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)] transition-colors font-semibold"
          tabIndex={0}
          role="button"
          aria-pressed={themeSwitchOn}
          style={{ color: "var(--text-primary)" }}
          onClick={() => setThemeSwitchOn((v) => !v)}
        >
          <Sun
            size={16}
            className="text-[var(--muted-700)] transition-transform duration-200 rotate-0"
          />
          <span style={{ color: "var(--text-primary)" }}>Theme</span>
          <span
            className={
              "ml-auto w-6 h-4 flex items-center rounded-full p-0.5 transition-colors " +
              (themeSwitchOn ? "bg-[var(--brand-500)]" : "bg-[var(--bg-muted)]")
            }
            style={{ minWidth: 24 }}
          >
            <span
              className={
                "block w-3 h-3 rounded-full bg-white shadow transition-transform duration-200" +
                (themeSwitchOn ? " translate-x-3" : "")
              }
            />
          </span>
        </div>
        <Button
          variant="ghost"
          className="justify-start cursor-pointer w-full flex items-center gap-2 text-[var(--danger-500)] hover:bg-[var(--bg-muted)] hover:text-[var(--danger-500)] rounded-md px-2 py-2 text-sm transition-colors"
          size="sm"
          type="button"
          onClick={() => signOut()}
        >
          <LogOut size={16} className="text-[var(--danger-500)]" />
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default UserSettings;
