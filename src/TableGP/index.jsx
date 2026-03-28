import React from 'react'

const TableGP = () => {
  return (
    <div>
      <ul>
        {Array.from({ length: 22 }).map((_, i) => (
        <li className='h-15 flex items-center justify-center relative w-300 bg-white' key={i}>
            <p className='absolute left-12'>George Russell</p>
            <p className='absolute left-5'>{i+1}</p>
            <p className='absolute right-120'>Lap time</p>
            <p className='absolute right-5'>P</p>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default TableGP