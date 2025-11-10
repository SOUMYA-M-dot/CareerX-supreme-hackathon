import React from "react";

const NewsCard = ({ img, title, profile, name, time }) => {
  console.log(img);

  return (
    <div className="w-[80vw] lg:w-[20vw] hover:scale-[1.02] transition-all duration-200 flex flex-row lg:flex-col items-center gap-4">
      <img
        src={img}
        className="rounded-lg object-cover h-[32vw] lg:h-[20vw] w-[32vw] lg:w-[20vw]"
      />
      <div className="flex flex-col gap-[5vw] lg:gap-1">
        <h2 className="hero-text leading-none text-[4vw] lg:text-[1.65vw]">{title}</h2>

        <div className="flex items-baseline-last justify-between">
          <div className="flex items-center gap-1 lg:gap-3 mt-3 text-neutral-400 text-sm w-fit">
            <img src={profile} className="w-8 h-8 rounded-full object-cover" />
            <div className="flex flex-col">
              <h5 className="text-[3vw] lg:text-[1vw] text-white font-thin">{name}</h5>
              <h5 className="text-[3vw] lg:text-[1vw] font-thin">{time} min ago</h5>
            </div>
          </div>
          <h6 className="text-[#2B7EFF] text-[1vw] flex gap-2">
            <span className="hidden lg:inline">Read More{" "}</span>
            <i className="ri-arrow-right-up-line text-white rounded-full text-[3vw] lg:text-[1vw] p-[1.2vw] lg:px-[.4vw] lg:py-[.1vw] bg-[#2B7EFF]"></i>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
