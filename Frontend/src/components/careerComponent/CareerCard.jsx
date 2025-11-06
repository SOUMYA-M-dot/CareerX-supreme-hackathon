import React from 'react'
import { useNavigate } from 'react-router-dom'
import CareerWrapper from './CareerWrapper'

const CareerCard = ({ rating, desg, desc, skill, pay, company, field }) => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col w-[46vw] lg:w-[23vw] min-h-[50vw] lg:min-h-[30vw] bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-xl border-neutral-400/20 p-[2vw] lg:p-[1vw] mb-[2.5vw]'>

      <div className='save flex justify-end'>
        <div className='bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border rounded-md border-neutral-400/20 px-1 lg:px-2 text-[4.5vw] lg:text-[1.2vw] flex'>
          <h5 className='hidden lg:block'>Saved</h5>
          <i className="ri-bookmark-line"></i>
        </div>
      </div>

      <div className="image flex justify-between my-[4vw] lg:my-[.8vw] items-center">
        <div className="h-[12vw] lg:h-[5.3vw] overflow-hidden aspect-square rounded-full flex items-center justify-center border-[.1px] lg:border-[1px]">
          <img
            className='h-[10vw] lg:h-[4.5vw] aspect-square rounded-full object-cover'
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt=""
          />
        </div>

        <div className='flex flex-col gap-.3'>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`ri-star-fill text-[3.5vw] lg:text-[1.2vw] ${
                  i < rating ? "text-amber-300" : "text-neutral-500"
                }`}
              ></i>
            ))}
          </div>
          <h6 className='text-[3.5vw] lg:text-[1vw]'>Rating: {rating}.0</h6>
        </div>
      </div>

      <div className='mid-content flex flex-col'>
        <div className="head lg:my-[.5vw]">
          <h4 className='hero-text font-bold text-[5.5vw] lg:text-[2vw] leading-none min-h-[13vw] lg:min-h-[2.2vw]'>{desg}</h4>
          <h6 className='hidden lg:block leading-none text-[1vw]'>{desc}</h6>
        </div>

        <div className="mid min-h-[35vw] lg:min-h-[8vw] flex flex-col justify-start lg:mt-3">
          <ul className='text-neutral-300'>
            {skill.map((s, i) => (
              <li key={i} className='flex items-center gap-1 lg:gap-1.5'>
                <div className="dot lg:h-[.1vw] h-[.4vw] w-[2vw] lg:w-[.5vw] bg-neutral-300 rounded-full"></div>
                <h6 className='text-[3.5vw] lg:text-[.9vw]'>{s}</h6>
              </li>
            ))}
          </ul>
        </div>

        {/* Match Bar (static example) */}
        <div className="match-bar flex relative items-center gap-1.5">
          <h5 className='text-[3.7vw] lg:text-[1.1vw]'>Match:</h5>
          <div className="bg-white relative h-[1vw] lg:h-[.4vw] w-[27vw] lg:w-[15vw] rounded-full flex justify-start">
            <div className="bg-[#1A4FCE] w-[80%] h-full rounded-full"></div>
          </div>
          <h4 className='hidden lg:block text-[1.1vw]'>80%</h4>
        </div>
      </div>

      {/* Divider */}
      <div className="line w-[100%] h-[.2vw] lg:h-[.1vw] bg-white my-[3vw] lg:my-[1vw] rounded-full"></div>

      {/* Bottom */}
      <div className="bottom-part flex justify-between">
        <div>
          <h4 className='text-[4vw] lg:text-[1.3vw]'>$ {pay}k <span className='hidden lg:inline'>/month</span></h4>

          <div className='hidden lg:flex relative items-center'>
              <img className='h-4 aspect-square absolute left-3' src="../src/assets/images/google.png" alt="" /> <img className='h-4 aspect-square absolute left-2' src="../src/assets/images/twitter.png" alt="" /> <img className='h-4 aspect-square absolute' src="../src/assets/images/dribble.png" alt="" />

            <h5 className='relative left-10 text-[.9vw]'>+{company} company</h5>
          </div>
        </div>

        <div className='w-[45%] lg:w-[35%] bg-blue-600/80 flex items-center justify-center rounded-full lg:rounded-xl text-[3vw] lg:text-[1.2vw]' onClick={() => navigate(`/career-wrapper/roadmap?field=${field}`)}>
          <h4>Explore</h4>
          <i className="ri-arrow-right-line"></i>
        </div>
      </div>

    </div>
  )
}

export default CareerCard
