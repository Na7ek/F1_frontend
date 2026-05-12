import React, { useState } from 'react'
import RaceTable from '../../Tables/RaceTable'
import WCC from '../../Tables/WCC'
import WDC from '../../Tables/WDC'

const Results = () => {
  const [tab, setTab] = useState('races')

  return (
    <div>
      <h1 className='text-white text-[55px] ml-13'>RESULTS</h1>

      <div className='h-10 w-100 ml-13 flex items-center gap-12'>
        <button
          onClick={() => setTab('races')}
          className={`h-10 hover:scale-110 transition-all duration-300 cursor-pointer w-fit border-b-2 ${
            tab === 'races'
              ? 'border-[#6FFFE9]'
              : 'border-transparent hover:border-[#6FFFE9]'
          }`}
        >
          <p className="text-white text-lg">Races</p>
        </button>

        <button
          onClick={() => setTab('drivers')}
          className={`h-10 hover:scale-110 transition-all duration-300 cursor-pointer w-fit border-b-2 ${
            tab === 'drivers'
              ? 'border-[#6FFFE9]'
              : 'border-transparent hover:border-[#6FFFE9]'
          }`}
        >
          <p className="text-white text-lg">Drivers</p>
        </button>

        <button
          onClick={() => setTab('teams')}
          className={`h-10 hover:scale-110 transition-all duration-300 cursor-pointer w-fit border-b-2 ${
            tab === 'teams'
              ? 'border-[#6FFFE9]'
              : 'border-transparent hover:border-[#6FFFE9]'
          }`}
        >
          <p className="text-white text-lg">Teams</p>
        </button>
      </div>

      <div className='ml-13 mt-6 mr-13'>
        {tab === 'races' && <RaceTable />}
        {tab === 'drivers' && <WDC />}
        {tab === 'teams' && <WCC />}
      </div>
    </div>
  )
}

export default Results