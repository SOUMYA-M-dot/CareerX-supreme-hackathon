import React from "react";

export default function Testimonials() {
  const data = [
    {
      stat: "81% say their teamwork is more efficient",
      quote: "We manage too many people to constantly be searching for stuff",
      desc: "In Twist, we waste less time and lose fewer conversations. Everyone loves that our team communication is finally organized and in one place.",
      author: "Chelle — CEO at Clarity Web Consulting",
      img: "https://via.placeholder.com/180",
      link: "#",
    },
    {
      stat: "78% say team communication is calmer",
      quote: "Twist shows more respect for my team’s time and attention",
      desc: "Switching from Slack was surprisingly easy. Collaborating in Twist is a lot less stressful because it’s designed to help people do deep, focused work.",
      author: "Richard — Designer at Balance",
      img: "https://via.placeholder.com/180",
      link: "#",
    },
    {
      stat: "76% say they're more in sync",
      quote: "Now that we’re using Twist, we’re much more connected",
      desc: "As a remote team, we’re still tightly connected. Twist’s focus on mindful team communication allows us to collaborate delightfully with ease and clarity.",
      author: "Daniel — President at KDM Theatrical",
      img: "https://via.placeholder.com/180",
      link: "#",
    }
  ];

  return (
    <section className="max-w-4xl mx-auto my-16 px-6">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-10 mb-20 flex-wrap ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <img
            src={item.img}
            alt={item.author}
            className="w-44 h-44 rounded-full object-cover shadow-xl"
          />

          <div className="flex-1 min-w-[250px]">
            <p className="text-sm text-gray-500 uppercase font-semibold">{item.stat}</p>

            <blockquote className="text-xl font-semibold text-gray-900 my-3">
              “{item.quote}”
            </blockquote>

            <p className="text-gray-600 text-[0.95rem]">{item.desc}</p>

            <p className="font-bold text-gray-800 mt-3">{item.author}</p>

            <a
              href={item.link}
              className="text-blue-600 text-sm mt-2 inline-block hover:underline"
            >
              Why they switched →
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
