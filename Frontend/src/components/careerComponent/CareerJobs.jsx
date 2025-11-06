import { useState } from "react";
import JobCard from "./JobCard";

const CareerJobs = () => {
  const [jobInfos] = useState([
    {
      company: "Airbnb",
      dayAgo: 4,
      title: "Senior UI/UX Designer",
      skill: ["Senior-Level", "Part-Time"],
      lowSalary: 200,
      highSalary: 250,
      location: "Bangalore, India",
      img: "https://freepnglogo.com/images/all_img/1707660877airbnb-logo-icon.png",
    },
    {
      company: "Airbnb",
      dayAgo: 4,
      title: "Senior UI/UX Designer",
      skill: ["Senior-Level", "Part-Time"],
      lowSalary: 200,
      highSalary: 250,
      location: "Bangalore, India",
      img: "https://freepnglogo.com/images/all_img/1707660877airbnb-logo-icon.png",
    },
    {
      company: "Airbnb",
      dayAgo: 4,
      title: "Senior UI/UX Designer",
      skill: ["Senior-Level", "Part-Time"],
      lowSalary: 200,
      highSalary: 250,
      location: "Bangalore, India",
      img: "https://freepnglogo.com/images/all_img/1707660877airbnb-logo-icon.png",
    },
    {
      company: "Google",
      dayAgo: 2,
      title: "Frontend Engineer",
      skill: ["Mid-Level", "Full-Time"],
      lowSalary: 180,
      highSalary: 220,
      location: "Hyderabad, India",
      img: "https://imgs.search.brave.com/7oRMZ5ifuTywDSOtzsemEMjW7jsmHMLZeDMZPLycObU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    },
    {
      company: "Meta",
      dayAgo: 6,
      title: "Product Designer",
      skill: ["Junior-Level", "Remote"],
      lowSalary: 150,
      highSalary: 200,
      location: "Remote",
      img: "https://static.vecteezy.com/system/resources/previews/004/201/564/large_2x/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    },
    {
      company: "Amazon",
      dayAgo: 1,
      title: "Software Engineer",
      skill: ["Senior-Level", "Full-Time"],
      lowSalary: 210,
      highSalary: 260,
      location: "Pune, India",
      img: "https://static.vecteezy.com/system/resources/previews/014/018/561/large_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    },
  ]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-[97vw] min-h-0 py-2 lg:py-4">
      {jobInfos.map((card, index) => (
        <div key={index} className="snap-center shrink-0">
          <JobCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default CareerJobs;
