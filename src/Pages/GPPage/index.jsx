import React from 'react'
import { useParams } from 'react-router-dom'
import { FaCircleInfo } from "react-icons/fa6";
import { LiaFlagCheckeredSolid } from "react-icons/lia";

import races from '../../data/race/races.json'
import raceData from '../../data/race/raceData.json'
import scheduleAll from '../../data/race/schedule.json'
import resultsAll from '../../data/race/results.json'
import drivers from '../../data/driver/drivers.json'
import teams from '../../data/team/teams.json'


const GPPage = () => {

  const { round } = useParams()
  const roundNum = Number(round)

  const main = races.find(r => r.round === roundNum)
  const data = raceData.find(r => r.round === roundNum)
  const schedule = scheduleAll.find(s => s.round === roundNum)
  const results = resultsAll.find(r => r.round === roundNum)

  const table = results?.results.map((entry) => {
    const driver = drivers.find(d => d.num === entry.num)
    const team = teams.find(t => t.ind === driver?.ind)
    return {
      pos: entry.pos,
      num: entry.num,
      name: driver?.fullName,
      flag: driver?.flag,
      picture: driver?.driverImg,
      teamName: team?.name,
      teamLogo: team?.logo,
      color: team?.colorD,
      laps: entry.laps,
      time: entry.time,
      pts: entry.pts,
      teamNum: team?.ind,
      driverNum: driver?.num
    }
  }) ?? []

  if (!main || !data || !schedule) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#1C2541]">
        <h2 className="text-5xl">Race not found</h2>
      </div>
    )
  }

  return (
    <div className="bg-[#1C2541] flex flex-col">

      <div
        className="h-120 bg-cover bg-center rounded border-b-2 border-t-2 border-white relative"
        style={{
          backgroundImage:
            `url(${data.bgImg})`, backgroundSize: "cover", backgroundPosition: "center"
        }}
      >
        <div className='h-120 w-full bg-linear-to-t from-black opacity-40'></div>
        <div className="absolute bottom-3 left-3">
          <h1 className="text-white text-5xl uppercase">
            {main.title}
          </h1>
        </div>
      </div>

      <div className="h-10 w-full" />

      <div className="relative h-150">
        <div className="absolute left-13 top-0">
          <h2 className="text-white text-6xl">SCHEDULE</h2>
        </div>

        {main.finished ?
          <div className='w-400 h-112 absolute top-20 left-13 border-2 bg-[#252F50] border-white rounded-lg'>
            <ul className='relative text-white'>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.FstPractice.day}
                </h2><p>{schedule.schedule.FstPractice.month}</p></div>
                <div className='w-0.5 bg-white h-12 absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.FstPractice.sessionName}</h2><LiaFlagCheckeredSolid className='h-6 w-6 text-[#5BC0BE]' /></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><a href={`${schedule.schedule.FstPractice.highlights}`} target='_blank'><p>Highlights</p></a></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.SndSession.day}</h2><p>{schedule.schedule.SndSession.month}</p></div>
                <div className='w-0.5 bg-white h-12 absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.SndSession.sessionName}</h2><LiaFlagCheckeredSolid className='h-6 w-6 text-[#5BC0BE]' /></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><a href={`${schedule.schedule.SndSession.highlights}`} target='_blank'><p>Highlights</p></a></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.TrdSession.day}</h2><p>{schedule.schedule.TrdSession.month}</p></div>
                <div className='w-0.5 bg-white h-12 absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.TrdSession.sessionName}</h2><LiaFlagCheckeredSolid className='h-6 w-6 text-[#5BC0BE]' /></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><a href={`${schedule.schedule.TrdSession.highlights}`} target='_blank'><p>Highlights</p></a></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.Quali.day}</h2><p>{schedule.schedule.Quali.month}</p></div>
                <div className='w-0.5 bg-white h-12 absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.Quali.sessionName}</h2><LiaFlagCheckeredSolid className='h-6 w-6 text-[#5BC0BE]' /></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><a href={`${schedule.schedule.Quali.highlights}`} target='_blank'><p>Highlights</p></a></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.Race.day}</h2><p>{schedule.schedule.Race.month}</p></div>
                <div className='w-0.5 bg-white h-12 absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.Race.sessionName}</h2><LiaFlagCheckeredSolid className='h-6 w-6 text-[#5BC0BE]' /></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><a href={`${schedule.schedule.Race.highlights}`} target='_blank'><p>Highlights</p></a></div>
              </li>
            </ul>
          </div>
          : <div className='w-400 h-112 absolute top-20 left-13 border-2 bg-[#252F50] border-white rounded-lg'>
            <ul className='relative text-white'>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.FstPractice.day}</h2><p>{schedule.schedule.FstPractice.month}</p></div>
                <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.FstPractice.sessionName}</h2></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><h2 className='text-2xl'>{schedule.schedule.FstPractice.time}</h2></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.SndSession.day}</h2><p>{schedule.schedule.SndSession.month}</p></div>
                <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.SndSession.sessionName}</h2></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><h2 className='text-2xl'>{schedule.schedule.SndSession.time}</h2></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.TrdSession.day}</h2><p>{schedule.schedule.TrdSession.month}</p></div>
                <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.TrdSession.sessionName}</h2></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><h2 className='text-2xl'>{schedule.schedule.TrdSession.time}</h2></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.Quali.day}</h2><p>{schedule.schedule.Quali.month}</p></div>
                <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.Quali.sessionName}</h2></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><h2 className='text-2xl'>{schedule.schedule.Quali.time}</h2></div>
              </li>
              <div className='w-370 h-0.5 absolute left-15 bg-white'></div>
              <li className='h-22 w-400 flex justify-center gap-3 items-center relative'>
                <div className='w-16 h-14 absolute flex justify-center flex-col items-center left-7'><h2 className='text-3xl'>{schedule.schedule.Race.day}</h2><p>{schedule.schedule.Race.month}</p></div>
                <div className='w-0.5 h-12 bg-white absolute left-25'></div>
                <div className='w-80 h-14 absolute flex justify-start items-center gap-3 left-32'><h2 className='text-2xl'>{schedule.schedule.Race.sessionName}</h2></div>
                <div className='w-35 h-14 absolute flex justify-center items-center right-7'><h2 className='text-2xl'>{schedule.schedule.Race.time}</h2></div>
              </li>
            </ul>
          </div>}

      </div>

      <div className="h-10 w-full" />

      <div id="Result" className="w-full flex flex-col gap-10">

        <div className="ml-13">
          <h2 className="text-white text-6xl">RESULTS</h2>
        </div>

        {main.finished ? <div className="ml-13">
          <div className="h-345 w-400 border-2 border-white rounded-lg bg-[#252F50]">
            <div className='h-16 w-398 flex text-[#5BC0BE] mt-8 relative items-center uppercase'>
              <p className='absolute left-10'>Pos.</p>
              <p className='absolute left-50'>No.</p>
              <p className='absolute left-90'>Driver</p>
              <p className='absolute left-160'>Team</p>
              <p className='absolute left-230'>Laps</p>
              <p className='absolute left-280'>Time/Status</p>
              <p className='absolute right-12'>Pts.</p>
              <div className="w-380 h-0.5 bg-[#5BC0BE] absolute bottom-[0.5px] left-7" />
            </div>
            {table.map((entry, index) => (
              <li key={entry.num} className='h-14 w-398 flex items-center relative'>


                <p className='text-white absolute left-10'>{entry.pos}</p>
                <p className='text-white absolute left-50'>{entry.num}</p>

                <div className={`h-8 w-8 rounded-full absolute left-90 flex justify-center items-center overflow-hidden border-2 border-white ${entry.color}`}>
                  <div className='h-20 absolute top-px w-full'><a href={`/drivers/${entry.driverNum}`}><img src={entry.picture} className='object-cover' /></a></div>
                </div>

                <p className='text-white absolute left-100'><a href={`/drivers/${entry.driverNum}`}>{entry.name}</a></p>

                <div className={`h-8 w-8 rounded-full absolute left-160 overflow-hidden flex justify-center items-center border-2 border-white ${entry.color}`}>
                  <div className="h-6 w-6"><a href={`/teams/${entry.teamNum}`}><img src={entry.teamLogo} className='h-6 w-6 object-contain' /></a></div>
                </div>

                <p className='text-white absolute left-170'><a href={`/teams/${entry.teamNum}`}>{entry.teamName}</a></p>
                <p className='text-white absolute left-230'>{entry.laps}</p>
                <p className='text-white absolute left-280'>{entry.time}</p>
                <p className='text-white absolute right-12'>{entry.pts}</p>

                {index !== table.length - 1 && (
                  <div className='w-380 h-[0.5px] bg-gray-400 absolute bottom-[0.5px] left-7' />
                )}

              </li>
            ))}
          </div>

        </div> : <div className="bg-[#252F50] h-45 w-400 border-2 rounded-lg border-white ml-13 flex flex-col items-center justify-center gap-2">
          <div className='text-white'><FaCircleInfo className='h-8 w-8' /></div>
          <p className='text-white text-xl'>No results available for this session</p>
        </div>}


        <div className='flex flex-col gap-0.5'>
          <div className='bg-[#5BC0BE] h-1.5 w-404 ml-8'></div>
          <div className='bg-[#5BC0BE] h-1.5 w-404 ml-8'></div>
        </div>

        <div className="ml-13 flex flex-col">
          <h2 className="text-white text-6xl">CIRCUIT</h2>
          <h2 className='text-gray-300 text-xl'>{main.circuitName}</h2>
        </div>

        <div className='h-130 w-392 border-2 border-white rounded-xl ml-13 bg-[#252F50] flex justify-center items-center gap-8'>
          <div className='h-110 w-180'><img className='w-full h-110' src={`${data.imageDetailed}`} alt="" /></div>
          <div className='h-120 w-px bg-white'></div>
          <div className='h-110 w-180 flex flex-col justify-center gap-4'>
            <div className='ml-2 h-30 w-140  flex flex-col gap-1 justify-center'>
              <p className='text-gray-300 text-xs'>Circuit length</p>
              <h2 className='text-white text-6xl'>{data.Length}</h2>
            </div>

            <div className='w-180 h-[0.5px] bg-white'></div>

            <div className='h-20 w-180 flex justify-center gap-10'>
              <div className='w-85 h-20 flex flex-col justify-center'>
                <p className='text-gray-300 text-xs ml-2'>First Grand Prix</p>
                <h2 className='text-white text-3xl ml-2'>{data.FirstGP}</h2>
              </div>

              <div className='w-85 h-20 flex flex-col justify-center'>
                <p className='text-gray-300 text-xs ml-2'>Number of Laps</p>
                <h2 className='text-white text-3xl ml-2'>{data.laps}</h2>
              </div>
            </div>

            <div className='w-180 h-[0.5px] bg-white'></div>

            <div className='h-20 w-180 flex justify-center gap-10'>
              <div className='w-85 h-20 flex flex-col justify-center'>
                <p className='text-gray-300 text-xs ml-2'>Fastest lap time</p>
                <h2 className='text-white text-3xl ml-2'>{data.FLTime}</h2>
                <p className='text-gray-300 text-xs ml-2'>{data.FLHolder}</p>
              </div>

              <div className='w-85 h-20 flex flex-col justify-center'>
                <p className='text-gray-300 text-xs ml-2'>Race Distance</p>
                <h2 className='text-white text-3xl ml-2'>{data.Distance}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPPage