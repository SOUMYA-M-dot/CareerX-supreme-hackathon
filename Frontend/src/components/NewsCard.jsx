import React from "react";

const NewsCard = ({ img, title, profile, name, time }) => {
  console.log(img);

  return (
    <div className="w-[20vw] hover:scale-[1.02] transition-all duration-200">
      <img
        src={img}
        className="rounded-lg mb-3 object-cover h-[20vw] w-[20vw]"
      />
      <h2 className="hero-text leading-[2vw] text-[1.65vw]">{title}</h2>

      <div className="flex items-baseline-last justify-between">
        <div className="flex items-center gap-3 mt-3 text-neutral-400 text-sm">
          <img src={profile} className="w-8 h-8 rounded-full object-cover" />
          <div className="flex flex-col">
            <h5 className="text-[1vw] text-white font-thin">{name}</h5>
            <h5 className="text-[1vw] font-thin">{time} min ago</h5>
          </div>
        </div>
        <h6 className="text-[#2B7EFF] text-[1vw]">Read More <i className="ri-arrow-right-up-line text-white rounded-full bg-[#2B7EFF]"></i></h6>
      </div>
    </div>
  );
};

export default NewsCard;
