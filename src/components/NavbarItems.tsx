import { items } from "@/config/navbar-links";
import { NavLink } from "react-router";

function NavbarItems() {
  return (
    <>
      {items.map((item) => (
        <NavLink to={item.to} end={item.isEnd} key={item.name}>
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "font-semibold text-white"
                  : "font-normal text-[var(--text-secondary)]" +
                    " hover:border-b-0 hover:text-white"
              }
            >
              {item.name}
            </span>
          )}
        </NavLink>
      ))}
    </>
  );
}

export default NavbarItems;
