import { useState } from "react";
import LeftAlignText from "./LeftAlignText";
import NewsCard from "./NewsCard";

const Update = ({ data }) => {
  const [news] = useState([
    {
      img: "https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg",
      title: "Regulatory Framework Proposed",
      profile:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1020",
      name: "Emma Samanta",
      time: "4",
    },
    {
      img: "https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg",
      title: "Regulatory Framework Proposed",
      profile:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1020",
      name: "Emma Samanta",
      time: "4",
    },
    {
      img: "https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg",
      title: "Regulatory Framework Proposed",
      profile:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1020",
      name: "Emma Samanta",
      time: "4",
    },
    {
      img: "https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg",
      title: "Regulatory Framework Proposed",
      profile:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1020",
      name: "Emma Samanta",
      time: "4",
    },
  ]);
  return (
    <div>
      <LeftAlignText data={data} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {news.map((card, index) => (
          <NewsCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Update;
