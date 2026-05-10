import React from "react";
import { useParams } from "react-router-dom";
 
import drivers from "../../data/driver/drivers.json";
import driverStats26 from "../../data/driver/driverStats26.json";
import driverStatsAll from "../../data/driver/driverStatsAll.json";
import teams from "../../data/team/teams.json";
import driverBio from "../../data/driver/driverData.json";
 
const extractHex = (twClass) => twClass?.match(/#[0-9a-fA-F]{3,6}/)?.[0] ?? "#ffffff";
 
const DriverProfile = () => {
  const { num } = useParams();
  const driverNum = Number(num);
 
  const driver   = drivers.find(d => d.num === driverNum);
  const stats26  = driverStats26.find(s => s.num === driverNum);
  const statsAll = driverStatsAll.find(s => s.num === driverNum);
  const bio      = driverBio.find(b => b.num === driverNum);
  const team     = driver ? teams.find(t => t.name === driver.team) : null;
 
  if (!driver || !stats26 || !statsAll || !bio || !team) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#11151d]">
        Driver not found
      </div>
    );
  }
 
  const color = extractHex(team.colorD);
 
  return (
    <div className="min-h-screen bg-[#11151d] text-white" style={{ '--team-color': color }}>
 
      <div
        className={`relative w-full h-162.5 ${team.gradient} overflow-hidden flex items-center shadow-2xl border-b-2 border-t-2 border-white`}
      >
        <div
          className="absolute right-[8%] top-[50%] -translate-y-1/2 text-[580px] font-[1000] leading-none text-transparent z-0 select-none opacity-10"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}
        >
          <h1>{driver.num}</h1>
        </div>
 
        <div className="relative z-20 w-full max-w-325 mx-auto px-12 flex items-center justify-between h-full">
 
          <div className="flex items-center gap-10 h-full pl-[5%]">
 
            <div className="flex flex-col items-center h-full w-10 relative z-10">
              <div className="flex gap-1.5 h-47.5 shrink-0">
                <div className="w-3.5 h-50 bg-white shadow-lg"></div>
                <div className="w-3.5 h-50 bg-white shadow-lg"></div>
              </div>
 
              <div className="h-65 flex flex-col items-center justify-center pl-8 w-max">
                <span
                  className="text-[88px] text-white/90 leading-none -mb-2.5"
                  style={{ transform: "rotate(-3deg)", display: "block" }}
                >
                  <h4>{driver.fName}</h4>
                </span>
                <h1 className="text-[80px] font-[1000] uppercase tracking-[-0.07em] leading-[0.8] text-white -mb-5">
                  {driver.lName}
                </h1>
                <div className="flex items-center gap-4 mt-10 text-[13px] font-bold uppercase tracking-[0.15em] text-white/90">
                  <div className="flex items-center gap-2">
                    <div className="rounded-4xl border-2 border-white">
                      <img src={driver.flag} className="w-5 h-5 object-cover rounded-full shadow-sm" alt="" />
                    </div>
                    <p>{driver.country}</p>
                  </div>
                  <span className="w-px h-4 bg-white/20"></span>
                  <p>{driver.team}</p>
                  <span className="w-px h-4 bg-white/20"></span>
                  <p className="text-white text-xl font-black">{driver.num}</p>
                </div>
              </div>
 
              <div className="flex gap-1.5 flex-1 w-8.5 relative">
                <div className="w-3.5 h-full bg-white shadow-lg absolute left-0"></div>
                <div className="w-3.5 h-full bg-white shadow-lg absolute right-0"></div>
              </div>
            </div>
 
          </div>
 
          <div className="h-480 flex items-end">
            <img src={driver.driverImg} className="h-300" alt={driver.fullName} />
          </div>
 
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-8 py-20">
 
        <div className="mb-32">
 
          <div
            className="w-full h-1.5 mb-6 rounded-full"
            style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}66` }}
          ></div>
 
          <h2 className="text-6xl uppercase mb-12 tracking-tighter italic text-white">Statistics</h2>
 
          <h3
            className="text-2xl font-black uppercase mb-12 italic tracking-tight"
            style={{ color }}
          >
            2026 Season
          </h3>
 
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
 
            <div className="w-150 grid grid-cols-2 gap-y-10">
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Season Position</span>
                <span className="text-4xl font-black text-white">{stats26.Position26}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Season Points</span>
                <span className="text-4xl font-black text-white">{stats26.Points26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Races</span>
                <span className="text-4xl font-black text-white">{stats26.GPRaces26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Points</span>
                <span className="text-4xl font-black" style={{ color }}>{stats26.GPPoints26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Wins</span>
                <span className="text-4xl font-black text-white">{stats26.GPWins26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Podiums</span>
                <span className="text-4xl font-black text-white">{stats26.GPPodiums26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Poles</span>
                <span className="text-4xl font-black text-white">{stats26.GPPoles26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Top 10s</span>
                <span className="text-4xl font-black text-white">{stats26.GPTop10s26}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">DHL Fastest Laps</span>
                <span className="text-4xl font-black text-white">{stats26.DHLFastestLaps26}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">DNFs</span>
                <span className="text-4xl font-black text-white">{stats26.DNFs26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Races</span>
                <span className="text-4xl font-black text-white">{stats26.SprRaces26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Points</span>
                <span className="text-4xl font-black" style={{ color }}>{stats26.SprPoints26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Wins</span>
                <span className="text-4xl font-black text-white">{stats26.SprWins26}</span>
              </div>
 
              <div className="flex flex-col pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Podiums</span>
                <span className="text-4xl font-black text-white">{stats26.SprPodiums26}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Poles</span>
                <span className="text-4xl font-black text-white">{stats26.SprPoles26}</span>
              </div>
 
              <div className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Top 10s</span>
                <span className="text-4xl font-black text-white">{stats26.SprTop10s26}</span>
              </div>
 
            </div>
 
            <div className="flex-1 bg-[#1a202c] p-10 rounded-3xl border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-black uppercase mb-8 text-white tracking-tight">Career Summary</h3>
              <div className="space-y-6">
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Grand Prix Entered</span>
                  <span className="text-3xl font-black text-white">{statsAll.GPEntered}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Career Points</span>
                  <span className="text-3xl font-black text-white">{statsAll.careerPoints}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Highest Race Finish</span>
                  <span className="text-3xl font-black" style={{ color }}>{statsAll.HighestRaceFinish}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Podiums</span>
                  <span className="text-3xl font-black text-white">{statsAll.Podiums}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Highest Grid Position</span>
                  <span className="text-3xl font-black" style={{ color }}>{statsAll.HighestGridPos}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Pole Positions</span>
                  <span className="text-3xl font-black text-white">{statsAll.PolePos}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">World Championships</span>
                  <span className="text-3xl font-black text-white">{statsAll.WDC}</span>
                </div>
 
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-sm font-medium text-white/50 uppercase tracking-wider">DNFs</span>
                  <span className="text-3xl font-black text-white">{statsAll.DNFs}</span>
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
          <h2 className="text-[54px] uppercase mb-14 tracking-tighter leading-none">Biography</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Date of Birth</p>
              <p className="text-2xl">{bio.BirthDate}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Place of Birth</p>
              <p className="text-2xl">{bio.Birthplace}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Nationality</p>
              <p className="text-2xl">{driver.country}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Team</p>
              <p className="text-2xl" style={{ color }}>{driver.team}</p>
            </div>
 
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Car Number</p>
              <p className="text-2xl">{driver.num}</p>
            </div>
 
          </div>
        </div>
      </div>
 
    </div>
  );
};
 
export default DriverProfile;
