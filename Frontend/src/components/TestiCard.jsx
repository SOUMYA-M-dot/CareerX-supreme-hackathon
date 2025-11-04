const TestiCard = ({pic, con, name, dsg}) => {
  return (
    <div className="flex w-[35vw] gap-[2vw] p-4 bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-xl border-neutral-400/20">
      <img className="object-cover h-[6vw] w-[6vw] rounded-full" src={pic} alt="" />
      <div className="">
        <p className="text-[1.05vw] font-thin leading-[1.4vw]">{con}</p>
        <h4 className="hero-text text-[1.3vw] leading-none mt-[1.2vw]">{name}</h4>
        <h5 className="text-[.98vw] mt-[.1vw] font-thin">{dsg}</h5>
      </div>

      
    </div>
  )
}

export default TestiCard