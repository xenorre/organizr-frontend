import { useState } from "react";
import { useCommandPaletteShortcut } from "@/hooks/useCommandPaletteShortcut";
import { SearchInput } from "./SearchInput";
import { CommandPaletteDialog } from "./CommandPaletteDialog";

export function SearchComponent() {
  const [open, setOpen] = useState(false);

  useCommandPaletteShortcut(setOpen);

  return (
    <>
      <SearchInput onClick={() => setOpen(true)} />
      <CommandPaletteDialog open={open} setOpen={setOpen} />
    </>
  );
}
