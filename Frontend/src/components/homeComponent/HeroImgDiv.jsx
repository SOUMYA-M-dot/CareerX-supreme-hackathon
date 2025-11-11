import React from "react";
import didi from "../../assets/images/didi.jpg";
import dada from "../../assets/images/dada.png";
import opp from "../../assets/images/pg.jpg";
import ram from "../../assets/images/ram.jpg";

const HeroImgDiv = () => {
  return (
    <>
      <style>{`
        .img-container {
          transition: all 0.4s ease;
        }
        
        .img-container img {
          filter: grayscale(100%);
          transition: all 0.4s ease;
        }
        
        .img-container:hover {
          transform: translateY(-10px);
        }
        
        .img-container:hover img {
          filter: grayscale(0%);
        }
      `}</style>
      
      <div className="flex gap-[3vw] mt-[5vw]">
        {/* Box 1 */}
        <div className="img-container h-[35vw] w-[15vw] rounded-[3.5vw] overflow-hidden border border-neutral-400/20">
          <img
            src={didi}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 2 */}
        <div className="img-container h-[35vw] w-[15vw] rounded-[3.5vw] overflow-hidden border border-neutral-400/20">
          <img
            src={dada}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 3 */}
        <div className="img-container h-[35vw] w-[15vw] rounded-[3.5vw] overflow-hidden border border-neutral-400/20">
          <img
            src={ram}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 4 */}
        <div className="img-container h-[35vw] w-[15vw] rounded-[3.5vw] overflow-hidden border border-neutral-400/20">
          <img
            src={opp}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HeroImgDiv;
