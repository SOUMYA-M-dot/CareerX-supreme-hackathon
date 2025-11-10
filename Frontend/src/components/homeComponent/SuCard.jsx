import React from 'react'

const SuCard = ({no,text}) => {
  return (
    <div className=' flex flex-col items-center'>
      <h1 className='hero-text font-extrabold text-white text-[11vw] lg:text-[5.6vw]'>{no}</h1>
      <h6 className='text-center text-[3.5vw] lg:text-[1.4vw] text-white leading-none'>{text}</h6>
    </div>
  )
}

export default SuCard