import HeroImgDiv from "./HeroImgDiv";
import HeroTextDiv from "./HeroTextDiv";
import Timeline from "./Timeline";
import Update from "./Update";
import WhyHome from "./WhyHome";
import WorkHome from "./WorkHome";
import Testimonial from "./Testimonial";
import FloatingChatbox from "../FloatingChatbox";
import Footer from "../Footer";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <HeroTextDiv />
      <HeroImgDiv />
      <WhyHome
        data={{
          tag: "Why Choose Us",
          title: "Why CareerX?",
          desc: "Your trusted platform for tech updates, community, engagement, and reliable insights.",
        }}
      />
      <WorkHome
        data={{
          tag: "Getting Started",
          title: `How CareerX Works`,
          desc: "Your journey from tech entusiast to real engineer in few simple steps",
        }}
      />
      <Update
        data={{
          tag: "News",
          title: "Latest Updates",
          desc: "",
        }}
      />
      <Timeline
        data={{
          tag: "Explore the Evolution",
          title: "Our Personalised Timeline",
          desc: "Discover key milestones in the history of technology",
        }}
      />
      <Testimonial
        data={{
          tag: "Testimonial",
          title: "What Our Community Says",
          desc: "Hear from tech enthusiasts who love careerX",
        }}
      />



      <FloatingChatbox />
    </div>
  );
};

export default Hero;
