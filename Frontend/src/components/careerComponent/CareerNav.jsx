import React from "react";
import { NavLink } from "react-router-dom";

const CareerNav = () => {
  return (
    <div className="absolute flex bg-neutral-400/20 text-neutral-300 text lg:text-[1.2vw] backdrop-blur-[1px] border rounded-xl border-neutral-400/20 w-fit align-center justify-between">
      <NavLink
        className={({ isActive }) =>
          `w-[23vw] lg:w-[7vw] rounded-xl text-center py-0 font-medium transition ${
            isActive
              ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
              : "text-neutral-400 hover:text-white"
          }`
        }
        to="/career-wrapper/roadmap"
      >
        Roadmap
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `w-[23vw] lg:w-[7vw] rounded-xl text-center py-0 font-medium transition ${
            isActive
              ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
              : "text-neutral-400 hover:text-white"
          }`
        }
        to="/career-wrapper/jobs"
      >
        Jobs
      </NavLink>
    </div>
  );
};

export default CareerNav;
