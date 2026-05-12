import React from "react";

import Stats from "../../data/team/teamStats26.json";
import Data from "../../data/team/teams.json";
import Positions from "../../data/standings/wcc.json";

const WCC = () => {
  const table = Positions.map((p) => {
    const team = Data.find((t) => t.ind === p.ind);
    const stats = Stats.find((s) => s.ind === p.ind);

    return {
      pos: p.pos,
      name: team?.name,
      logo: team?.logo,
      points: stats?.Points,
      color: team?.colorD,
      ind: team?.ind
    };
  }).sort((a, b) => a.pos - b.pos);

  return (
    <div>
      <h2 className="text-white text-5xl mb-5">2026 TEAMS' STANDINGS</h2>

      <div className="h-190 w-400 border-2 border-white rounded-lg bg-[#252F50]">
        <div className="h-16 w-398 flex text-[#5BC0BE] mt-8 relative items-center uppercase">
          <p className="absolute left-10">Pos.</p>
          <p className="absolute left-117">Team</p>
          <p className="absolute right-12">Pts.</p>
          <div className="w-380 h-0.5 bg-[#5BC0BE] absolute bottom-[0.5px] left-7" />
        </div>

        <ul className="w-398">
          {table.map((team, index) => (
            <li key={team.pos} className="h-14 w-398 flex items-center relative">
              <p className="text-white absolute left-10">{team.pos}</p>

              <div className={`h-8 w-8 rounded-full flex justify-center items-center absolute left-117 overflow-hidden border-2 border-white ${team.color}`}>
                <div className="h-6 w-6"><a href={`teams/${team.ind}`}><img src={team.logo} alt={team.name} className="h-full w-full object-contain" /></a></div>
              </div>

              <p className="text-white absolute left-127"><a href={`teams/${team.ind}`}>{team.name}</a></p>
              <p className="text-white absolute right-12">{team.points}</p>

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

export default WCC;