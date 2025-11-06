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
        <div className="flex justify-center">
          <i className="ri-arrow-down-line text-[#4379BD] border border-[#4379BD] rounded-full px-2 py-1 w-fit items-center"></i>
        </div>
        {time.map((data, index) => {
          const isRight = index % 2 === 0;
          return (
            <div
              className={`w-full flex justify-between h-[16vw] gap-2.5 ${
                isRight ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="hidden lg:block w-[40vw] h-[16vw] bg-transparent"></div>
              <div className="mid flex flex-col items-center gap-1">
                <div className="h-1/2 bg-[#4379BD] w-[.1vw]"></div>
                <h6 className="text-[#4379BD] border border-[#4379BD] rounded-full px-3 py-1">
                  {index + 1}
                </h6>
                <div className="h-1/2 w-[.1vw] bg-[#4379BD]"></div>
              </div>

              <div className="w-[40vw] h-[16vw] p-6 rounded-2xl bg-neutral-800/40 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-400">
                  {data.time}
                </h3>
                <h2 className="hero-text lg:text-[2.1vw] font-bold mt-1">
                  {data.title}
                </h2>
                <p className="lg:text-[1.1vw] text-neutral-300 mt-3 leading-[1.4vw] font-thin">
                  {data.para}
                </p>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center">
          <i className="ri-arrow-up-line text-[#4379BD] border border-[#4379BD] rounded-full px-2 py-1 w-fit items-center"></i>
        </div>
      </div>
    </>
  );
};

export default Timeline;
