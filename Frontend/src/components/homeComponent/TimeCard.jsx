const TimeCard = ({ title, para }) => {
  return (
    <div className="group bg-neutral-400/30 text-neutral-300 hover:bg-blue-600/80 hover:text-white backdrop-blur-[1px] border border-neutral-400/20 rounded-xl transition-all duration-500 ease-in-out overflow-hidden p-[1vw] text-left w-[32vw] cursor-pointer">
      <h2 className="hero-text text-[1.8vw] ">{title}</h2>
      <p
        className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2 text-[1vw] leading-[1.2vw] font-thin text-white/80"
      >
        {para}
      </p>
    </div>
  );
};

export default TimeCard;
