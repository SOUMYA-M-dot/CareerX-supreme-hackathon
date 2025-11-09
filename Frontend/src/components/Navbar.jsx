import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SideNav from "./SideNav";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [userData, setUserData] = useState(null);

  // 🟣 Detect user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            // fallback if no Firestore entry
            setUserData({
              firstName: user.displayName?.split(" ")[0] || "User",
            });
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      } else {
        setUserData(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserData(null);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between w-[95%] fixed top-2 lg:top-5 left-1/2 -translate-x-1/2 z-[999] cursor-default">

        {/* 🍔 Mobile Menu Icon */}
        <i
          onClick={() => setOpenMenu(!openMenu)}
          className="ri-menu-line px-3 py-2 bg-neutral-400/20 text-neutral-300 hover:bg-neutral-200/30 hover:text-white backdrop-blur-[1px] border rounded-full border-neutral-400/20 lg:hidden"
        ></i>

        {/* 🏠 Logo */}
        <h3
          className="h-[10vw] w-[40vw] lg:h-[3.5vw] lg:w-[10vw] flex items-center justify-center text-[6.5vw] lg:text-[1.5vw] leading-none bg-neutral-400/20 text-neutral-300 hover:bg-neutral-200/30 hover:text-white backdrop-blur-[1px] border rounded-full border-neutral-400/20"
          onClick={() => navigate("/")}
        >
          CareerX
        </h3>

        {/* 🧭 Navigation Links */}
        <div className="hidden lg:flex bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-full border-neutral-400/20 w-[33%] align-center justify-between ml-[10vw]">
          {["/", "/career", "/dashboard", "/team"].map(
            (path, i) => {
              const names = ["Home", "Career", "Dashboard", "Team"];
              return (
                <NavLink
                  key={i}
                  className={({ isActive }) =>
                    `w-[7vw] rounded-full text-center py-2.5 font-medium transition ${
                      isActive
                        ? "bg-blue-600/80 backdrop-blur-[1px] border border-neutral-600/20 text-white"
                        : "text-neutral-400 hover:text-white"
                    }`
                  }
                  to={path}
                >
                  {names[i]}
                </NavLink>
              );
            }
          )}
        </div>

        {/* 🧑‍💻 User Info or Buttons */}
        <div className="flex gap-2 items-center">
          {userData ? (
            <>
              <p className="hidden lg:inline text-neutral-200 text-sm font-medium">
                Welcome{userData.firstName ? `, ${userData.firstName}!` : "!"}
              </p>
              <img
                src={
                  auth.currentUser?.photoURL ||
                  "src/assets/images/profile.png"
                }
                alt="profile"
                onClick={handleLogout}
                title="Logout"
                className="w-10 h-10 rounded-full border border-neutral-400/20 cursor-pointer hover:scale-105 transition"
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>

      {/* 🍔 Mobile Overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-900 lg:hidden"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      <SideNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Navbar;
