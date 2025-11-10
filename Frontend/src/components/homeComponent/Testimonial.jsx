import { useState } from "react";
import LeftAlignText from "./LeftAlignText"
import TestiCard from "./TestiCard";

const Testimonial = ({ data }) => {
  const [testi] = useState([
    {
      pic: "https://images.unsplash.com/photo-1695990190014-306e1dc5e734?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1499",
      con: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ad debitis inventore dolor quo architecto exercitationem provident! Voluptatum sint dolores ullam. Vero, expedita facilis. Sequi, veritatis pariatur? Placeat, possimus perferendis?",
      name: "Sarah Johnson",
      dsg: "Frontend Dev",
    },
    {
      pic: "https://images.unsplash.com/photo-1695990190014-306e1dc5e734?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1499",
      con: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ad debitis inventore dolor quo architecto exercitationem provident! Voluptatum sint dolores ullam. Vero, expedita facilis. Sequi, veritatis pariatur? Placeat, possimus perferendis?",
      name: "Sarah Johnson",
      dsg: "Frontend Dev",
    },
    {
      pic: "https://images.unsplash.com/photo-1695990190014-306e1dc5e734?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1499",
      con: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ad debitis inventore dolor quo architecto exercitationem provident! Voluptatum sint dolores ullam. Vero, expedita facilis. Sequi, veritatis pariatur? Placeat, possimus perferendis?",
      name: "Sarah Johnson",
      dsg: "Frontend Dev",
    },
    {
      pic: "https://images.unsplash.com/photo-1695990190014-306e1dc5e734?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1499",
      con: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ad debitis inventore dolor quo architecto exercitationem provident! Voluptatum sint dolores ullam. Vero, expedita facilis. Sequi, veritatis pariatur? Placeat, possimus perferendis?",
      name: "Sarah Johnson",
      dsg: "Frontend Dev",
    },
  ]);
  return (
    <>
      <LeftAlignText data={data} />
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide p-1 lg:p-4">
          {testi.map((card, index) => (
            <div key={index} className="snap-center shrink-0">
              <TestiCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
