import React from 'react'

const FictionCard = ({ title, description, picture, link }) => {
  return (
    <a href={(`${link}`)} target='_blank'>
      <div className='group bg-black h-92 w-92 hover:h-95 hover:w-95 flex flex-col justify-center items-center relative rounded-lg border-2 hover:border-[#5BC0BE] transition-all duration-300'>
      <div className='w-86 h-42 group-hover:h-45 group-hover:w-88 absolute top-4 rounded transition-all duration-300 flex items-center bg-cover bg-center bg-black cursor-pointer' style={{ backgroundImage: `url(${picture})` }}></div>
      <div className='h-38 w-86 absolute bottom-2 flex flex-col group-hover:w-88 group-hover:h-40 transition-all duration-300'>
        <div className='flex flex-col absolute-left-1 gap-2 relative'>
        <div className=''>
        <h2 className='text-2xl text-white w-fit border-b-2 border-transparent group-hover:border-[#5BC0BE] transition-all duration-300'>
            {title}
          </h2>
        </div>
        <div className=''>
          <p className='text-white'>{description}</p>
        </div>
        </div>
      </div>
    </div>
    </a>
  )
}

export default FictionCard