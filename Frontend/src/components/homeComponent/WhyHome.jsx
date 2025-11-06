import { useState } from "react";
import WhyHomeCard from "./WhyHomeCard";
import SuCard from "./SuCard";
import LeftAlignText from "./LeftAlignText";

const WhyHome = ({ data }) => {
  const [whyCard] = useState([
    {
      logo: "ri-team-line",
      head: "Community-Driven",
      para: "Connect with a global network of techonology enthusiasts from beginners to experts, all supporting each other's journey.",
    },
    {
      logo: "ri-book-line",
      head: "Learn at Your Pace",
      para: "Access curated resources, guides, and tutorials tailored to your knowledge level and specific interests.",
    },
    {
      logo: "ri-verified-badge-line",
      head: "Trusted Information",
      para: "Get reliable, fact-checked insignts free from hype and FOMO, helping you make informed decisions.",
    },
    {
      logo: "ri-discuss-line",
      head: "Real Discussions",
      para: "Engage in meaningful conversations about projects, technology, and trends with respectful, knowledgeable peers.",
    },
  ]);

  const [suCard] = useState([
    {
      no: "50k+",
      text: "Community Members",
    },
    {
      no: "200+",
      text: "Educational Resources",
    },
    {
      no: "30+",
      text: "Global Events",
    },
    {
      no: "24/7",
      text: "Community Support",
    },
  ]);

  return (
    <>
      <LeftAlignText data={data} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[3vw] p-6">
        {whyCard.map((card, index) => (
          <WhyHomeCard key={index} {...card} />
        ))}
      </div>
      <div className="flex justify-between gap-[3vw] p-6 px-10 bg-[#6ea3f8]/90 w-[97%] rounded-2xl bprder-[#003694] mt-[5vw]">
        {suCard.map((card, index) => (
          <SuCard key={index} {...card} />
        ))}
      </div>

      <div></div>
    </>
  );
};

export default WhyHome;
