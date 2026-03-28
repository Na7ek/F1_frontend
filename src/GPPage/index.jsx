import React from 'react'
import TableGP from '../TableGP'

const GPPage = () => {
  return (
    <div className='bg-[#1C2541] flex flex-col'>
        <div className="h-120 bg-cover bg-center rounded border-b-2 border-t-2 border-white relative" style={{backgroundImage: "url('https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Great%20Britain.webp')"}}>
            <div className='absolute bottom-3 left-3'><h2 className='text-white text-5xl'>FORMULA 1 PIRELLI BRITISH GRAND PRIX 2026</h2></div>
        </div>
        <div className='h-10 w-full'></div>
        <div className='w-full h-170 relative'>
            <div className='absolute left-13'><h1 className='text-white text-5xl'>SCHEDULE</h1></div>
            <div className='w-300 h-112 absolute top-20 left-13 border-2 border-white'>
            <ul className='relative'>
            <li className='h-22 w-300 flex justify-center gap-3 items-center relative'>
                    <div className='w-16 h-14 bg-white absolute left-7'></div>
                    <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                    <div className='w-80 h-14 bg-white absolute left-28'></div>
                    <div className='w-35 h-14 bg-white absolute right-7'></div>
                </li>
                <div className='w-270 h-0.5 absolute left-15 bg-white'></div>
                <li className='h-22 w-300 flex justify-center gap-3 items-center relative'>
                    <div className='w-16 h-14 bg-white absolute left-7'></div>
                    <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                    <div className='w-80 h-14 bg-white absolute left-28'></div>
                    <div className='w-35 h-14 bg-white absolute right-7'></div>
                </li>
                <div className='w-270 h-0.5 absolute left-15 bg-white'></div>
                <li className='h-22 w-300 flex justify-center gap-3 items-center relative'>
                    <div className='w-16 h-14 bg-white absolute left-7'></div>
                    <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                    <div className='w-80 h-14 bg-white absolute left-28'></div>
                    <div className='w-35 h-14 bg-white absolute right-7'></div>
                </li>
                <div className='w-270 h-0.5 absolute left-15 bg-white'></div>
                <li className='h-22 w-300 flex justify-center gap-3 items-center relative'>
                    <div className='w-16 h-14 bg-white absolute left-7'></div>
                    <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                    <div className='w-80 h-14 bg-white absolute left-28'></div>
                    <div className='w-35 h-14 bg-white absolute right-7'></div>
                </li>
                <div className='w-270 h-0.5 absolute left-15 bg-white'></div>
                <li className='h-22 w-300 flex justify-center gap-3 items-center relative'>
                    <div className='w-16 h-14 bg-white absolute left-7'></div>
                    <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                    <div className='w-80 h-14 bg-white absolute left-28'></div>
                    <div className='w-35 h-14 bg-white absolute right-7'></div>
                </li>
            </ul>
            </div>
        </div>
        <div className='w-full h-170 relative' id='Result'>
            <div><h1 className='text-white'>Schedule</h1></div>
            <TableGP/>
        </div>
    </div>
  )
}

export default GPPage