"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "./ui/input";
import { FcSerialTasks } from "react-icons/fc";

export function SearchComponent() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="relative min-w-[280px]">
        <Search
          size={16}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-600)]"
        />
        <Input
          type="text"
          onClick={() => setOpen(true)}
          placeholder="Search tasks, projects..."
          className="pl-10 bg-[var(--bg-muted)] border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--muted-600)] focus:ring-2 focus:ring-[var(--brand-500)] focus:border-[var(--brand-500)] rounded-md h-9 transition-all"
          style={{ boxShadow: "var(--shadow-1)" }}
        />
        <p className="text-[var(--muted-600)] text-xs absolute right-2 top-2">
          Press{" "}
          <kbd className="bg-[var(--bg-muted)] text-[var(--muted-600)] pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-[var(--border)] px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </div>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="bg-[var(--bg-muted)] border border-[var(--border)] rounded-3xl shadow-[var(--shadow-floating)] p-0"
      >
        <CommandInput
          placeholder="Type a command or search..."
          className="bg-[var(--bg-muted)] text-[var(--text-primary)] placeholder:text-[var(--muted-600)] rounded-t-3xl h-11 transition-all shadow-none px-4"
        />
        <CommandList className="bg-[var(--bg-surface)] rounded-b-xl p-2 pt-1">
          <CommandEmpty className="bg-transparent text-[var(--muted-600)] px-4 py-2">
            No results found.
          </CommandEmpty>
          <CommandGroup
            heading="Suggestions"
            className="text-[var(--muted-700)] px-2 pt-2 pb-1 text-xs font-semibold"
          >
            <CommandItem className="flex items-center gap-2 text-[var(--text-primary)] hover:bg-[var(--glass-02)] hover:text-[var(--text-primary)] cursor-pointer rounded-lg px-2 py-2 transition-colors">
              <Calendar className="text-[var(--muted-600)]" />
              <span>Calendar</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="bg-[var(--border)] my-1" />
          <CommandGroup
            heading="Settings"
            className="text-[var(--muted-700)] px-2 pt-2 pb-1 text-xs font-semibold"
          >
            <CommandItem className="flex items-center gap-2 text-[var(--text-primary)] hover:bg-[var(--glass-02)] hover:text-[var(--text-primary)] cursor-pointer rounded-lg px-2 py-2 transition-colors">
              <User className="text-[var(--muted-600)]" />
              <span>Profile</span>
              <CommandShortcut className="ml-auto bg-transparent text-[var(--muted-600)] border border-[var(--border)] rounded px-1.5 font-mono text-[10px]">
                ⌘P
              </CommandShortcut>
            </CommandItem>
            <CommandItem className="flex items-center gap-2 text-[var(--text-primary)] hover:bg-[var(--glass-02)] hover:text-[var(--text-primary)] cursor-pointer rounded-lg px-2 py-2 transition-colors">
              <FcSerialTasks className="text-[var(--muted-600)]" />
              <span>Tasks</span>
              <CommandShortcut className="ml-auto bg-transparent text-[var(--muted-600)] border border-[var(--border)] rounded px-1.5 font-mono text-[10px]">
                ⌘B
              </CommandShortcut>
            </CommandItem>
            <CommandItem className="flex items-center gap-2 text-[var(--text-primary)] hover:bg-[var(--glass-02)] hover:text-[var(--text-primary)] cursor-pointer rounded-lg px-2 py-2 transition-colors">
              <Settings className="text-[var(--muted-600)]" />
              <span>Settings</span>
              <CommandShortcut className="ml-auto bg-transparent text-[var(--muted-600)] border border-[var(--border)] rounded px-1.5 font-mono text-[10px]">
                ⌘S
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
