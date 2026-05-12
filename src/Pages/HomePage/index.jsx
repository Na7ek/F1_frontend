import React, { useState } from 'react'
import Partners from '../../Components/Partners'

const HomePage = () => {

  const [videoPage, setVideoPage] = useState(0)

  const videos = [
    { id: "QztBs3IZBHk", title: "Qualifying Highlights | 2026 Austrialian Grand Prix", duration: "08:06", start: 0 },
    { id: "lL_d84cN1UY", title: "Race Highlights | 2026 Australian Grand Prix", duration: "08:10", start: 0 },
    { id: "75-_kMm0mb8", title: "Qualifying Highlights | 2026 Chinese Grand Prix", duration: "08:00", start: 0 },
    { id: "t8HpVlineX4", title: "Race Highlights | 2026 Chinese Grand Prix", duration: "08:13", start: 0 },
    { id: "oZH_7pYJPTE", title: "Qualifying Highlights | 2026 Japanese Grand Prix", duration: "08:01", start: 0 },
    { id: "oAtYfF0_4-I", title: "Race Highlights | 2026 Japanese Grand Prix", duration: "08:08", start: 0 },
    { id: "83GJM1S0FnE", title: "Qualifying Highlights | 2026 Miami Grand Prix", duration: "08:00", start: 0 },
    { id: "5gYys4GL7S0", title: "Race Highlights | 2026 Miami Grand Prix", duration: "08:23", start: 0 }
  ]

  const VIDEOS_PER_PAGE = 6
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE)

  const currentVideos = videos.slice(
    videoPage * VIDEOS_PER_PAGE,
    videoPage * VIDEOS_PER_PAGE + VIDEOS_PER_PAGE

  )

  return (
    <div>
      <div className='min-h-screen px-8 py-10'>
        <div className='max-w-425 mx-auto flex flex-col gap-16'>


          <div className='flex flex-col gap-4'>
            <h1 className='text-white text-6xl'>FORMULA 1</h1>
          </div>


          <div className='flex flex-col gap-6 bg-[#0B132B] rounded-3xl p-8 border border-[#5BC0BE]/20 shadow-2xl'>
            <div className='flex items-center gap-2'>
              <div className='h-12 w-2 bg-[#5BC0BE]'></div>
              <h2 className='text-white text-4xl'>What is Formula 1?</h2>
            </div>

            <div className='grid xl:grid-cols-2 gap-8 items-center'>
              <p className='text-white text-lg w-full leading-9'>
                As the highest class of international racing for single-seater formula racing cars, Formula 1 is the pinnacle of motorsport and the world’s most prestigious motor racing competition. There really is nothing like it.
                It’s a team sport (it needs to be to change all four tyres on a car in under two seconds!), though the drivers are more like fighter pilots than sportspeople. Battling extreme g-forces, making daring decisions in the blink of an eye – and at more than 370kph (230mph). To be the best, F1 drivers push themselves – and their incredibly innovative machines – to the very limit.
                Drivers compete for the F1 Drivers’ Championship, while the teams fight for the F1 Teams’ Championship and prize money based on their position at the end of the season.
                Each race is known as a Grand Prix, and they’re held in incredible locations around the world. The 2026 Formula 1 calendar features 24 Grand Prix weekends, which include six F1 Sprint races, taking place from March through December.
              </p>

              <div className='overflow-hidden rounded-3xl'>
                <img
                  className='w-full h-full object-cover hover:scale-105 transition-all duration-500'
                  src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/sutton/2018/Abu%20Dhabi/Sunday/dcd1825no2014.webp"
                  alt=""
                />
              </div>
            </div>
          </div>


          <div className='flex flex-col gap-6 bg-[#0B132B] rounded-3xl p-8 border border-[#5BC0BE]/20 shadow-2xl'>
            <div className='flex items-center gap-2'>
              <div className='h-12 w-2 bg-[#5BC0BE]'></div>
              <h2 className='text-white text-4xl'>How many drivers and teams race in F1?</h2>
            </div>

            <div className='grid xl:grid-cols-2 gap-8 items-center'>
              <div className='overflow-hidden rounded-3xl'>
                <img
                  className='w-full h-full object-cover hover:scale-105 transition-all duration-500'
                  src="https://media.formula1.com/image/upload/t_16by9North/c_lfill,w_3392/q_auto/v1740000001/fom-website/2023/Austria/GettyImages-1247769286.webp"
                  alt=""
                />
              </div>

              <p className='text-white text-lg w-full leading-9'>
                A total of 11 teams and 22 drivers from around the world make up the current Formula 1 grid, with each squad fielding two cars.
                Driver experience ranges from multiple World Champions like Lewis Hamilton, Max Verstappen and Fernando Alonso – as well as the new 2025 World Champion Lando Norris – to rookie racer Arvid Lindblad who is embarking on his first F1 campaign in 2026 with the Racing Bulls team.
                When it comes to teams, there are those who have been in Formula 1 since the early years, such as Ferrari (competing continuously since the very first season in 1950) and McLaren, and relative newcomers like Haas who entered the sport ahead of the 2016 season. In 2026 there is also a brand-new team to support with Cadillac entering for the first time.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-6 bg-[#0B132B] rounded-3xl p-8 border border-[#5BC0BE]/20 shadow-2xl overflow-hidden'>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='h-12 w-2 bg-[#5BC0BE]'></div>
                <h2 className='text-white text-4xl'>2026 Highlights</h2>
              </div>

              <div className='flex items-center gap-4'>
                <button
                  onClick={() => setVideoPage(p => Math.max(0, p - 1))}
                  className='text-white text-2xl hover:text-[#5BC0BE] transition disabled:opacity-30'
                  disabled={videoPage === 0}
                >
                  🡰
                </button>

                <span className='text-white text-sm opacity-80 hover:opacity-100 cursor-pointer'>
                  <h2 className='text-xl'>View all</h2>
                </span>

                <button
                  onClick={() => setVideoPage(p => Math.min(totalPages - 1, p + 1))}
                  className='text-white text-2xl hover:text-[#5BC0BE] transition disabled:opacity-30'
                  disabled={videoPage >= totalPages - 1}
                >
                  🡲
                </button>
              </div>
            </div>

            <div className='flex gap-6 overflow-hidden'>
              {Array.from({ length: VIDEOS_PER_PAGE }).map((_, i) => {
                const absoluteIdx = videoPage * VIDEOS_PER_PAGE + i
                const video = videos[absoluteIdx % videos.length]
                const isPrimary = absoluteIdx < videos.length

                return (
                  <a
                    key={`${video.id}-${i}`}
                    href={`https://www.youtube.com/watch?v=${video.id}&t=${video.start}s`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`group flex-1 min-w-0 ${!isPrimary ? 'opacity-40' : ''}`}
                  >
                    <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black transition-transform duration-300 group-hover:scale-[1.02]'>
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                        className='w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity'
                        alt={video.title}
                      />
                      <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300' />
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='w-12 h-12 bg-black/60 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-[#5BC0BE] group-hover:border-[#5BC0BE] transition-all'>
                          <div className='w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-white border-b-8 border-b-transparent ml-1'></div>
                        </div>
                      </div>
                      <div className='absolute bottom-2 right-2 bg-black/80 text-[10px] font-bold px-1.5 py-0.5 rounded text-white'>
                        {video.duration}
                      </div>
                    </div>

                    <p className='mt-3 text-base font-bold leading-tight text-white group-hover:text-[#5BC0BE] transition-colors'>
                      {video.title}
                    </p>
                  </a>
                )
              })}
            </div>

          </div>


          <div className='flex flex-col gap-6 bg-[#0B132B] rounded-3xl p-8 border border-[#5BC0BE]/20 shadow-2xl'>
            <div className='flex items-center gap-2'>
              <div className='h-12 w-2 bg-[#5BC0BE]'></div>
              <h2 className='text-white text-4xl'>Where does F1 race?</h2>
            </div>

            <div className='grid xl:grid-cols-2 gap-8 items-center'>
              <p className='text-white text-lg w-full leading-9'>
                A total of 24 races in 21 countries across five continents are included on the Formula 1 calendar. Classic circuits such as Silverstone, Spa-Francorchamps and Suzuka, combined with more recent additions including Las Vegas, Miami and Saudi Arabia, give an exciting and varied selection of tracks.
                Monaco, Monza, Silverstone and Spa are circuits that still feature on the schedule from the very first F1 season in 1950, although plenty of safety-based changes and track layout modifications have been made since then.
                There is also a brand new track in 2026 for F1's drivers to tackle as Madrid hosts the Spanish Grand Prix on the new, purpose-built Madring circuit.
                Formula 1’s inaugural season in 1950 featured seven rounds, spread out from May to September, predominantly staged in Europe – the exception being the Indianapolis 500 in the United States, which most F1 drivers sat out.
                New European events arrived as F1 developed, with the following decades also bringing adventures to South America, North America, Africa, Asia, Australia and, most recently, the Middle East – well and truly putting the ‘world’ in World Championship.
              </p>

              <div className='overflow-hidden rounded-3xl'>
                <img
                  className='w-full h-full object-cover hover:scale-105 transition-all duration-500'
                  src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/manual/Misc/Pictorial%20history%20of%20Eau%20Rouge/1980s/87rsm_019.webp"
                  alt=""
                />
              </div>
            </div>
          </div>


          <div className='flex flex-col gap-6 bg-[#0B132B] rounded-3xl p-8 border border-[#5BC0BE]/20 shadow-2xl'>
            <div className='flex items-center gap-2'>
              <div className='h-12 w-2 bg-[#5BC0BE]'></div>
              <h2 className='text-white text-4xl'>How does the F1 weekend work?</h2>
            </div>

            <div className='grid xl:grid-cols-2 gap-8 items-center'>
              <div className='overflow-hidden rounded-3xl'>
                <img
                  className='w-full h-full object-cover hover:scale-105 transition-all duration-500'
                  src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/trackside-images/2025/F1_Grand_Prix_of_Italy/2234142114.webp"
                  alt=""
                />
              </div>

              <p className='text-white text-lg w-full leading-9'>
                The standard Formula 1 weekend sees each event take place over three days – typically Friday, Saturday and Sunday (Las Vegas is an exception running from Thursday, Friday and Saturday).
                Friday traditionally features two 60-minute Free Practice sessions (FP1 and FP2) for teams to set up and optimise their cars. These are typically used to make sure the car works as it should, before set-up changes are then made and race preparations continue.
                On Saturday, after a final practice session (FP3), drivers head into a three-stage session called Qualifying. The slowest six drivers from the 18-minute Q1 phase are eliminated from the session, before six more go out after the 15-minute Q2 segment. That sets positions 20-11 on the grid for the Grand Prix prior to any penalties. The final 13-minute-long Q3 then decides the top 10 grid slots, including the coveted pole position for the fastest driver.
                Sunday brings the Grand Prix itself, where drivers battle it out to score points, grab a spot on the podium and reach the chequered flag first to win the race.
              </p>
            </div>
          </div>


          {/* <div className='flex flex-col gap-6 bg-[#0B132B] rounded-3xl p-8 border border-[#5BC0BE]/20 shadow-2xl'>
          <div className='flex items-center gap-2'>
            <div className='h-12 w-2 bg-[#5BC0BE]'></div>
            <h2 className='text-white text-4xl'>How do F1 cars work?</h2>
          </div> */}

          {/* <div className='grid xl:grid-cols-2 gap-8 items-center'>
            <p className='text-white text-lg w-full leading-9'>
              Thousands of parts are involved in creating some of the fastest and most advanced racing cars on the planet – spanning detailed bodywork, suspension elements, turbo-hybrid power units, eight-speed paddle shift gearboxes, 18-inch tyres and much, much more.
              When the engine powers it forward, an F1 car essentially acts as an aeroplane flipped upside down, with front and rear wings – and everything in between – pushing the car down onto the track and giving it incredible levels of grip through corners.
              That said, for 2026 F1's technical regulations have been completely revamped in the biggest shake up the sport has seen for more than a decade. The previous 'ground effect' aerodynamic concept (that lasted from 2022-2025) has completely changed, with cars now shorter, narrower, lighter and nimbler.
              The previous era's cars had several carefully designed tunnels underneath the car's floor, sucking the car to the track surface, but in 2026 the cars will have flatter floors instead.
              However, the most significant change regarding the aerodynamics is the introduction of Active Aero – the cars can adjust the angle of both their front and rear wing elements depending on where they are on track. In the corners the flaps stay shut, to maintain grip, and on the designated straights, the drivers can activate low-drag mode, which opens the flaps and flattens the wings to reduce drag and boost their top speed.
              But that's not all that's changing, as the power units are also getting a significant revamp. While the core is still a 1.6-litre V6 turbo hybrid, the power balance has shifted significantly – for 2026 we've got roughly a 50-50 power split between petrol and electric.
              This makes the power units more road relevant – and more attractive to existing manufacturers Ferrari and Mercedes, newcomers Red Bull Powertrains in partnership with Ford, General Motors (from 2029) and Audi, plus returning suppliers Honda.
            </p>

            <div className='overflow-hidden rounded-3xl'>
              <img
                className='w-full h-full object-cover hover:scale-105 transition-all duration-500'
                src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/fom-website/2026%20regulations/2026_Explainer_FIA_Front_3_4_1920x1080.webp"
                alt=""
              />
            </div>
          </div> */}
          {/* </div> */}



          <div className='flex flex-col gap-10'>
            <h1 className='text-white text-6xl'>EXPLORE MORE</h1>
            <div className='flex gap-6 items-center'>
              <a href="/Teams">
                <div
                  className="h-85 w-196 group rounded-xl relative overflow-hidden shadow-xl cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000001/fom-website/2025/Miscellaneous/GettyImages-2217540297.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
                  <h2 className="absolute bottom-4 left-5 text-gray-200 text-4xl font-semibold tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    TEAMS
                  </h2>
                </div>
              </a>

              <a href="/Drivers">
                <div
                  className="h-85 w-98 group rounded-xl relative overflow-hidden shadow-xl cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(https://i.pinimg.com/1200x/81/88/35/81883577bdafa5f2001fe56f01602113.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
                  <h2 className="absolute bottom-4 left-5 text-gray-200 text-4xl font-semibold tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    DRIVERS
                  </h2>
                </div>
              </a>

              <a href="/Results">
                <div
                  className="h-85 w-98 group rounded-xl relative overflow-hidden shadow-xl cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(https://www.telegraph.co.uk/content/dam/formula-1/2017/07/30/TELEMMGLPICT000134900630_trans_NvBQzQNjv4BqNadeZm0KzkFwpSYJhHDpPbQMI5hkDcUBB5qZKQzbZSY.jpeg?imwidth=640)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
                  <h2 className="absolute bottom-4 left-5 text-gray-200 text-4xl font-semibold tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    RESULTS
                  </h2>
                </div>
              </a>
            </div>
            <div className='flex gap-6 items-center'>

              <a href="/Fantasy&Gaming">
                <div
                  className="h-85 w-98 group rounded-xl relative overflow-hidden shadow-xl cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/Upgrade/F1-Fantasy-2021-Website-16x9-V2.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
                  <h2 className="absolute bottom-4 left-5 text-gray-200 text-4xl font-semibold tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    FANTASY AND GAMING
                  </h2>
                </div>
              </a>

              <a href="/HallOfFame">
                <div
                  className="h-85 w-98 group rounded-xl relative overflow-hidden shadow-xl cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(https://i.pinimg.com/1200x/7e/96/ea/7e96ea39c3f87cb7fa88d7e86c297d93.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
                  <h2 className="absolute bottom-4 left-5 text-gray-200 text-4xl font-semibold tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    HALL OF FAME
                  </h2>
                </div>
              </a>
              <a href="/Schedule">
                <div
                  className="h-85 w-196 group rounded-xl relative overflow-hidden shadow-xl cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(https://i.pinimg.com/1200x/f6/9b/a4/f69ba479fe62ae85d93acb243f57ee23.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"></div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
                  <h2 className="absolute bottom-4 left-5 text-gray-200 text-4xl font-semibold tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    SCHEDULE
                  </h2>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
      <Partners />
    </div>
  )
}

export default HomePage