const TestiCard = ({pic, con, name, dsg}) => {
  return (
    <div className="flex flex-col lg:flex-row w-[80vw] lg:w-[35vw] gap-[2vw] p-4 bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-xl border-neutral-400/20">
      <img className="object-cover h-[15vw] lg:h-[6vw] w-[15vw] lg:w-[6vw] rounded-full" src={pic} alt="" />
      <div className="">
        <p className="text-[3.5vw] lg:text-[1.15vw] font-thin leading-none">{con}</p>
        <h4 className="text-[4.2vw] text-[#195AC4] lg:text-[1.3vw] font-bold leading-none mt-[3vw] lg:mt-[1.2vw] ">{name}</h4>
        <h5 className="text-[3.2vw] lg:text-[.98vw] lg:mt-[.1vw] font-thin">{dsg}</h5>
      </div>

      
    </div>
  )
}

export default TestiCard