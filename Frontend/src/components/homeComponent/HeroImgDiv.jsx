import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, Rocket, Users, Trophy } from "lucide-react";

const features = [
  {
    title: "Real Mentorship",
    bold: "Learn From Experts.",
    desc: "Get 1:1 guidance from industry mentors working at top companies.",
    btn: "Meet Mentors",
    icon: <BookOpen className="w-8 h-8 text-[#3b82f6]" strokeWidth={1.5} />,
  },
  {
    title: "Live Classes",
    bold: "Learn With Community.",
    desc: "Interactive live sessions with doubt solving and hands-on practice.",
    btn: "Join Class",
    icon: <Users className="w-8 h-8 text-[#3b82f6]" strokeWidth={1.5} />,
  },
  {
    title: "Real Projects",
    bold: "Build Career-Proof Skills.",
    desc: "Work on real-world projects used in hiring portfolios.",
    btn: "Start Building",
    icon: <Trophy className="w-8 h-8 text-[#3b82f6]" strokeWidth={1.5} />,
  },
  {
    title: "Job Assistance",
    bold: "Get Ready For Hiring.",
    desc: "Mock interviews, resume help & exclusive career referrals.",
    btn: "Start Journey",
    link: "/register",
    icon: <Rocket className="w-8 h-8 text-[#3b82f6]" strokeWidth={1.5} />,
  },
];

const Card = ({ data, delay }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.link) {
      navigate(data.link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="w-[20rem] h-[43rem] rounded-[2.7rem] overflow-hidden neon-glow relative glassfx reflection deep-gradient text-white flex flex-col justify-between p-8 cursor-pointer"
    >
      {/* Icon at the top */}
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
        {data.icon}
      </div>

      <div className="mt-auto">
        <p className="text-white/80 font-semibold tracking-wide text-sm mb-2">
          CareerX
        </p>

        <h1 className="text-4xl font-semibold leading-tight mb-4">
          {data.title}
          <br />
          <span className="text-[oklch(54.6%_0.245_262.881)]">{data.bold}</span>
        </h1>

        <p className="text-white/70 text-sm leading-relaxed mt-2 mb-6">
          {data.desc}
        </p>

        <div className="flex items-center gap-1 mb-6">
          <div className="w-8 h-2 rounded-lg pill-active"></div>
          <div className="w-2 h-2 rounded-full pill-inactive"></div>
          <div className="w-2 h-2 rounded-full pill-inactive"></div>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover="hover"
          initial="initial"
          onClick={handleClick}
          className="cta-btn w-full py-3 rounded-2xl font-medium text-lg transition shadow-xl flex items-center justify-center gap-2"
        >
          {data.btn}
          <motion.span
            variants={{
              initial: { x: 0 },
              hover: { x: 6 }
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const HeroImgDiv = () => {
  return (
    <>
      <style>{`
        .neon-glow { box-shadow: 0 0 40px rgba(109,99,255,0.1), 0 0 80px rgba(109,99,255,0.05); }
        .deep-gradient { 
          background: 
            radial-gradient(circle at 90% 10%, rgba(255, 215, 0, 0.08), transparent 40%),
            radial-gradient(circle at 50% 0%, rgba(120, 110, 255, 0.15), transparent 60%),
            linear-gradient(180deg, rgba(25, 25, 35, 0.95), rgba(15, 10, 30, 0.98));
        }
        .deep-gradient::before {
          content: "";
          position: absolute;
          top: 0; 
          left: 0;
          right: 0;
          height: 100%;
          background: radial-gradient(circle at 0% 100%, rgba(255, 165, 0, 0.05), transparent 30%);
          pointer-events: none;
        }
        .glassfx { 
          border: 1px solid rgba(255,255,255,0.08); 
          backdrop-filter: blur(28px); 
        }
        .reflection::after { 
          content: ""; 
          position: absolute; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%); 
          pointer-events: none; 
        }
        .pill-active { background: oklch(54.6% 0.245 262.881); }
        .pill-inactive { background: rgba(255,255,255,0.2); }
        .cta-btn { background: oklch(54.6% 0.245 262.881); }
        .cta-btn:hover { background: oklch(54.6% 0.245 262.881 / 0.8); box-shadow:0 0 20px rgba(109,99,255,0.4); }
      `}</style>

      <div className="flex flex-wrap justify-center gap-[3vw] mt-[5vw]">
        {features.map((item, i) => (
          <Card key={i} data={item} delay={i * 0.15} />
        ))}
      </div>
    </>
  );
};

export default HeroImgDiv;
