import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="cursor-none h-[6vw] w-[6vw] pointer-events-none flex items-center justify-center bg-transparent border border-white z-99999 rounded-full fixed"
      style={{
        top: position.y - 45, // adjust center based on size
        left: position.x - 45,
        mixBlendMode: "difference"
      }}
    >
      {/* <div className="bg-transparent rounded-full h-[70%] w-[70%] blur-[4px]"></div> */}
    </div>
  );
};

export default CustomCursor;
