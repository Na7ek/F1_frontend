import React from 'react'
import TeamCard from '../../Cards/TeamCard'
import teams from '../../data/team/teams.json'
import { Link } from 'react-router-dom'

const Teams = () => {

  const rows = []

  for (let i = 0; i < teams.length; i += 2) {
    rows.push(teams.slice(i, i + 2))
  }

  return (
    <div className='w-full relative flex flex-col bg-[#1C2541] gap-4'>

      <div className='flex flex-col justify-center items-center w-full relative m-4'>
        <div className='w-full px-13 flex flex-col gap-1'>
          <h1 className='font-extrabold text-5xl text-white'>F1 TEAMS</h1>

          <p className='font-mono text-xl text-white'>
            Find the current Formula 1 teams for the 2026 season
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-7 relative'>

        {rows.map((row, rowIndex) => (

          <div key={rowIndex} className='w-full flex justify-center gap-10'>

            {row.map((team, index) => (

              <Link
                key={index}
                to={`/teams/${team.ind}`}
                className='hover:scale-[1.02] transition duration-300'
              >
                <TeamCard {...team} />
              </Link>

            ))}

            {row.length < 2 &&
              <div className='opacity-0 h-65 w-190'></div>
            }

          </div>

        ))}

      </div>

    </div>
  )
}

export default Teams