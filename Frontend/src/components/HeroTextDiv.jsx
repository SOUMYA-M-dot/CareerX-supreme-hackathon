import { useNavigate } from "react-router-dom";

const HeroTextDiv = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-1 mt-[8vw]">
        <h1 className="hero-text text-[13vw] lg:text-[5.5vw] text-center leading-[14vw] lg:leading-[5.5vw]">
          Your Friendly <span className="inline">Guide</span> to<br className="hidden lg:block" /> the <span className="inline">Career</span> World
        </h1>
        <p className="text-center leading-none w-[65%] text-[4vw] lg:text-[1.3vw] lg:leading-[1.5vw] opacity-90">
          Join our community to learn, share and grow <br className="hidden lg:block"/> in the exciting world of
          tech & IT.
        </p>
        <button
          className="bg-[#006DFF] hover:bg-[#004196] hover:text-white backdrop-blur-[1px] border rounded-full border-neutral-400/20 px-5 mt-2 lg:text-[1.2vw] lg:px-8 lg:py-1"
          onClick={() => {
            navigate("/register");
          }}
        >
          Start Learning<i className="ri-arrow-right-line inline lg:text-[1.3vw]"></i>
        </button>
      </div>
  )
}

export default HeroTextDiv