import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#353535] w-full flex flex-col padding text-white px-[3vw] mt-[5vw] lg:mt-[2vw] pt-2 pb-.5">
      <div className="flex flex-col lg:flex-row  lg:items-baseline-last justify-center lg:justify-between">
        <div className="flex justify-between mt-[1.5vw]">
          <div className="flex flex-col lg:justify-between">
            <h2 className="text-[10vw] text-[#2458D8] lg:text-[3vw] leading-none text-center lg:text-left">
              QuickLinks
            </h2>
            <div className="flex flex-col lg:flex-row gap-[3vw] lg:gap-[2vw] font-thin mt-2.5 opacity-80">
              <h4
                className="text-[4vw] lg:text-[1.1vw] cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </h4>
              <h4
                className="text-[4vw] lg:text-[1.1vw] cursor-pointer"
                onClick={() => navigate("/career")}
              >
                Career
              </h4>
              <h4
                className="text-[4vw] lg:text-[1.1vw] cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </h4>
              <h4
                className="text-[4vw] lg:text-[1.1vw] cursor-pointer"
                onClick={() => navigate("/team")}
              >
                Team
              </h4>
            </div>
            <div className="flex">
              <h4 className="text-[3vw] opacity-60 lg:text-[1.1vw] mt-2.5">
                &copy; {currentYear} CareerX. All rights reserved.
              </h4>
            </div>
          </div>
        </div>

        <h3
          className="hero-text hidden lg:inline lg:text-[8vw] font-extrabold leading-[20vw] lg:leading-[8vw] text-transparent"
          style={{ WebkitTextStroke: ".01px #2458D8" }}
        >
          CareerX
        </h3>
      </div>
    </div>
  );
};

export default Footer;
