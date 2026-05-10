import React from 'react'

const DriverCardA = ({ fName, lName, team, number, driverImg, bgColor, flag }) => {
  return (
    <div className={`h-65 w-95 border-2 border-white rounded-xl ${bgColor} relative hover:scale-105 transition-all duration-300 group cursor-pointer`}>
        <div className='absolute top-2 left-5 h-40 w-35 flex flex-col justify-center gap-2'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <div className='h-7 flex items-bottom'><h2 className='border-b-2 border-transparent group-hover:border-white transition-all duration-300 text-white text-2xl'>{fName}</h2></div>
                    <div className='h-7 flex items-bottom'><h2 className='border-b-2 border-transparent group-hover:border-white transition-all duration-300 text-white text-2xl'>{lName}</h2></div>
                </div>
                <div className='h-4 flex items-center'><p className='text-white text-xs'>{team}</p></div>
            </div>
            <div className='h-9 w-12 flex items-center'><img className='h-full w-full object-contain'src={number} alt="" /></div>     
        </div>
        <div className='w-8 h-8 border-2 border-white rounded-4xl absolute bottom-3 left-5'><img src={flag} alt="" /></div>
        <div className='absolute top-5 right-5 h-59 w-50 overflow-hidden'><img src={driverImg} alt="" /></div>
        </div>
  )
}

export default DriverCardA