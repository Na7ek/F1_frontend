import React from 'react'
import partnersGl from "../../data/partner/partnersGlobal.json"
import partnersOff from "../../data/partner/partnersOfficial.json"
import partnersReg from "../../data/partner/partnersReg.json"

const Partners = () => {
  return (
    <div className='w-full h-144 border-t-2 border-b-2 border-white flex flex-col'>
        <div className="h-58 bg-[#0B132B] flex flex-col items-center">
        <h1 className="text-white mt-7 ml-7 text-4xl self-start">OUR PARTNERS</h1>

        <div className="h-22 w-340 mt-10 flex justify-center items-center gap-7">
            {partnersGl.map((item, i) => (
            <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="h-17 w-25 flex justify-center items-center bg-white/0 hover:bg-white/30 transition-all duration-300 rounded">
                    <img src={item.img} alt="partner logo" className="h-10 w-auto object-contain" />
                </div>
            </a>
            ))}
        </div>
        </div>

        <div className='h-53 bg-[#1C2541] flex justify-center items-center'>

        <div className="flex flex-col gap-7 w-full">

        <div className="w-full flex justify-center gap-7">
            {partnersOff.slice(0, 11).map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="h-17 w-25 flex justify-center items-center bg-white/0 hover:bg-white/30 transition-all duration-300 rounded">
                <img src={item.img} alt="partner logo" className="h-10 w-auto object-contain" />
                </div>
            </a>
            ))}
        </div>

        <div className="w-full flex justify-center gap-7">
            {partnersOff.slice(11).map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="h-17 w-25 flex justify-center items-center bg-white/0 hover:bg-white/30 transition-all duration-300 rounded">
                <img src={item.img} alt="partner logo" className="h-10 w-auto object-contain" />
                </div>
            </a>
            ))}
        </div>
        </div>

        </div>
        
        <div className='h-33 bg-[#3A506B] flex justify-center items-center'>
        <div className="h-22 w-200 flex justify-center items-center gap-7">
            {partnersReg.map((item, i) => (
            <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="h-17 w-25 flex justify-center items-center bg-white/0 hover:bg-white/30 transition-all duration-300 rounded">
                    <img src={item.img} alt="partner logo" className="h-10 w-auto object-contain" />
                </div>
            </a>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Partners