import React, { useState } from "react";
import FloatingChatbox from "../components/FloatingChatbox";

export default function LearningDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const primary = "oklch(54.6% 0.245 262.881)";

  const courses = [
    { id: 1, title: "Web Development Bootcamp", progress: 75, lessons: 120, completed: 90, time: "45h left", color: primary, icon: "💻" },
    { id: 2, title: "Data Science Fundamentals", progress: 45, lessons: 80, completed: 36, time: "68h left", color: primary, icon: "📊" },
    { id: 3, title: "UI/UX Design Mastery", progress: 90, lessons: 60, completed: 54, time: "12h left", color: primary, icon: "🎨" },
  ];

  const stats = [
    { label: "Courses Enrolled", value: "12", icon: "📚" },
    { label: "Hours Learned", value: "248", icon: "⏱️" },
    { label: "Certificates", value: "8", icon: "🏆" },
    { label: "Streak Days", value: "45", icon: "🔥" },
  ];

  const activities = [
    { title: 'Completed "React Hooks" lesson', time: "2 hours ago", type: "completed" },
    { title: 'Started "Advanced CSS" course', time: "5 hours ago", type: "started" },
    { title: 'Earned "JavaScript Master" badge', time: "1 day ago", type: "achievement" },
    { title: 'Joined "Web Dev Community"', time: "2 days ago", type: "social" },
  ];

  const upcomingClasses = [
    { title: "Live: JavaScript ES6 Features", instructor: "John Doe", time: "Today, 3:00 PM", attendees: 145 },
    { title: "Workshop: React Best Practices", instructor: "Jane Smith", time: "Tomorrow, 10:00 AM", attendees: 89 },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="min-h-screen bg-[#1A1A1A] pt-[3rem]">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-[#222] rounded-2xl p-6 border border-white/10 shadow-md animate-fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                  style={{ backgroundColor: primary }}
                >
                  {s.icon}
                </div>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Courses */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#222] rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Continue Learning</h2>
                  <button style={{ color: primary }} className="text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {courses.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 rounded-xl border border-white/10 bg-[#1F1F1F] hover:border-white/20 transition group"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                          style={{ background: primary }}
                        >
                          {c.icon}
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold mb-2 group-hover:text-white">{c.title}</h3>

                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span>{c.completed}/{c.lessons} lessons</span>
                            <span>•</span>
                            <span>{c.time}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-[#333] rounded-full overflow-hidden">
                              <div
                                className="h-full"
                                style={{
                                  width: `${c.progress}%`,
                                  background: primary,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-300">{c.progress}%</span>
                          </div>
                        </div>

                        <button
                          className="px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition"
                          style={{ background: primary }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming classes */}
              <div className="bg-[#222] rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-bold mb-6">Upcoming Live Classes</h2>

                <div className="space-y-4">
                  {upcomingClasses.map((cls, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-white/10 bg-[#1F1F1F]"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{cls.title}</h3>
                        <span
                          className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                          style={{ color: primary }}
                        >
                          Live
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">by {cls.instructor}</p>

                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <span>⏰ {cls.time}</span>
                        <span>👥 {cls.attendees} attending</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <div className="bg-[#222] rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

                <div className="space-y-4">
                  {activities.map((a, i) => (
                    <div key={i} className="flex gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2"
                        style={{ backgroundColor: primary }}
                      ></div>

                      <div>
                        <p className="text-sm font-medium">{a.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <div
                className="rounded-2xl p-6 text-white shadow-lg"
                style={{ background: primary }}
              >
                <h3 className="text-lg font-bold mb-4">Ready to learn?</h3>
                <p className="text-sm mb-4">Explore new courses and expand your skills today!</p>

                <button className="w-full bg-white text-black rounded-xl py-3 font-semibold hover:bg-gray-200 transition">
                  Browse Courses
                </button>
              </div>

              {/* Badges */}
              <div className="bg-[#222] rounded-2xl p-6 border border-white/10">
                <h2 className="text-lg font-bold mb-4">Recent Badges</h2>

                <div className="grid grid-cols-3 gap-3">
                  {["🏅", "⭐", "💎", "🎯", "🚀", "👑"].map((b, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl flex items-center justify-center text-3xl bg-[#1F1F1F] border border-white/10 hover:scale-110 transition"
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
        <FloatingChatbox />
      </div>
    </>
  );
}
