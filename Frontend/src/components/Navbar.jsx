import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex items-center justify-between w-[95%] fixed top-2 lg:top-5 left-1/2 -translate-x-1/2 z-999">
        {/* <i className="ri-twitter-x-line px-3 py-2 bg-neutral-400/20 text-neutral-300 hover:bg-neutral-200/30 hover:text-white backdrop-blur-[1px] border rounded-full border-neutral-400/20" onClick={() => navigate("/")}></i> */}
        <i
          className="ri-menu-line px-3 py-2 bg-neutral-400/20 text-neutral-300 hover:bg-neutral-200/30 hover:text-white backdrop-blur-[1px] border rounded-full border-neutral-400/20"
          onClick={() => navigate("/")}
        ></i>

        <h3 className="initial lg:hidden text-[8.5vw] leading-none ml-[1vw]">
          CareerX
        </h3>

        <div className="hidden lg:flex bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-full border-neutral-400/20 w-[40%] align-center justify-between ml-[10vw]">
          <NavLink
            className={({ isActive }) =>
              `w-[7vw] rounded-full text-center py-2.5  font-medium transition ${
                isActive
                  ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
                  : "text-neutral-400 hover:text-white"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-[7vw] rounded-full text-center py-2.5  font-medium transition ${
                isActive
                  ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
                  : "text-neutral-400 hover:text-white"
              }`
            }
            to="/career"
          >
            Career
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-[7vw] rounded-full text-center py-2.5  font-medium transition ${
                isActive
                  ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
                  : "text-neutral-400 hover:text-white"
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-[7vw] rounded-full text-center py-2.5  font-medium transition ${
                isActive
                  ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
                  : "text-neutral-400 hover:text-white"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-[7vw] rounded-full text-center py-2.5  font-medium transition ${
                isActive
                  ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
                  : "text-neutral-400 hover:text-white"
              }`
            }
            to="/community"
          >
            Community
          </NavLink>
        </div>
        <div className="flex gap-2">
          <NavLink
            className="px-4 py-1.5 bg-neutral-400/20 text-neutral-300 hover:bg-neutral-200/30 hover:text-white backdrop-blur-[1px] border rounded-full border-neutral-400/20"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="hidden lg:inline px-4 py-1.5 bg-blue-600/80 text-neutral-300 hover:bg-blue-600 hover:text-white backdrop-blur-[1px] border rounded-full border-neutral-400/20"
            to="/register"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
