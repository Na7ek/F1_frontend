import React from "react";
import champions from "../../data/other/champions.json"

const HallOfFame = () => {
  return (
    <div className="w-full bg-[#1C2541] px-10">
      
      <h1 className="text-5xl mt-6 mb-12 text-white text-left">
        HALL OF FAME - THE WORLD CHAMPIONS
      </h1>

      <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {champions.map((champ, index) => (
        <a key={index} href={champ.link} target="_blank">
            <div className="group bg-black rounded-lg overflow-hidden border-2 hover:border-white hover:scale-103 transition-all duration-300 shadow-sm w-full flex flex-col hover:shadow-lg">

            <div className="p-2 grow bg-black">
                <div className="h-52.5 w-full overflow-hidden rounded-sm">
                <img
                    src={champ.img}
                    alt={champ.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                </div>
            </div>

            <div className="p-4 pt-1 bg-black">
                <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white tracking-tight">
                    {champ.name}
                </h3>
                <span className="text-lg font-medium text-gray-400">
                    x{champ.titles}
                </span>
                </div>
            </div>

            </div>
        </a>
        ))}
        
    </div>
    </div>
    <div className='w-full h-10 bg-[#1C2541]'></div>

    </div>
    
  );
};

export default HallOfFame;