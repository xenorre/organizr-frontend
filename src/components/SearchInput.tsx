import { Search } from "lucide-react";
import { Input } from "./ui/input";

type SearchInputProps = {
  onClick: () => void;
};

export function SearchInput({ onClick }: SearchInputProps) {
  return (
    <div className="relative min-w-[280px]">
      <Search
        size={16}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-600)]"
      />
      <Input
        type="text"
        onClick={onClick}
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
  );
}
