import React, { useState } from "react";

const FloatingChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hey! 👋 How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isBot: false }]);
      setInputValue("");

      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: "Got it! I'll get back to you soon ✨", isBot: true }
        ]);
      }, 900);
    }
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`
            chat-window fixed z-50 flex flex-col overflow-hidden border border-[#2A2A2A] shadow-2xl
            transition-all duration-500 ease-in-out
            ${isFullscreen
              ? "top-22 left-0 w-full h-[calc(100vh-4rem)] rounded-none"  /* ✅ BELOW NAVBAR */
              : "bottom-24 right-6 w-96 h-[32rem] rounded-2xl"
            }
          `}
          style={{ background: "#1A1A1A" }}
        >

          {/* Header */}
          <div
            className="p-4 flex items-center justify-between"
            style={{ background: "oklch(54.6% 0.245 262.881)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <h3 className="text-white font-semibold">CareerX Assistant</h3>
                <p className="text-white/80 text-xs">Always here to help</p>
              </div>
            </div>

            {/* Fullscreen + Close Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-white/80 hover:bg-white/20 rounded-lg p-2 transition"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? "🗗" : "🗖"}
              </button>

              <button
                onClick={() => {
                  setIsFullscreen(false);
                  setIsOpen(false);
                }}
                className="text-white/80 hover:bg-white/20 rounded-lg p-2 transition"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message flex ${msg.isBot ? "justify-start" : "justify-end"} animate-slideUp`}
              >
                <div
                  className="max-w-[75%] px-4 py-3 rounded-2xl text-sm"
                  style={{
                    background: msg.isBot ? "#2A2A2A" : "oklch(54.6% 0.245 262.881)",
                    color: msg.isBot ? "#D1D1D1" : "#fff",
                    border: msg.isBot ? "1px solid #333" : "none"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#2A2A2A] bg-[#1A1A1A]">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type something..."
                className="flex-1 px-4 py-2 rounded-lg bg-[#2A2A2A] text-white placeholder-gray-400 border border-[#3A3A3A] focus:outline-none focus:ring-2"
              />
              <button
                onClick={handleSend}
                className="px-6 py-2 rounded-lg text-white transition shadow-md hover:shadow-lg"
                style={{ background: "oklch(54.6% 0.245 262.881)" }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isFullscreen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 w-16 h-16 text-white rounded-full shadow-xl flex items-center justify-center text-2xl transition hover:scale-110 z-50"
          style={{
            background: "oklch(54.6% 0.245 262.881)",
            animation: "float 3s ease-in-out infinite"
          }}
        >
          {isOpen ? "✕" : "💬"}
        </button>
      )}
    </>
  );
};

export default FloatingChatbox;
