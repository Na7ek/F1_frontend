import React from 'react'
import GrandPrix from '../GrandPrix/index.jsx'
import races from '../data/races.json'

const Schedule = () => {

  const rows = [];
  for (let i = 0; i < races.length; i += 3) {
    rows.push(races.slice(i, i + 3));
  }

  return (
    <div className='w-full relative flex flex-col bg-[#1C2541] gap-4'>

      <div className='flex flex-col justify-center items-center w-full relative m-4'>
        <div className='w-full px-17 flex flex-col gap-1'>
          <h1 className='font-extrabold text-5xl text-white'>SCHEDULE</h1>
          <p className='font-mono text-xl text-white'>
            Find all 22 races of the 2026 season
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-7 relative'>
        
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='w-full flex justify-center gap-10'>
            
            {row.map((race, index) => (
              <GrandPrix key={index} {...race} />
            ))}

            {row.length < 3 &&
              Array.from({ length: 3 - row.length }).map((_, i) => (
                <div key={i} className='h-55 w-120 opacity-0'></div>
              ))
            }

          </div>
        ))}

      </div>
    </div>
  )
}

export default Schedule