import React from "react";
import { useNavigate } from "react-router-dom";
import CustomCursor from "./components/homeComponent/CustomCursor";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-[95vw] h-[90vh] flex flex-col items-center justify-center cursor-default">
      <CustomCursor />
      <div className="flex flex-col w-full items-center lg:justify-end h-[30%] lg:h-[40%]">
        <h1
          className="hero-text text-[13vw] lg:text-[9vw] leading-none text-transparent mb-3 lg:mb-2 flex gap-[4vw] lg:gap-[2vw]"
          style={{
            WebkitTextStroke: "1px white",
          }}
        >
          {" "}
          <span className="hover:text-white transition-all delay-300">Page</span>
          <span className="hover:text-white transition-all delay-300">not</span>
          <span className="hover:text-white transition-all delay-300">found</span>{" "}
        </h1>
        <p className="text-center text-[3vw] lg:text-[1.2vw] font-thin leading-none mb-8 lg:mb-4">
          Unfortunately, the page you are looking for does not exist. <br />
          But there are other useful pages:
        </p>
        <div className="flex hero-text text-[5vw] lg:text-[1.2vw] gap-[5vw] lg:gap-[2vw] underline ">
          <h4
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </h4>
          <h4
            onClick={() => {
              navigate("/career");
            }}
          >
            Career
          </h4>
          <h4
            onClick={() => {
              navigate("/team");
            }}
          >
            About
          </h4>
        </div>
      </div>
      <div className="relative w-[95vw] h-[20vw]">
        <img
          className="h-[29vw] lg:h-[8vw] lg:opacity-0 absolute z-999 -top-[50%] lg:top-[20%] left-[10%] lg:left-[30%] hover:opacity-100 transition-all delay-100"
          src="/images/r1.png"
          alt=""
        />
        <img
          className="h-[29vw] lg:h-[8vw] lg:opacity-0 absolute z-999 top-1/2 right-[10%] lg:right-[32%] hover:opacity-100 transition-all delay-100"
          src="/images/r2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PageNotFound;
