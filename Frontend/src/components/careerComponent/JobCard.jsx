const JobCard = ({
  company,
  dayAgo,
  title,
  skill,
  lowSalary,
  highSalary,
  location,
  img,
}) => {
  return (
    <div className="w-[44.5vw] lg:w-[23vw] min-h-[50vw] lg:min-h-[20vw] mb-[4vw] lg:mb-[1.2vw] p-2 lg:p-4 bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border border-neutral-400/20 rounded-2xl">
      <div className="top-part flex justify-between items-baseline-first">
        <div className="imgpart h-[12vw] lg:h-[4.5vw] overflow-hidden aspect-square rounded-full flex items-center justify-center border lg:border-2">
          <img
            className="h-[9vw] lg:h-[3.5vw] aspect-square rounded-full object-cover bg-white"
            src={img}
            alt={company}
          />
        </div>
        <div className="save justify-end h-[7vw] lg:h-[2vw] bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-full border-neutral-400/20 p-1 lg:px-2 text-[3.8vw] lg:text-[1.2vw] flex items-center leading-none lg:gap-1">
          <h5 className="hidden font-thin lg:block">Save</h5>
          <i className="ri-bookmark-line"></i>
        </div>
      </div>

      <div className="content mt-3 leading-none flex flex-col gap-1 lg:gap-0.5 lg:mt-5">
        <h5 className="text-[3.7vw] lg:text-[1.3vw]">
          {company}{" "}
          <span className="text-[2.7vw] lg:text-[.9vw] lg:ml-1 opacity-60">
            {dayAgo} days ago
          </span>
        </h5>

        <h4 className="text-[5vw] lg:text-[2vw] min-h-[8.5vw] lg:min-h-[2vw] leading-none">
          {title}
        </h4>

        <div className="min-h-[20vw] lg:min-h-[10vw] mt-1 lg:mt-2">
          <div className="text-neutral-300 grid grid-cols-2 lg:grid-cols-3 gap-1.5">
            {skill.map((tag, idx) => (
              <div
                key={idx}
                className="text-[2.7vw] lg:text-[1vw] h-[5vw] lg:h-[2vw] min-w-[16vw] lg:min-w-[1vw] flex items-center justify-center bg-neutral-400/20 hover:bg-blue-600/80 transition-all text-neutral-300 backdrop-blur-[1px] border rounded-full border-neutral-400/20 cursor-pointer"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="line w-full h-[.1vw] lg:h-[.1vw] bg-[#666666] my-[3vw] lg:my-[1vw]"></div>

      <div className="footer flex justify-between items-center">
        <div className="flex flex-col leading-none gap-0.5">
          <h4 className="text-[4vw] lg:text-[1.3vw]">
            ${lowSalary}-{highSalary}k
          </h4>
          <h5 className="hidden lg:block text-[.8vw]">{location}</h5>
        </div>

        <h5 className="text-[3.3vw] lg:text-[1.2vw] text-center bg-[#2458D8] px-2.5 lg:px-4 py-1 lg:py-.5 rounded-2xl">
          Apply <span className="hidden lg:inline">Now</span>
        </h5>
      </div>
    </div>
  );
};

export default JobCard;
