import React from 'react'
import FictionCard from '../FictionCard/index.jsx'
import cards from '../data/races.json'

const FantasyNGaming = () => {

  const firstRow = cards.slice(0, 4);
  const secondRow = cards.slice(4, 7);

  return (
    <div className='w-full relative flex flex-col bg-[#1C2541] gap-4'>
      
      <div className='flex flex-col justify-center items-center w-full relative m-4'>
        <div className='w-full px-17 flex flex-col gap-1'>
          <h1 className='font-extrabold text-5xl text-white'>FANTASY AND GAMING</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-7 relative'>
        
        <div className='w-full flex justify-center gap-5'>
          {firstRow.map((card, index) => (
            <FictionCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className='w-full flex justify-center gap-5'>
          {secondRow.map((card, index) => (
            <FictionCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
          <div className='opacity-0 w-92 h-92'></div>
        </div>

      </div>
    </div>
  )
}

export default FantasyNGaming