import { useState } from "react";
import LeftAlignText from "./LeftAlignText";
import TimeCard from "./TimeCard";

const WorkHome = ({ data }) => {
  const [process, setProcess] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [timeline] = useState([
    {
      title: "Create Your Account",
      para: "Sign up in seconds to unlock personalized features, track progress, and connect with learners who share your goals and interests effortlessly.",
    },
    {
      title: "Explore Learning Resources",
      para: "Dive into curated tutorials, articles, and guides crafted by experts to strengthen your foundation and accelerate your learning in every subject area.",
    },
    {
      title: "Join The Conversation",
      para: "Engage with an active community of learners and mentors, exchange ideas, ask questions, and collaborate on projects that help everyone grow together.",
    },
    {
      title: "Grow Your Knowledge",
      para: "Keep expanding your skills with continuous learning, challenges, and discussions designed to help you stay sharp and confident in your chosen field.",
    },
  ]);
  const progressLevels = [17, 40, 62, 100];

  return (
    <div className="w-[97%]">
      <LeftAlignText data={data} />
      <div className="flex justify-between items-center">
        <div className="timeline flex gap-3">
          <div className="bar h-[100] w-[.3vw] rounded-full bg-white">
            <div
              className="bg-[#1761D6]"
              style={{ height: `${process}%` }}
            ></div>
          </div>
          <div className="flex flex-col gap-3" onMouseLeave={() => {setProcess(0); setHovered(false)}}>
            {timeline.map((card, index) => (
              <div
                key={index}
                onMouseEnter={() => {setProcess(progressLevels[index]); setHovered(true)}}
              >
                <TimeCard title={card.title} para={card.para} />
              </div>
            ))}
          </div>
        </div>
        <div className={`h-[25vw] w-[50vw] relative bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-[3.5vw] border-neutral-400/20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            hovered ? "scale-y-[1.15]" : "scale-100"
          }`}>
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-17fQzDlN8o1QAKyarawOYkxX/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WorkHome;
