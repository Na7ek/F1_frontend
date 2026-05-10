import React from "react";
import { useParams } from "react-router-dom";
 
import teams from "../../data/team/teams.json";
import teamStats26 from "../../data/team/teamStats26.json";
import teamStatsAll from "../../data/team/teamStatsAll.json";
import teamData from "../../data/team/teamData.json";
import drivers from "../../data/driver/drivers.json";
 
import DriverCardB from "../../Cards/DriverCardB";
 
const extractHex = (twClass) => twClass?.match(/#[0-9a-fA-F]{3,6}/)?.[0] ?? "#ffffff";
 
const TeamProfile = () => {
  const { id } = useParams();
  const teamId = Number(id);
 
  const team = teams.find(t => t.ind === teamId);
  const stats26 = teamStats26.find(s => s.ind === teamId);
  const statsAll = teamStatsAll.find(s => s.ind === teamId);
  const info = teamData.find(t => t.ind === teamId);
  const teamDrivers = drivers.filter(d => d.team === team?.name);
  const color = extractHex(team?.colorD);
 
  if (!team || !stats26 || !statsAll || !info) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#11151d]">
        Team not found
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-[#16203A] text-white" style={{ '--team-color': color }}>
 
      <div className={`relative w-full h-130 ${team.gradient} flex flex-col items-center justify-center overflow-hidden border-b-2 border-t-2 border-white`}>
 
        <img
          src={team.carImg}
          className="w-[50%] min-w-150 object-contain z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transform translate-y-8"
          alt={team.name}
        />
 
        <div className="relative z-20 w-full flex items-center justify-center gap-6 mt-16">
 
          <div className="flex flex-col gap-1.5 w-[80%] items-end">
            <div className="h-3.75 w-full bg-white transform -skew-x-[5deg]"></div>
            <div className="h-3.75 w-full bg-white transform -skew-x-[5deg]"></div>
          </div>
 
          <h1 className="text-[55px] uppercase tracking-[-0.04em] leading-none text-white px-2 whitespace-nowrap">
            {team.name}
          </h1>
 
          <div className="flex flex-col gap-1.5 w-[80%] items-start">
            <div className="h-3.75 w-full bg-white transform -skew-x-[5deg]"></div>
            <div className="h-3.75 w-full bg-white transform -skew-x-[5deg]"></div>
          </div>
 
        </div>
 
        <div className="z-20 mt-4 flex flex-col items-center">
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-white/90">
            {team.driver1} <span className="mx-2 opacity-40">|</span> {team.driver2}
          </p>
 
          {team.logo && (
            <div className="mt-4 opacity-90 scale-75">
              <img
                src={team.logo}
                alt={`${team.name} Logo`}
                className="h-12 w-auto"
              />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
 
        <div className="mb-24">
          <h2 className="text-[60px] uppercase mb-10 tracking-tighter">Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamDrivers.map(d => (
              <DriverCardB key={d.num} {...d} />
            ))}
          </div>
        </div>
 
        <div className="mb-32">
 
          <div className="w-full h-1.5 mb-6 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}66` }}></div>
 
          <h2 className="text-[60px] uppercase mb-12 tracking-tighter italic text-white">Statistics</h2>
 
          <h3 className="text-2xl font-black uppercase mb-12 italic tracking-tight" style={{ color: color }}>2026 Season</h3>
 
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
 
            <div className="w-150 grid grid-cols-2 gap-y-10">
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Season Position</span>
                <span className="text-4xl font-black text-white">{stats26.Position}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Season Points</span>
                <span className="text-4xl font-black text-white">{stats26.Points}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Races</span>
                <span className="text-4xl font-black text-white">{stats26.GPRaces}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Points</span>
                <span className="text-4xl font-black" style={{ color: color }}>{stats26.GPPoints}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Wins</span>
                <span className="text-4xl font-black text-white">{stats26.GPWins}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Podiums</span>
                <span className="text-4xl font-black text-white">{stats26.GPPodiums}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Poles</span>
                <span className="text-4xl font-black text-white">{stats26.GPPoles}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Top 10s</span>
                <span className="text-4xl font-black text-white">{stats26.GPTop10s}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">DHL Fastest Laps</span>
                <span className="text-4xl font-black text-white">{stats26.DHLFastestLaps}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">DNFs</span>
                <span className="text-4xl font-black text-white">{stats26.DNFs}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Races</span>
                <span className="text-4xl font-black text-white">{stats26.SprRaces}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Points</span>
                <span className="text-4xl font-black" style={{ color: color }}>{stats26.SprPoints}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Wins</span>
                <span className="text-4xl font-black text-white">{stats26.SprWins}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Podiums</span>
                <span className="text-4xl font-black text-white">{stats26.SprPodiums}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Poles</span>
                <span className="text-4xl font-black text-white">{stats26.SprPoles}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Top 10s</span>
                <span className="text-4xl font-black text-white">{stats26.SprTop10s}</span>
              </div>
 
            </div>
 
            <div className="flex-1 bg-[#0B132B] p-10 rounded-3xl border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-black uppercase mb-8 text-white tracking-tight">Team Summary</h3>
              <div className="space-y-6">
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Grand Prix Entered</span>
                  <span className="text-3xl font-black text-white">{statsAll.GPEntered}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Team Points</span>
                  <span className="text-3xl font-black text-white">{statsAll.TeamPoints}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Highest Race Finish</span>
                  <span className="text-3xl font-black" style={{ color: color }}>{statsAll.HighestRaceFinish}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Podiums</span>
                  <span className="text-3xl font-black text-white">{statsAll.Podiums}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Highest Grid Position</span>
                  <span className="text-3xl font-black" style={{ color: color }}>{statsAll.HighestGridPos}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Pole Positions</span>
                  <span className="text-3xl font-black text-white">{statsAll.PolePos}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">World Championships</span>
                  <span className="text-3xl font-black text-white">{statsAll.WCC}</span>
                </div>
 
                <div className="flex justify-between items-end pb-4 opacity-0 h-11">
                  <span></span><span></span>
                </div>
 
              </div>
            </div>
 
          </div>
        </div>
 
      </div>
 
      <div className="px-8 pb-20">
        <div className="bg-[#f1f1f1] text-black p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2.5" style={{ backgroundColor: color }}></div>
          <h2 className="text-[54px] uppercase mb-14 tracking-tighter leading-none">Team Profile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Full Team Name</p>
              <p className="text-2xl">{info.FullTeamName}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Base</p>
              <p className="text-2xl">{info.Base}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Team Chief</p>
              <p className="text-2xl">{info.TeamChief}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Technical Chief</p>
              <p className="text-2xl">{info.TechChief}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Chassis</p>
              <p className="text-2xl">{info.Chasis}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Power Unit</p>
              <p className="text-2xl" style={{ color: color }}>{info.PowerUnit}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Reserve Driver</p>
              <p className="text-2xl">{info.ReserveDriver}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">First Team Entry</p>
              <p className="text-2xl">{info.FirstEntry}</p>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default TeamProfile;