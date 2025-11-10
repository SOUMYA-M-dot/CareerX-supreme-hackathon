const LeftAlignText = ({data}) => {
  
  return (
    
    <div className="align-left w-[97%] hero-text mt-[6vw] lg:mt-[5vw]">
        <h4 className="flex items-center gap-1 lg:gap-2 bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border border-blue-500 w-fit border-dashed px-2 lg:px-5 py-1 lg:py-2 font-light rounded-full">
          <div className="bg-blue-500 rounded-full h-[2vw] lg:h-[.6vw] w-[2vw] lg:w-[.6vw]"></div>
          <span className="text-blue-500 text-[3.7vw] lg:text-[1.3vw]">{data.tag}</span>
        </h4>
        <div className="flex flex-col lg:flex-row justify-between items-baseline-last mt-4 lg:mt-8 mb-10 lg:mb-15 gap-2 lg:gap-0">
          
          <h3 className="text-[8vw] lg:text-[3vw] leading-none lg:w-[30%]">{data.title}</h3>
          {data.desc!==""?
          <p className="text-[4vw] lg:text-[1.45vw] lg:w-[40%] leading-[4.5vw] lg:leading-[2vw] opacity-70">
            {data.desc}
          </p>
          :
          <div className="w-full lg:w-[71vw] h-[2vw] bg-transparent">

          </div>}

        </div>
      </div>
  )
}

export default LeftAlignText