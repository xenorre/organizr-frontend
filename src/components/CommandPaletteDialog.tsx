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
import { Calendar, Settings, User } from "lucide-react";
import { FcSerialTasks } from "react-icons/fc";
import React from "react";

export type CommandItemData = {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
  onSelect?: () => void;
};

export type CommandGroupData = {
  heading: string;
  items: CommandItemData[];
};

type CommandPaletteDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  groups?: CommandGroupData[];
};

export function CommandPaletteDialog({
  open,
  setOpen,
  groups,
}: CommandPaletteDialogProps) {
  const defaultGroups: CommandGroupData[] = [
    {
      heading: "Suggestions",
      items: [
        {
          icon: <Calendar className="text-[var(--muted-600)]" />,
          label: "Calendar",
        },
      ],
    },
    {
      heading: "Settings",
      items: [
        {
          icon: <User className="text-[var(--muted-600)]" />,
          label: "Profile",
          shortcut: "⌘P",
        },
        {
          icon: <FcSerialTasks className="text-[var(--muted-600)]" />,
          label: "Tasks",
          shortcut: "⌘B",
        },
        {
          icon: <Settings className="text-[var(--muted-600)]" />,
          label: "Settings",
          shortcut: "⌘S",
        },
      ],
    },
  ];
  const usedGroups = groups || defaultGroups;
  return (
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
        {usedGroups.map((group) => (
          <CommandGroup
            key={group.heading}
            heading={group.heading}
            className="text-[var(--muted-700)] px-2 pt-2 pb-1 text-xs font-semibold"
          >
            {group.items.map((item) => (
              <CommandItem
                key={item.label}
                className="flex items-center gap-2 text-[var(--text-primary)] hover:bg-[var(--glass-02)] hover:text-[var(--text-primary)] cursor-pointer rounded-lg px-2 py-2 transition-colors"
                onSelect={item.onSelect}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.shortcut && (
                  <CommandShortcut className="ml-auto bg-transparent text-[var(--muted-600)] border border-[var(--border)] rounded px-1.5 font-mono text-[10px]">
                    {item.shortcut}
                  </CommandShortcut>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
        {usedGroups.length > 1 && (
          <CommandSeparator className="bg-[var(--border)] my-1" />
        )}
      </CommandList>
    </CommandDialog>
  );
}
