import React from "react";

import Teams from "../../data/team/teams.json";
import Positions from "../../data/standings/wdc.json";
import Stats from "../../data/driver/driverStats26.json";
import Drivers from "../../data/driver/drivers.json";

const WDC = () => {
  const table = Positions.map((p) => {
    const driver = Drivers.find((d) => d.num === p.num);
    const stats = Stats.find((s) => s.num === p.num);
    const team = Teams.find((t) => t.ind === driver?.ind);

    return {
      pos: p.pos,
      name: driver?.fullName,
      country: driver?.country,
      flag: driver?.flag,
      teamName: team?.name,
      teamLogo: team?.logo,
      points: stats?.Points26,
      color: team?.colorD,
      picture: driver?.driverImg,
      num: driver?.num,
      ind: team?.ind
    };
  }).sort((a, b) => a.pos - b.pos);

  return (
    <div>
      <h2 className="text-white text-5xl mb-5">2026 DRIVERS' STANDINGS</h2>

      <div className="h-345 w-400 border-2 border-white rounded-lg bg-[#252F50]">
        <div className="h-16 w-398 flex text-[#5BC0BE] mt-8 relative items-center uppercase">
          <p className="absolute left-10">Pos.</p>
          <p className="absolute left-50">Driver</p>
          <p className="absolute left-185">Nationality</p>
          <p className="absolute right-115">Team</p>
          <p className="absolute right-12">Pts.</p>
          <div className="w-380 h-0.5 bg-[#5BC0BE] absolute bottom-[0.5px] left-7" />
        </div>

        <ul className="w-398">
          {table.map((d, index) => (
            <li key={d.name} className="h-14 w-398 flex items-center relative">
              <p className="text-white absolute left-10">{d.pos}</p>

              <div className={`h-8 w-8 rounded-full absolute left-50 flex justify-center items-center overflow-hidden border-2 border-white ${d.color}`}>
                <div className="h-7 w-7"><a href={`drivers/${d.num}`}><img src={d.picture} className="h-20 absolute top-px w-full object-cover"/></a></div>
              </div>

              <p className="text-white absolute left-60"><a href={`drivers/${d.num}`}>{d.name}</a></p>

              <div className="h-8 w-8 rounded-full absolute left-192 overflow-hidden border-2 border-white">
              <img src={d.flag} className="h-full w-full object-contain" />
              </div>

              <div className={`h-8 w-8 rounded-full absolute left-272 overflow-hidden flex justify-center items-center border-2 border-white ${d.color}`}>
              <div className="h-6 w-6"><a href={`teams/${d.ind}`}><img src={d.teamLogo} alt="" className="h-full w-full object-contain" /></a></div>
              </div> 
              <p className="text-white absolute left-283"><a href={`teams/${d.ind}`}>{d.teamName}</a></p>
              <p className="text-white absolute right-12">{d.points}</p>

              {index !== table.length - 1 && (
                <div className="w-380 h-[0.5px] bg-gray-400 absolute bottom-[0.5px] left-7" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WDC;