import { Bell, Calendar, Settings } from "lucide-react";
import { Button } from "./ui/button";
import UserSettings from "./UserSettings";

type Button = {
  element?: React.ReactNode;
};

const NavbarButtons: Button[] = [
  { element: <Bell size={16} /> },
  { element: <Calendar size={16} /> },
  { element: <Settings size={16} /> },
];

function NavbarButtonGroup() {
  return (
    <>
      {NavbarButtons.map((button, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          className="w-9 h-9 bg-[var(--bg-muted)] border border-[var(--border)] text-[var(--text-secondary)]"
        >
          {button.element}
        </Button>
      ))}
      <UserSettings />
    </>
  );
}

export default NavbarButtonGroup;
