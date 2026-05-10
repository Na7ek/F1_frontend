import React, { useState } from "react";

const drivers = [
  {
    pos: 1,
    name: "Lando Norris",
    country: "Great Britain",
    team: "McLaren",
    teamlogo: "https://pbs.twimg.com/media/EtJqRKlWMAEutvg.jpg",
    pts: 423,
    avatar: "https://images.ctfassets.net/gy95mqeyjg28/24btmVlGxKrB3tHVKII0H/a7942e72bab1beef0083a9dc896b9605/2026_web_team_Lando_2.jpg?w=3840&q=75&fm=webp",
  },
  {
    pos: 2,
    name: "Max Verstappen",
    country: "Netherlands",
    team: "Red Bull Racing",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:4781D7/c_lpad,h_400,w_400/v1746808635/common/f1/2025/redbullracing/2025redbullracinglogowhitefr.png",
    pts: 421,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwDaK2WEpux7b-wp9LMyfBEbWvrewGmQsgA&s",
  },
  {
    pos: 3,
    name: "Oscar Piastri",
    country: "Australia",
    team: "McLaren",
    teamlogo: "https://pbs.twimg.com/media/EtJqRKlWMAEutvg.jpg",
    pts: 410,
    avatar: "https://images.ctfassets.net/gy95mqeyjg28/90Tc3OmT3XUBjSZzl9JPn/c55d623703ef9ebefc49a7e231787a21/2026_web_team_Oscar_2.jpg?w=3840&q=75&fm=webp",
  },
  {
    pos: 4,
    name: "George Russell",
    country: "Great Britain",
    team: "Mercedes",
    teamlogo: "https://www.carmodelstore.co.uk/cdn/shop/files/Mercedes_F1.jpg?v=1744897282&width=460",
    pts: 319,
    avatar: "https://img2.51gt3.com/rac/racer/202503/f10f01a1704147ca90ab3a4325f38785.png?x-oss-process=style/_nhd_en",
  },
  {
    pos: 5,
    name: "Charles Leclerc",
    country: "Monaco",
    team: "Ferrari",
    teamlogo: "https://i.pinimg.com/736x/48/06/4a/48064a2f06d47d827182569c0fb074e2.jpg",
    pts: 242,
    avatar: "https://img2.51gt3.com/rac/racer/202503/fe2de9975d864e38acfd9933164954a6.png?x-oss-process=style/_nhd_en",
  },
  {
    pos: 6,
    name: "Lewis Hamilton",
    country: "Great Britain",
    team: "Ferrari",
    teamlogo: "https://i.pinimg.com/736x/48/06/4a/48064a2f06d47d827182569c0fb074e2.jpg",
    pts: 156,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGNgRhoqH9wZcyUv53pVPhCq76CFrXwTUqA&s",
  },
  {
    pos: 7,
    name: "Kimi Antonelli",
    country: "Italy",
    team: "Mercedes",
    teamlogo: "https://www.carmodelstore.co.uk/cdn/shop/files/Mercedes_F1.jpg?v=1744897282&width=460",
    pts: 150,
    avatar: "https://img2.51gt3.com/rac/racer/202503/bcca7f61b6684e26bb28aedaf8d97c53.png",
  },
  {
    pos: 8,
    name: "Alexander Albon",
    country: "Thailand",
    team: "Williams",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:1868db/c_lpad,h_400,w_400/v1746808635/common/f1/2025/williams/2025williamslogowhitefr.png",
    pts: 73,
    avatar: "https://img2.51gt3.com/rac/racer/202503/1f1fd439e5344c7a83faf4a80d09486f.png",
  },
  {
    pos: 9,
    name: "Carlos Sainz",
    country: "Spain",
    team: "Williams",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:1868db/c_lpad,h_400,w_400/v1746808635/common/f1/2025/williams/2025williamslogowhitefr.png",
    pts: 64,
    avatar: "https://www.grandprix.com.au/uploads/images/_driverProfile/FOR-GP25-FAN_ZONE-PROFILES-D-Carlos_Sainz.webp",
  },
  {
    pos: 10,
    name: "Fernando Alonso",
    country: "Spain",
    team: "Aston Martin",
    teamlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0onhMPpYs9R9AHbnwDCcEwIqi2MAfv_T_gg&s",
    pts: 56,
    avatar: "https://img2.51gt3.com/rac/racer/202503/25ccca7ffa96437aa54f169a4e9338fa.png?x-oss-process=style/_nhd_en",
  },
  {
    pos: 11,
    name: "Nico Hulkenberg",
    country: "Germany",
    team: "Audi",
    teamlogo: "https://cdn.produkto.io/photos/2025/09/24/audi-logo-1969-2.webp",
    pts: 51,
    avatar: "https://img2.51gt3.com/rac/racer/202503/737aac3065d74096b767308cf4c3164e.png?x-oss-process=style/_nowm",
  },
   {
    pos: 12,
    name: "Isack Hadjar",
    country: "France",
    team: "Kick Sauber",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:01c00e/c_lpad,h_400,w_400/v1751548229/common/f1/2025/kicksauber/2025kicksauberlogowhitefr.png",
    pts: 51,
    avatar: "https://img2.51gt3.com/rac/racer/202503/12a32c8783f24aec8fce1d35138941a7.png?x-oss-process=style/_nowm",
  },
   {
    pos: 13,
    name: "Oliver Bearman",
    country: "Great Britain",
    team: "Kick Sauber",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:01c00e/c_lpad,h_400,w_400/v1751548229/common/f1/2025/kicksauber/2025kicksauberlogowhitefr.png",
    pts: 41,
    avatar: "https://img2.51gt3.com/rac/racer/202503/b4e1b56f7f2a4c989f16787b26852cba.png?x-oss-process=style/_nowm",
  },
  {
    pos: 14,
    name: "Liam Lawson",
    country: "New Zealand",
    team: "Racing Bulls",
    teamlogo: "https://pbs.twimg.com/media/HA0JM5ybQAAF_RE.jpg",
    pts: 38,
    avatar: "https://img2.51gt3.com/rac/racer/202503/3a6b5ab450b040feb7cab3cb50e9a53f.png?x-oss-process=style/_nowm",
  },
  {
    pos: 15,
    name: "Esteban Ocon",
    country: "France",
    team: "Haas F1 Team",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:9c9fa2/c_lpad,h_400,w_400/v1746808635/common/f1/2025/haas/2025haaslogowhitefr.png#888888",
    pts: 38,
    avatar: "https://img2.51gt3.com/rac/racer/202503/34d4155677ae4874aae0240f9b366cc3.png?x-oss-process=style/_nhd_en",
  },
  {
    pos: 16,
    name: "Lance Stroll",
    country: "Canada",
    team: "Aston Martin",
    teamlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0onhMPpYs9R9AHbnwDCcEwIqi2MAfv_T_gg&s",
    pts: 33,
    avatar: "https://img2.51gt3.com/rac/racer/202503/2869081e10e6412894446d1320c9cb44.png?x-oss-process=style/_nowm",
  },
    {
    pos: 17,
    name: "Yuki Tsunoda",
    country: "Japan",
    team: "Red Bull Racing",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:4781D7/c_lpad,h_400,w_400/v1746808635/common/f1/2025/redbullracing/2025redbullracinglogowhitefr.png",
    pts: 33,
    avatar: "https://www.formulaonehistory.com/wp-content/uploads/2023/10/Yuki-Tsunoda-F1-2024.webp",
  },
    {
    pos: 18,
    name: "Pierre Gasly",
    country: "France",
    team: "Alpine",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:00a1e8/c_lpad,h_400,w_400/v1746808635/common/f1/2025/alpine/2025alpinelogowhitefr.png",
    pts: 22,
    avatar: "https://img2.51gt3.com/rac/racer/202503/2e2727ea4b564c55a6b5e18a25d7e230.png?x-oss-process=style/_nowm",
  },
    {
    pos: 19,
    name: "Gabriel Bortoleto",
    country: "Brazil",
    team: "Kick Sauber",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:01c00e/c_lpad,h_400,w_400/v1751548229/common/f1/2025/kicksauber/2025kicksauberlogowhitefr.png",
    pts: 19,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMcIMimnHTnWXPsyigOMjYTjI-nVefKYRsw&s",
  },
    {
    pos: 20,
    name: "Franco Colapinto",
    country: "Argentina",
    team: "Alpine",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:00a1e8/c_lpad,h_400,w_400/v1746808635/common/f1/2025/alpine/2025alpinelogowhitefr.png",
    pts: 0,
    avatar: "https://www.formulaonehistory.com/wp-content/uploads/2024/08/Franco-Colapinto-Alpine-2025.webp",
  },
    {
    pos: 21,
    name: "Jack Doohan",
    country: "Australia",
    team: "Alpine",
    teamlogo: "https://media.formula1.com/image/upload/c_scale,h_300/b_rgb:00a1e8/c_lpad,h_400,w_400/v1746808635/common/f1/2025/alpine/2025alpinelogowhitefr.png",
    pts: 0,
    avatar: "https://img2.51gt3.com/rac/racer/202503/57bb84ad50934c638d088c8d2d0ef8db.png?x-oss-process=style/_nowm",
  },
  
];

const races = [
  {
    race: "Australia",
    flag: "au",
    date: "08 Mar",
    winner: "George Russell",
    avatar: "https://img2.51gt3.com/rac/racer/202503/f10f01a1704147ca90ab3a4325f38785.png?x-oss-process=style/_nhd_en",
    team: "Mercedes",
    teamlogo: "https://www.carmodelstore.co.uk/cdn/shop/files/Mercedes_F1.jpg?v=1744897282&width=460",
    laps: 58,
    time: "	1:23:06.801"
  },
  {
    race: "China",
    flag: "cn",
    date: "15 Mar",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Japan",
    flag: "jp",
    date: "27 - 29 Mar",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Bahrain",
    flag: "bh",
    date: "10 - 12 Apr",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Saudi Arabia",
    flag: "sa",
    date: "17 - 19 Apr",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Miami",
    flag: "us",
    date: "01 - 03 May",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Canada",
    flag: "ca",
    date: "22 - 24 May",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Monaco",
    flag: "mc",
    date: "05 - 07 Jun",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Barcelona",
    flag: "es",
    date: "12 - 14 Jun",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Austria",
    flag: "at",
    date: "26 - 28 Jun",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Great Britain",
    flag: "gb",
    date: "03 - 05 Jul",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Belgium",
    flag: "be",
    date: "17 - 19 Jul",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Hungary",
    flag: "hu",
    date: "24 - 26 Jul",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Netherlands",
    flag: "nl",
    date: "21 - 23 Aug",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Italy",
    flag: "it",
    date: "04 - 06 Sep",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Spain",
    flag: "es",
    date: "11 - 13 Sep",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Azerbaijan",
    flag: "az",
    date: "24 - 26 Sep",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Singapore",
    flag: "sg",
    date: "09 - 11 Oct",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "United States",
    flag: "us",
    date: "23 - 25 Oct",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Mexico",
    flag: "mx",
    date: "30 Oct - 01 Nov",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Brazil",
    flag: "br",
    date: "06 - 08 Nov",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Las Vegas",
    flag: "us",
    date: "19 - 21 Nov",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Qatar",
    flag: "qa",
    date: "27 - 29 Nov",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
   {
    race: "Abu Dhabi",
    flag: "ad",
    date: "04 - 06 Dec",
    winner: "",
    avatar: "",
    team: "",
    teamlogo: "",
    laps: 56,
    time: ""
  },
  
];

const teams = [
  {
    pos: 1,
    team: "McLaren",
    logo: "",
    points: 833
  },
  {
    pos: 2,
    team: "Mercedes",
    logo: "",
    points: 469
  },
  {
    pos: 3,
    team: "Red Bull Racing",
    logo: "",
    points: 451
  },
  {
    pos: 4,
    team: "Ferrari",
    logo: "",
    points: 398
  },
  {
    pos: 5,
    team: "Williams",
    logo: "",
    points: 137
  },
    {
    pos: 6,
    team: "Racing Bulls",
    logo: "",
    points: 398
  },
    {
    pos: 7,
    team: "Aston Martin",
    logo: "",
    points: 398
  },
    {
    pos: 8,
    team: "Haas F1 Team",
    logo: "",
    points: 398
  },
    {
    pos: 9,
    team: "Audi",
    logo: "",
    points: 398
  },
    {
    pos: 10,
    team: "Alpine",
    logo: "",
    points: 398
  },
    {
    pos: 11,
    team: "Cadillac",
    logo: "",
    points: 398
  },
];


const countryToCode = {
  Netherlands: "nl",
  Australia: "au",
  Italy: "it",
  Spain: "es",
  Thailand: "th",
  Monaco: "mc",
  Germany: "de",
  France: "fr",
  Canada: "ca",
  Japan: "jp",
  Brazil: "br",
  Argentina: "ar",
  "New Zealand": "nz",
  "Great Britain": "gb",
};

const WDCTable = () => {
  const [activeTab, setActiveTab] = useState("drivers");
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 5;

  const getVisibleData = () => {
    if (activeTab === "drivers") return showAll ? drivers : drivers.slice(0, VISIBLE_COUNT);
    if (activeTab === "races") return showAll ? races : races.slice(0, VISIBLE_COUNT);
    if (activeTab === "teams") return showAll ? teams : teams.slice(0, VISIBLE_COUNT);
  };

  const getGrid = () => {
    if (activeTab === "drivers") return "grid-cols-[60px_2fr_2fr_2fr_80px]";
    if (activeTab === "races") return "grid-cols-[2.2fr_120px_2.2fr_2.2fr_80px_140px]";
    if (activeTab === "teams") return "grid-cols-[80px_1fr_120px]";  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">

      
      <div className="flex gap-4 mb-5">
        {["drivers", "races", "teams"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              activeTab === tab ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="w-[900px] font-sans">

        
        <div className={`grid ${getGrid()} py-2.5 border-b-2 border-gray-300 text-gray-600 font-semibold`}>
          {activeTab === "drivers" && (
            <>
              <span>POS.</span>
              <span>DRIVER</span>
              <span>NATIONALITY</span>
              <span>TEAM</span>
              <span>PTS.</span>
            </>
          )}

          {activeTab === "races" && (
          <>
           <span>GRAND PRIX</span>
           <span>DATE</span>
           <span>WINNER</span>
           <span>TEAM</span>
           <span>LAPS</span>
           <span>TIME</span>
         </>
       )}

          {activeTab === "teams" && (
          <>
           <span>POS.</span>
           <span>TEAM</span>
          <span className="text-right">PTS.</span>
        </>
       )}
      </div>

        
        {getVisibleData().map((item, i) => (
         <div
            key={i}
            className={`grid ${getGrid()} items-center py-3.5 border-b border-gray-200 hover:bg-gray-50 transition`}
          >

            {activeTab === "drivers" && (
              <>
                <span className="font-semibold">{item.pos}</span>

                <div className="flex items-center gap-3">
                  <img src={item.avatar} className="w-6 h-6 rounded-full object-cover" />
                  <span>{item.name}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img
                      src={`https://flagcdn.com/w40/${countryToCode[item.country]}.png`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>{item.country}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <img src={item.teamlogo} className="w-6 h-6 rounded-full overflow-hidden" />
                  <span>{item.team}</span>
                </div>

                <span className="font-semibold">{item.pts}</span>
              </>
            )}

           {activeTab === "races" && (
          <>
        
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full overflow-hidden">
          <img
           src={`https://flagcdn.com/w40/${item.flag}.png`}
          className="w-full h-full object-cover"
           />
          </div>
        <span className="font-medium">{item.race}</span>
      </div>

    
         <span>{item.date}</span>

    
       <div className="flex items-center gap-3">
         <img src={item.avatar} className="w-7 h-7 rounded-full object-cover" />
         <span className="font-medium">{item.winner}</span>
       </div>

   
       <div className="flex items-center gap-3">
          <img src={item.teamlogo} className="w-7 h-7 rounded-full object-cover" />
          <span>{item.team}</span>
       </div>

    
           <span>{item.laps}</span>

   
            <span className="font-semibold">{item.time}</span>
          </>
       )}

          {activeTab === "teams" && (
        <>
           <span className="font-semibold">{item.pos}</span>

       <div className="flex items-center gap-3">
        <img
           src={item.logo}
           className="w-8 h-8 rounded-full object-cover"
        />
          <span className="font-medium">{item.team}</span>
       </div>

         <span className="font-semibold text-right">{item.points}</span>
         </>
         )}
          </div>
        ))}

        
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 transition"
          >
            {showAll ? "Show less" : "Show all"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default WDCTable;