const LeftAlignText = ({data}) => {
  
  return (
    
    <div className="align-left w-[97%] hero-text mt-[5vw]">
        <h4 className="flex items-center gap-2 bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border border-blue-500 w-fit border-dashed px-5 py-2 font-light rounded-full">
          <div className="bg-blue-500 rounded-full h-[.8vw] w-[.8vw]"></div>
          <span className="text-blue-500 ">{data.tag}</span>
        </h4>
        <div className="lg:flex justify-between items-baseline-last mt-8 mb-15">
          
          <h3 className="text-[3vw] leading-none w-[30%]">{data.title}</h3>
          {data.desc!==""?
          <p className="text-[1.45vw] w-[40%] leading-[2vw] opacity-70">
            {data.desc}
          </p>
          :
          <div className="w-[71vw] h-[2vw] bg-transparent">

          </div>}

        </div>
      </div>
  )
}

export default LeftAlignText