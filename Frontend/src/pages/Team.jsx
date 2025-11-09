import React, { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      stat: "81% SAY THEIR TEAMWORK IS MORE EFFICIENT",
      quote: "We manage too many people to constantly be searching for stuff",
      description: "In CareerX, we waste less time and lose fewer conversations. Everyone loves that our team communication is finally organized and in one place.",
      name: "Chelle",
      title: "CEO of Chelle Weech Consulting",
      link: "Why Chelle Switched",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      decorations: ['circle', 'line', 'dot']
    },
    {
      id: 2,
      stat: "78% SAY TEAM COMMUNICATION IS CALMER",
      quote: "CareerX shows more respect for my team's time and attention",
      description: "Switching from Slack was surprisingly easy. Collaborating in CareerX is a lot less stressful because it's designed to help people do deep, focused work.",
      name: "Richard",
      title: "Designer at Balance",
      link: "Why Richard Switched",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      decorations: ['square', 'circle', 'arc']
    },
    {
      id: 3,
      stat: "76% SAY THEY'RE MORE IN SYNC",
      quote: "Now that we're using CareerX, we're much more connected",
      description: "As a remote team, we're still tightly connected. CareerX's focus on mindful team communication allows us to collaborate delightfully with ease and clarity.",
      name: "Daniel",
      title: "President of KGM Theatrical",
      link: "Why Daniel Switched",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      decorations: ['dots', 'line', 'circle']
    },
    {
      id: 4,
      stat: "85% SAY COLLABORATION IS SEAMLESS",
      quote: "CareerX transformed how our team works together",
      description: "The intuitive interface and powerful features make project management effortless. Our productivity has skyrocketed since making the switch.",
      name: "Sarah",
      title: "Project Manager at TechFlow",
      link: "Why Sarah Switched",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      decorations: ['circle', 'dots', 'arc']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeTestimonial];
  const isEven = activeTestimonial % 2 === 0;

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes draw {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-draw {
          animation: draw 1.5s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-[#1A1A1A] py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeTestimonial 
                    ? 'w-12 bg-[oklch(54.6%_0.245_262.881)]' 
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Card */}
          <div 
            key={currentTestimonial.id}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
              isEven ? '' : 'lg:grid-flow-dense'
            }`}
          >
            {/* Text Content */}
            <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} animate-slideInLeft`}>
              <div className="inline-block">
                <p className="text-xs font-bold text-[oklch(54.6%_0.245_262.881)] tracking-wider uppercase bg-[oklch(54.6%_0.245_262.881)]/10 px-4 py-2 rounded-full border border-[oklch(54.6%_0.245_262.881)]/20">
                  {currentTestimonial.stat}
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl text-gray-700 leading-none">"</div>
                <h2 className="text-3xl lg:text-4xl font-serif italic text-white leading-tight">
                  {currentTestimonial.quote}
                </h2>
              </div>

              <div className="border-l-4 border-[oklch(54.6%_0.245_262.881)] pl-6 py-2">
                <p className="text-gray-400 leading-relaxed">
                  {currentTestimonial.description}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-white">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {currentTestimonial.title}
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[oklch(54.6%_0.245_262.881)] font-medium hover:text-[oklch(64.6%_0.245_262.881)] transition group"
              >
                {currentTestimonial.link}
                <span className="transform group-hover:translate-x-1 transition">→</span>
              </a>
            </div>

            {/* Image with Decorations */}
            <div className={`relative flex justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'} animate-slideInRight`}>
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-500 rounded-full animate-pulse-slow opacity-50"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[oklch(54.6%_0.245_262.881)] rounded-full animate-float opacity-40"></div>
                <div className="absolute top-1/2 -right-16 w-20 h-20 border-4 border-[oklch(54.6%_0.245_262.881)] rounded-full animate-rotate opacity-30"></div>

                {/* Animated Lines */}
                <svg className="absolute -top-16 -left-16 w-32 h-32 opacity-20" viewBox="0 0 100 100">
                  <path
                    d="M10,50 Q30,10 50,50 T90,50"
                    stroke="oklch(54.6% 0.245 262.881)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="1000"
                    className="animate-draw"
                  />
                </svg>

                {/* Scattered Dots */}
                <div className="absolute top-10 -right-4 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 -right-8 w-2 h-2 bg-[oklch(54.6%_0.245_262.881)] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-32 -left-6 w-3 h-3 bg-[oklch(54.6%_0.245_262.881)] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Lines */}
                <div className="absolute top-16 right-4 w-16 h-0.5 bg-gradient-to-r from-[oklch(54.6%_0.245_262.881)] to-transparent rotate-45 animate-fadeIn"></div>
                <div className="absolute bottom-24 -left-8 w-20 h-0.5 bg-gradient-to-r from-[oklch(54.6%_0.245_262.881)] to-transparent -rotate-45 animate-fadeIn" style={{ animationDelay: '0.3s' }}></div>

                {/* Main Image */}
                <div className="relative z-10">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-[#2A2A2A] shadow-2xl shadow-[oklch(54.6%_0.245_262.881)]/20 transform hover:scale-105 transition duration-500">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                    />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[oklch(54.6%_0.245_262.881)]/20 blur-2xl -z-10 animate-pulse-slow"></div>
                </div>

                {/* Eye Icon with Animation */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#2A2A2A] rounded-full shadow-lg shadow-[oklch(54.6%_0.245_262.881)]/30 flex items-center justify-center animate-float border-2 border-[oklch(54.6%_0.245_262.881)]/30">
                  <div className="relative">
                    <div className="w-10 h-6 border-2 border-[oklch(54.6%_0.245_262.881)] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-[oklch(54.6%_0.245_262.881)] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-[#2A2A2A] shadow-lg hover:shadow-[oklch(54.6%_0.245_262.881)]/20 flex items-center justify-center text-gray-400 hover:text-[oklch(54.6%_0.245_262.881)] transition group border border-gray-800"
            >
              <span className="transform group-hover:-translate-x-1 transition text-xl">←</span>
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-[#2A2A2A] shadow-lg hover:shadow-[oklch(54.6%_0.245_262.881)]/20 flex items-center justify-center text-gray-400 hover:text-[oklch(54.6%_0.245_262.881)] transition group border border-gray-800"
            >
              <span className="transform group-hover:translate-x-1 transition text-xl">→</span>
            </button>
          </div>

          {/* All Testimonials Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`group relative ${
                  index === activeTestimonial ? 'scale-110' : 'opacity-60 hover:opacity-100'
                } transition-all duration-300`}
              >
                <div className="relative">
                  <div className={`w-full aspect-square rounded-2xl overflow-hidden border-4 ${
                    index === activeTestimonial 
                      ? 'border-[oklch(54.6%_0.245_262.881)] shadow-xl shadow-[oklch(54.6%_0.245_262.881)]/30' 
                      : 'border-[#2A2A2A] group-hover:border-[oklch(54.6%_0.245_262.881)]/50'
                  } transition-all`}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition"
                    />
                  </div>
                  {index === activeTestimonial && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[oklch(54.6%_0.245_262.881)] rounded-full animate-pulse"></div>
                  )}
                </div>
                <p className="text-sm font-medium text-white mt-3">{testimonial.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
