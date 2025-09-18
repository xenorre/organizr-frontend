import { SearchComponent } from "./SearchComponent";
import NavbarButtonGroup from "./NavbarButtonGroup";
import NavbarItems from "@/components/NavbarItems";

function Navbar() {
  return (
    <header className="bg-[var(--bg-surface)] border-b border-[var(--border)] py-6">
      <div className="container flex items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <img src="/organizr.webp" alt="Organizr" className="h-6" />
          <nav className="flex gap-4 ml-4">
            <NavbarItems />
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <SearchComponent />
          <NavbarButtonGroup />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
