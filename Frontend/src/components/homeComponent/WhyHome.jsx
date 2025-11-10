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
      text: "Edu Resources",
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

      <div className="flex flex-col lg:grid md:grid-cols-2 lg:grid-cols-4 gap-[4vw] lg:gap-[3vw] px-2 lg:p-6">
        {whyCard.map((card, index) => (
          <WhyHomeCard key={index} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[3vw] lg:gap-[3vw] p-4 lg:p-6 py-8 lg:py-6 lg:px-10 bg-[#1761D6]/90 w-[97%] rounded-2xl border border-[#003694] mt-[5vw]">
        {suCard.map((card, index) => (
          <SuCard key={index} {...card} />
        ))}
      </div>

      <div></div>
    </>
  );
};

export default WhyHome;
