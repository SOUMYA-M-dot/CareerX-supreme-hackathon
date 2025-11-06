import { useState } from "react";
import CareerCard from "../components/careerComponent/CareerCard";

const Career = () => {
  const [careerInfos] = useState([
  {
    field: "frontend",
    rating: 4,
    desg: "Frontend Developer",
    desc: "Static to interactive UI",
    skill: ["HTML", "CSS", "JavaScript", "React", "GSAP"],
    pay: 140,
    company: 8,
  },
  {
    field: "backend",
    rating: 5,
    desg: "Backend Developer",
    desc: "Server logic & scalable APIs",
    skill: ["Node.js", "Express", "MongoDB", "Redis"],
    pay: 180,
    company: 12,
  },
  {
    field: "fullstack",
    rating: 4,
    desg: "Fullstack Developer",
    desc: "Frontend + backend systems",
    skill: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    pay: 200,
    company: 10,
  },
  {
    field: "dataScientist",
    rating: 4,
    desg: "Data Scientist",
    desc: "Modeling & data insights",
    skill: ["Python", "Pandas", "ML", "NumPy", "Visualisation"],
    pay: 220,
    company: 14,
  },
  {
    field: "ai_ml",
    rating: 5,
    desg: "AI / ML Engineer",
    desc: "AI modeling & deep learning",
    skill: ["Python", "TensorFlow", "PyTorch", "NLP", "DL"],
    pay: 250,
    company: 16,
  },
  {
    field: "devops",
    rating: 4,
    desg: "DevOps Engineer",
    desc: "CI/CD pipeline + automation",
    skill: ["Linux", "Docker", "Kubernetes", "AWS", "Terraform"],
    pay: 230,
    company: 11,
  },
  {
    field: "dataEngineer",
    rating: 4,
    desg: "Data Engineer",
    desc: "Pipelines & big data systems",
    skill: ["SQL", "Python", "Airflow", "Spark", "Kafka"],
    pay: 210,
    company: 9,
  },
  {
    field: "robotics",
    rating: 3,
    desg: "Robotics Engineer",
    desc: "Autonomous robotics systems",
    skill: ["ROS", "C++", "Python", "SLAM", "Sensors"],
    pay: 190,
    company: 7,
  },
]);


  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-[97vw] min-h-0 py-2 lg:py-4">
      {careerInfos.map((card, index) => (
        <div key={index} className="snap-center shrink-0">
          <CareerCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default Career;
