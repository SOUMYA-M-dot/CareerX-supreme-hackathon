import { useOutletContext } from "react-router-dom";

const CareerRoadmap = () => {
  const { roadmaps, selectedField } = useOutletContext();

  const dataList = roadmaps[selectedField];

  return (
    <div className="flex flex-col relative w-full lg:mt-[2vw]">
      <div className="lg:flex justify-between items-baseline-last mt-8 mb-15 p-2 lg:p-0">
        <h3 className="hero-text text-[10vw] capitalize font-bold lg:font-normal lg:text-[4vw] leading-none w-full lg:w-[40%]">
          Your personalised {selectedField} Roadmap
        </h3>

        <p className="text-[4vw] lg:text-[1vw] text-white/80 lg:opacity-100  w-full lg:w-[40%] leading-none font-thin mt-2">
          This roadmap outlines essential skills and milestones collected from
          various reliable data sources. It serves as guidance only, and we are
          not responsible if you cannot complete it within the suggested
          timeframe.
        </p>
      </div>

      <div className="flex justify-start lg:justify-center">
        <i className="ri-arrow-down-line text-[#4379BD] border border-[#4379BD] rounded-full px-2 py-1"></i>
      </div>

      {dataList.map((data, index) => {
        const isRight = index % 2 === 0;

        return (
          <div
            key={index}
            className={`w-full flex justify-between min-h-[90vw] lg:min-h-[20vw] gap-2.5 ${
              isRight ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Empty space */}
            <div className="hidden lg:block w-[40vw] h-[16vw] bg-transparent"></div>

            {/* Middle line + index */}
            <div className="mid w-[10vw] lg:w-[5vw] flex flex-col items-center gap-1">
              <div className="h-1/2 bg-[#4379BD] w-[.1vw]"></div>
              <h6 className="text-[#4379BD] border border-[#4379BD] rounded-full px-3 py-1">
                {index + 1}
              </h6>
              <div className="h-1/2 w-[.1vw] bg-[#4379BD]"></div>
            </div>

            {/* Content card */}
            <div className="w-[85vw] lg:w-[40vw] min-h-[80vw] lg:min-h-[18vw] p-6 rounded-2xl bg-neutral-800/40 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 mt-[10vw] lg:mt-[5vw]">
              <h3 className="text-xl font-semibold text-blue-400">
                {data.time} (Estimated)
              </h3>

              <h2 className="hero-text text-[7vw] lg:text-[2.1vw] leading-none font-bold mt-2 mb-5">
                {data.title}
              </h2>

              <div className=" text-neutral-300 mt-3 font-thin flex flex-col gap-3 lg:gap-1 pl-3 lg:pl-2">
                {data.steps.map((s, i) => (
                  <li
                    className="text-[3.8vw] lg:text-[1.1vw] leading-none"
                    key={i}
                  >
                    {" "}
                    {s}
                  </li>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex justify-start lg:justify-center">
        <i className="ri-arrow-up-line text-[#4379BD] border border-[#4379BD] rounded-full px-2 py-1"></i>
      </div>
    </div>
  );
};

export default CareerRoadmap;
