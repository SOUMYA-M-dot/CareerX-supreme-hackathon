import React from 'react'

const SuCard = ({no,text}) => {
  return (
    <div>
      <h1 className='hero-text font-extrabold text-[#003694] text-[5.6vw]'>{no}</h1>
      <h6 className='text-center text-[1.4vw] text-black'>{text}</h6>
    </div>
  )
}

export default SuCard