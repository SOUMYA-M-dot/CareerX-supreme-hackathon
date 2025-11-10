import { useState } from "react";
import LeftAlignText from "./LeftAlignText";

const Timeline = ({ data }) => {
  const [time] = useState([
    {
      time: "0-3 Months",
      title: "Master the Fundamentals",
      para: "Build a solid base in programming, data structures, and algorithms. Focus on problem-solving skills, writing clean code, and understanding how systems work at their core.",
    },
    {
      time: "4-8 Months",
      title: "Develop Real Projects",
      para: "Apply your skills to real-world problems by building small projects. Learn version control, collaborate on GitHub, and start exploring frameworks or technologies relevant to your domain.",
    },
    {
      time: "9-14 Months",
      title: "Deepen Technical Expertise",
      para: "Dive deeper into advanced topics like design patterns, system design, APIs, and deployment. Strengthen debugging and optimization skills while refining your ability to write scalable, maintainable code.",
    },
    {
      time: "15-20 Months",
      title: "Become a Pro Engineer",
      para: "Work on complex systems, contribute to open source, and mentor beginners. Focus on communication, architecture decisions, and understanding product impact to perform like a professional engineer.",
    },
  ]);

  return (
    <>
      <LeftAlignText data={data} />
      <div className="flex flex-col relative w-[97%]">

        <div className="flex justify-start lg:justify-center">
          <i className="ri-arrow-down-line text-[#4379BD] border border-[#4379BD] rounded-full px-2 py-1"></i>
        </div>

        {time.map((item, index) => {
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
                  {item.time}
                </h3>

                <h2 className="hero-text text-[7vw] lg:text-[2.1vw] leading-none font-bold mt-2 mb-5">
                  {item.title}
                </h2>

                <p className="text-neutral-300 font-thin text-[3.8vw] lg:text-[1.1vw] leading-tight mt-3 lg:pl-2">
                  {item.para}
                </p>
              </div>
            </div>
          );
        })}

        <div className="flex justify-start lg:justify-center">
          <i className="ri-arrow-up-line text-[#4379BD] border border-[#4379BD] rounded-full px-2 py-1"></i>
        </div>

      </div>
    </>
  );
};

export default Timeline;
