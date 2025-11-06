import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <div
        className={`
          absolute top-15 left-3 lg:hidden flex flex-col justify-between h-[70vw] w-[53vw] p-[1.5vw]
          bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px]
          border rounded-xl border-neutral-400/20 z-999
          transition-all duration-300
          ${openMenu ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0 pointer-events-none"}
        `}
      >
        {["/", "/career", "/dashboard", "/team", "/community"].map((path) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setOpenMenu(false)} // ✅ Close menu on click
            className={({ isActive }) =>
              `w-[50vw] rounded-xl border border-neutral-400/20 text-left text-[5vw] px-3 py-2 font-medium transition ${
                isActive
                  ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
                  : "text-neutral-400 hover:text-white"
              }`
            }
          >
            {path === "/"
              ? "Home"
              : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default SideNav;
