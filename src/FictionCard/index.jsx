import React from 'react'
const FictionCard = ({ title, description }) => {
  return (
    <div className='group bg-black h-92 w-92 hover:h-95 hover:w-95 flex flex-col justify-center items-center relative rounded border-2 hover:border-[#5BC0BE] transition-all duration-300'>
      <div className='w-86 h-42 group-hover:h-45 group-hover:w-88 bg-white absolute top-4 rounded transition-all duration-300'></div>
      <div className='h-38 w-86 absolute bottom-2 flex flex-col group-hover:w-88 group-hover:h-40 transition-all duration-300'>
        <div className='absolute left-1'>
          <h2 className='text-white text-2xl hover:text-[28px] transition-all duration-300 border-b-2 border-transparent group-hover:border-[#6FFFE9]'>
            {title}
          </h2>
        </div>
        <div className='absolute left-1 bottom-18'>
          <p className='text-white'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FictionCard