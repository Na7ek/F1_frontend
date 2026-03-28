import React from 'react'
import { SiF1 } from "react-icons/si";
import fia_logo from "../assets/output-onlinepngtools.png";
import fia_new from "../assets/fia_new.png"

const Header = () => {
  return (
    <div>
      <header className='flex justify-center items-center bg-[#0B132B] h-20 w-100%'>
        <div className='flex gap-60 absolute left-8'>
          <button className='text-[#5BC0BE] hover:text-[#6FFFE9]'><SiF1 className='w-27 h-27 hover:h-30 hover:w-30 transition-all duration-200 cursor-pointer' /></button>
          <div className='flex justify-center items-center gap-25'>
            <button className='text-white border-b-2 border-transparent 
            hover:border-[#6FFFE9] hover:text-white hover:scale-115 transition-all duration-300 cursor-pointer'><p>Teams</p></button>
            <button className='text-white border-b-2 border-transparent 
            hover:border-[#6FFFE9] hover:text-white hover:scale-115 transition-all duration-300 cursor-pointer'><p>Drivers</p></button>
            <button className='text-white border-b-2 border-transparent 
            hover:border-[#6FFFE9] hover:text-white  hover:scale-115 transition-all duration-300 cursor-pointer'><p>Schedule</p></button>
            <button className='text-white border-b-2 border-transparent 
            hover:border-[#6FFFE9] hover:text-white  hover:scale-115 transition-all duration-300 cursor-pointer'><p>Results</p></button>
            <button className='text-white  border-b-2 border-transparent 
            hover:border-[#6FFFE9] hover:text-white  hover:scale-115 transition-all duration-300 cursor-pointer'><p>Fantasy & Gaming</p></button>
            <button className='text-white  border-b-2 border-transparent 
            hover:border-[#6FFFE9] hover:text-white  hover:scale-115 transition-all duration-300 cursor-pointer'><p>Hall of Fame</p></button>
          </div>
        </div>
        <button className='absolute right-8 group'>
        <div className='relative h-10 w-20 justify-center items-center flex'>
            <img className='absolute h-full group-hover:opacity-0' src={fia_logo} alt="" />
            <img className='absolute h-full opacity-0 group-hover:opacity-100 group-hover:h-11 transition-all duration-300 cursor-pointer' src={fia_new} alt="" />
          </div>
          </button>
      </header>
    </div>
  )
}

export default Header