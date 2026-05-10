import React from 'react'

import teams from "../../data/team/teams.json"
import drivers from "../../data/driver/drivers.json"
import results from "../../data/race/results.json"
import races from "../../data/race/races.json"

const RaceTable = () => {

  const table = races
    .filter((race) => race.finished)
    .slice(0, 4)
    .map((race) => {
      const raceResult = results.find((r) => r.round === race.round)
      const winner = raceResult.results.find((r) => r.pos === 1)
      const driver = drivers.find((d) => d.num === winner.num)
      const team = teams.find((t) => t.name === driver.team)

      return {
        round: race.round,
        country: race.country,
        flag: race.flag,
        date: raceResult.date,
        driverImg: driver.driverImg,
        driverLName: driver.lName,
        teamLogo: team.logo,
        teamName: team.name,
        laps: winner.laps,
        time: winner.time,
        color: team.colorD
      }
    })

  return (
    <div>
      <h2 className='text-white text-5xl mb-5'>2026 RACE RESULTS</h2>

      <div className='h-90 w-400 border-2 border-white rounded-lg items-center bg-[#252F50]'>

        <div className='h-16 w-398 flex text-[#5BC0BE] mt-8 relative items-center uppercase'>
          <p className='absolute left-10'>Grand Prix</p>
          <p className='absolute left-90'>Date</p>
          <p className='absolute left-160'>Winner</p>
          <p className='absolute right-160'>Team</p>
          <p className='absolute right-90'>Laps</p>
          <p className='absolute right-12'>Time</p>
          <div className="w-380 h-0.5 bg-[#5BC0BE] absolute bottom-[0.5px] left-7" />
        </div>

        <ul className='w-398'>
          {table.map((row, index) => (
            <li key={row.round} className='h-14 w-398 flex items-center relative'>

              
              <div className='bg-white h-8 w-8 border-2 border-white rounded-full absolute left-10 overflow-hidden'>
                <a href={`/Schedule/${row.round}`}><img src={row.flag} alt={row.country} className='h-full w-full object-cover' /></a>
              </div>

              <p className='text-white absolute left-20'><a href={`/Schedule/${row.round}`}>{row.country}</a></p>

              <p className='text-white absolute left-90'>{row.date}</p>

              <div className={`h-8 w-8 rounded-full absolute left-160 flex justify-center items-center overflow-hidden border-2 border-white ${row.color}`}>
                <div className="h-7 w-7"><img src={row.driverImg} className="h-20 absolute top-px w-full object-cover"/></div>
              </div>

              <p className='text-white absolute left-170'>{row.driverLName}</p>

              <div className={`${row.color} h-8 w-8 border-2 border-white rounded-full absolute right-163 overflow-hidden`}>
                <div className='h-7 w-7'><img src={row.teamLogo} alt={row.teamName} className='h-full w-full object-contain' /></div>
              </div>

              <p className='text-white absolute right-136'>{row.teamName}</p>

              <p className='text-white absolute right-92'>{row.laps}</p>

              <p className='text-white absolute right-12'>{row.time}</p>

              {index !== table.length - 1 && (
                <div className='w-380 h-[0.5px] bg-gray-400 absolute bottom-[0.5px] left-7' />
              )}

            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default RaceTable