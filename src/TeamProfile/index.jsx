import React from "react";

const TeamProfile = () => {
  return (
    <div className="min-h-screen bg-[#11151d] text-white selection:bg-[#00ffd2] selection:text-black">
      
      
      <div className="relative w-full h-[520px] bg-gradient-to-b from-[#00ffd2] to-[#015151] flex flex-col items-center justify-center overflow-hidden border-b-[px] border-[#00a194]">
        
        
        <img 
          src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedescarright.webp" 
          className="w-[50%] min-w-[600px] object-contain z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transform translate-y-8"
          alt="W17"
        />


<div className="relative z-20 w-full flex items-center justify-center gap-6 mt-16">
  
  
  <div className="flex flex-col gap-1.5 w-[80%] items-end">
    <div className="h-[15px] w-full bg-white transform -skew-x-[5deg]"></div> 
    <div className="h-[15px] w-full bg-white transform -skew-x-[5deg]"></div>
  </div>
  
  <h1 className="text-[55px] font-[900] uppercase tracking-[-0.04em] leading-none text-white px-2">
    Mercedes
  </h1>
  
  
  <div className="flex flex-col gap-1.5 w-[80%] items-start">
    <div className="h-[15px] w-full bg-white transform -skew-x-[5deg]"></div>
    <div className="h-[15px] w-full bg-white transform -skew-x-[5deg]"></div>
  </div>

</div>

        
        <div className="z-20 mt-4 flex flex-col items-center">
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-white/90">
            George Russell <span className="mx-2 opacity-40">|</span> Kimi Antonelli
          </p>
          
          <div className="mt-4 opacity-90 scale-75">
            <img 
              src="https://media.formula1.com/image/upload/c_fit,h_64/q_auto/v1740000001/common/f1/2025/mercedes/2025mercedeslogowhite.webp" 
              alt="Mercedes Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 py-20">
        
        
        <div className="mb-24">
          <h1 className="text-[42px] font-[900] uppercase mb-10 tracking-tighter">Drivers</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="relative bg-gradient-to-br from-[#00d2be] to-[#008a7d] rounded-2xl h-[280px] overflow-hidden group cursor-pointer border-2 border-white shadow-xl">
              <div className="p-10">
                <h2 className="text-2xl font-[900] leading-[0.9] mb-1 uppercase text-white">George<br/>Russell</h2>
                <p className="text-sm font-bold opacity-70 text-white">Mercedes</p>
                <div className="mt-2 text-4xl font-[900] italic opacity-40 group-hover:opacity-100 transition-opacity text-white">63</div>
                <img src="https://flagcdn.com/w40/gb.png" className="absolute left-10 bottom-8 w-6 h-6 rounded-full overflow-hidden  border-2 " alt="UK" />
              </div>
              <img src="https://media.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png" className="absolute right-[-20px] bottom-0 h-[97%] object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>

            
            <div className="relative bg-gradient-to-br from-[#00d2be] to-[#008a7d] rounded-2xl h-[280px] overflow-hidden group cursor-pointer border-2 border-white shadow-xl">
              <div className="p-10">
                <h2 className="text-2xl font-[900] leading-[0.9] mb-1 uppercase text-white">Kimi<br/>Antonelli</h2>
                <p className="text-sm font-bold opacity-70 text-white">Mercedes</p>
                <div className="mt-2 text-4xl font-[900] italic opacity-40 group-hover:opacity-100 transition-opacity text-white">12</div>
                <img src="https://flagcdn.com/w40/it.png" className="absolute left-10 bottom-8 w-6 h-6 rounded-full overflow-hidden border-2" alt="Italy" />
              </div>
              <img src="https://media.formula1.com/image/upload/c_fill,w_440,h_440,g_north/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp" className="absolute right-[-20px] bottom-0 h-[100%] object-contain group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>


<div className="mb-32">
  
  <div className="w-full h-[6px] bg-[#40E0D0] mb-6 rounded-full shadow-[0_0_20px_rgba(64,224,208,0.4)]"></div> 

  <h1 className="text-5xl font-[900] uppercase mb-12 tracking-tighter italic text-white">Statistics</h1>
  
  <h3 className="text-2xl font-black uppercase mb-12 text-[#00ffd2] italic tracking-tight">2026 Season</h3>
  
   <div className="flex flex-col lg:flex-row gap-8  items-stretch">


  
  <div className=" w-150 grid grid-cols-2  gap-y-10">
      

    
    <div className="flex flex-col border-b border-white/10 pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Season Position</span>
      <span className="text-4xl font-[900] text-white">1st</span>
    </div>

    <div className="flex flex-col border-b border-white/10 pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Season Points</span>
      <span className="text-4xl font-[900] text-white">98</span>
    </div>

    <div className="flex flex-col  pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Races</span>
      <span className="text-4xl font-[900] text-white">2</span>
    </div>

    <div className="flex flex-col  0 pb-4">
      <span className="text-sm  font-medium  text-white/50 uppercase tracking-wider mb-2">Grand Prix Points</span>
      <span className="text-4xl font-[900] text-[#00ffd2]">86</span>
    </div>

    
    <div className="flex flex-col   pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Wins</span>
      <span className="text-4xl font-[900] text-white">2</span>
    </div>

    <div className="flex flex-col  pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Podiums</span>
      <span className="text-4xl font-[900] text-white">4</span>
    </div>

    <div className="flex flex-col  pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Poles</span>
      <span className="text-4xl font-[900] text-white">2</span>
    </div>

    <div className="flex flex-col pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Top 10s</span>
      <span className="text-4xl font-[900] text-white">4</span>
    </div>

    <div className="flex flex-col border-b border-white/10  pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">DHL Fastest Laps</span>
      <span className="text-4xl font-[900] text-white">0</span>
    </div>

     <div className="flex flex-col border-b border-white/10 pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">DNFs</span>
      <span className="text-4xl font-[900] text-white">0</span>
    </div>

       <div className="flex flex-col  pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Races</span>
      <span className="text-4xl font-[900] text-white">2</span>
    </div>

     <div className="flex flex-col pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Points</span>
      <span className="text-4xl font-[900] text-[#00ffd2]">0</span>
    </div>

       <div className="flex flex-col  pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Wins</span>
      <span className="text-4xl font-[900] text-white">2</span>
    </div>

     <div className="flex flex-col pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Podiums</span>
      <span className="text-4xl font-[900] text-white">4</span>
    </div>

       <div className="flex flex-col  border-b border-white/10 pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Sprint Poles</span>
      <span className="text-4xl font-[900] text-white">2</span>
    </div>
 
     <div className="flex flex-col  border-b border-white/10 pb-4">
      <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">Grand Prix Top 10s</span>
      <span className="text-4xl font-[900] text-white">4</span>
    </div>

   </div>

    <div className="flex-1 bg-[#1a202c] p-10 rounded-3xl  border border-white/5 shadow-2x1">
      <h3 className="text-2xl font-black uppercase mb-8 text-white tracking-tight">Team Summary</h3>
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Grand Prix Entered</span>
          <span className="text-3xl font-[900] text-white">331</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Team Points</span>
          <span className="text-3xl font-[900] text-white">8257.5</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Highest Race Finish</span>
          <span className="text-3xl font-[900] text-[#00ffd2]">1 (x124)</span>
        </div>
         <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Podiums</span>
          <span className="text-3xl font-[900] text-white">203</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Highest Grid Position</span>
          <span className="text-3xl font-[900] text-[#00ffd2]">1 (x138)</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Pole Positions</span>
          <span className="text-3xl font-[900] text-white">137</span>
        </div>
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">World Championships</span>
          <span className="text-3xl font-[900] text-white">8</span>
        </div>
        
        <div className="flex justify-between items-end pb-4 opacity-0 h-[45px]">
          <span></span><span></span>
        </div>
      </div>
    </div>
  </div> 
</div>
  </div>


        <div className="bg-[#f1f1f1] text-black p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[10px] bg-[#40E0D0]"></div>
          <h1 className="text-[54px] font-[900] uppercase mb-14 tracking-tighter leading-none">Team Profile</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Full Team Name</p>
              <p className="text-2xl font-[900]">Mercedes-AMG PETRONAS Formula One Team</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Base</p>
              <p className="text-2xl font-[900]">Brackley, United Kingdom</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Team Chief</p>
              <p className="text-2xl font-[900]">Toto Wolff</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Technical Chief</p>
              <p className="text-2xl font-[900]">James Allison</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Chassis</p>
              <p className="text-2xl font-[900] ">W17</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Power Unit</p>
              <p className="text-2xl text-[#00ffd2] font-[900]">Mercedes</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Reserve Driver</p>
              <p className="text-2xl font-[900]">Fred Vesti</p>
            </div>
             <div>
              <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">First Team Entryr</p>
              <p className="text-2xl  font-[900]">1970</p>
            </div>
          </div>
        </div>

      </div>
    
  );
};

export default TeamProfile;