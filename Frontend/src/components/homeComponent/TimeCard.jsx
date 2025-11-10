import { useState, useEffect } from "react";

const TimeCard = ({ title, para }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div
      onClick={() => isMobile && setOpen(!open)}
      className={`
        group bg-neutral-400/30 text-neutral-300 hover:bg-blue-600/80 
        hover:text-white backdrop-blur-[1px] border border-neutral-400/20 
        rounded-xl transition-all duration-500 ease-in-out overflow-hidden 
        p-3 lg:p-[1vw] text-left w-full lg:w-[32vw] cursor-pointer

      `}
    >
      <h2 className="hero-text text-[5vw] lg:text-[1.8vw]">{title}</h2>

      <p
        className={`
          mt-0 lg:mt-2 lg:text-[1vw] lg:leading-[1.2vw] font-thin text-white/80 
          transition-all duration-500 ease-in-out
          ${isMobile ? (open ? "max-h-40 opacity-100" : "max-h-0 opacity-0") 
                     : "max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100"}
        `}
      >
        {para}
      </p>
    </div>
  );
};

export default TimeCard;
