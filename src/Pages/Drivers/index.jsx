import React from 'react'
import DriverCardA from '../../Cards/DriverCardA'
import drivers from '../../data/driver/drivers.json' 
import { Link } from 'react-router-dom'

const Drivers = () => {

  const rows = []
  for (let i = 0; i < drivers.length; i += 4) {
    rows.push(drivers.slice(i, i + 4))
  }

  return (
    <div className='w-full relative flex flex-col bg-[#1C2541] gap-4'>

      <div className='flex flex-col justify-center items-center w-full relative m-4'>
        <div className='w-full px-10 flex flex-col gap-1'>
          <h1 className='font-extrabold text-5xl text-white'>F1 DRIVERS</h1>
          <p className='font-mono text-xl text-white'>
            Find the current Formula 1 drivers for the 2026 season
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-7 relative'>

        {rows.map((row, rowIndex) => (

          <div key={rowIndex} className='w-full flex justify-center gap-5'>

            {row.map((driver, index) => (

              <Link
                key={index}
                to={`/drivers/${driver.num}`}
                className='hover:scale-[1.02] transition duration-300'
              >
                <DriverCardA {...driver} />
              </Link>

            ))}

            {row.length < 4 &&
              Array.from({ length: 4 - row.length }).map((_, i) => (
                <div key={i} className='opacity-0 h-65 w-95'></div>
              ))
            }

          </div>

        ))}

      </div>

    </div>
  )
}

export default Drivers
