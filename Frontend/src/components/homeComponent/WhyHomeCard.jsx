import React from "react";

const WhyHomeCard = ({ logo, head, para }) => {
  return (
    <div className="bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border border-neutral-400/20 rounded-2xl p-6 lg:p-6 w-full lg:w-[21.5vw] min-h-[55vw] lg:min-h-[18vw] hover:shadow-xl transition-all duration-300 text-center">
      <i className={`${logo} text-[8vw] lg:text-[1.7vw] bg-[#016CFF]/80 text-white rounded-full mb-6 lg:mb-4 p-1.5 lg:p-3 border border-neutral-400/20`}></i>
      <h3 className="text-[6vw] lg:text-[2vw] mt-2 lg:mt-5">{head}</h3>
      <p className="text-[4.2vw] lg:text-[1.1vw] font-thin leading-[4.5vw] lg:leading-[1.3vw] opacity-70">{para}</p>
    </div>
  );
};

export default WhyHomeCard;
