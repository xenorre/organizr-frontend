import { useEffect } from "react";

/**
 * Hook for handling command palette keyboard shortcut.
 * @param setOpen function to open/close the palette (setOpen: (open: boolean) => void)
 */
export function useCommandPaletteShortcut(setOpen: (open: boolean) => void) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Example: open palette with Ctrl+J or Cmd+J
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);
}
