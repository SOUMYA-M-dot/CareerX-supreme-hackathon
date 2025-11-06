import React from "react";

const WhyHomeCard = ({ logo, head, para }) => {
  return (
    <div className="bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border border-neutral-400/20 rounded-2xl p-6 w-[21.5vw] min-h-[20vw] hover:shadow-xl transition-all duration-300 text-center">
      <i className={`${logo} lg:text-[1.7vw] bg-[#016CFF]/80 text-white rounded-full lg:mb-4 lg:p-3 border border-neutral-400/20`}></i>
      <h3 className="lg:text-[2vw] lg:my-5">{head}</h3>
      <p className="lg:text-[1.2vw] font-thin leading-[1.5vw] opacity-70">{para}</p>
    </div>
  );
};

export default WhyHomeCard;
