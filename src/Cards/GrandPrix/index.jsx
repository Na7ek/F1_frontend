import React from 'react'
import { LiaFlagCheckeredSolid } from "react-icons/lia";

const GrandPrix = ({ round, country, title, date, trackImg, flag, finished }) => {

  const isFinished = finished === "Yes";

  return (
    <div className='group relative h-55 w-120 bg-black border-2 rounded-xl hover:border-[#5BC0BE] transition-all duration-300 hover:h-57 hover:w-125 cursor-pointer'>
      
      <div className='absolute flex flex-col justify-center gap-2 left-5 top-5 h-24 w-80'> 
        <div className='w-20'>
          <p className='text-gray-300 font-bold'>Round {round}</p>
        </div>

        <div className='flex h-11 items-center gap-2'>
          <div className='border-[3px] border-white rounded-4xl h-10 w-10'>
            <img src={flag} alt="" />
          </div>
          <div>
            <h2 className='text-3xl text-white border-b-2 border-transparent group-hover:border-[#6FFFE9] transition-all duration-300 hover:text-[32px]'>
              {country}
            </h2>
          </div>
        </div>

        <div>
          <p className='w-120 text-gray-300'>{title}</p>
        </div>
      </div>

      <div className='absolute right-5 bottom-1 h-20 w-25'>
        <img src={trackImg} alt="" />
      </div>

      <div className='absolute left-5 bottom-3 h-10 w-70 flex items-center text-white gap-2'>
        <p>{date}</p>

        {isFinished && (
          <LiaFlagCheckeredSolid className='text-[#6FFFE9] text-xl' />
        )}
      </div>
    </div>
  )
}

export default GrandPrix