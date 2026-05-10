import React from 'react'

const TeamCard = ({ name, driver1, driver2, carImg, gradient, colorT, logo, colorD, imgD1, imgD2 }) => {
  return (
    <div className={`group ${gradient} h-65 w-190 relative rounded-xl border-white border-2 hover:h-68 hover:w-195 transition-all duration-300 cursor-pointer`}>
      
      <h2 className='absolute top-6 left-6 text-3xl text-white border-b-2 border-transparent group-hover:border-white transition-all duration-300'>
        {name}
      </h2>

      <div className={`absolute right-6 top-6 ${colorT} h-13 w-13 border-[3px] border-white rounded-4xl flex justify-center items-center`}><img className="h-9 w-100%" src={logo} alt=""/></div>

      <div className='relative flex items-center justify-center top-17 left-6 h-10 w-100 gap-1'>
        
        <div className='absolute left-2 flex justify-center items-center gap-3'>
        <div className={`h-9 w-9 border-2 border-white ${colorD} rounded-4xl relative flex items-center justify-center overflow-hidden`}><img className="h-22 w-100% absolute top-px" src={imgD1} alt=""/></div>
          <h2 className='text-white text-lg'>{driver1}</h2>
        </div>

        <div className='absolute right-2 flex justify-center items-center gap-3'>
        <div className={`h-9 w-9 border-2 border-white ${colorD} rounded-4xl relative flex items-center justify-center overflow-hidden`}><img className="h-22 w-100% absolute top-px" src={imgD2} alt=""/></div>
          <h2 className='text-white text-lg'>{driver2}</h2>
        </div>

      </div>

      <div className='h-30 w-130 absolute left-6 bottom-4'>
        <img src={carImg} alt="" />
      </div>
    </div>
  )
}

export default TeamCard