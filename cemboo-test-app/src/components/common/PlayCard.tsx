import React from 'react'

const PlayCard: React.FC = () => {
  return (
    <div className='flex flex-col lg:w-[18rem] sm:w-[25rem] w-[90vw] gap-y-3'>
      <span className='text-xs font-semibold'>Premier League 2023/24 • 6m • Football</span>
      <span className='text-xs'>Phil Foden scored a brace as Manchester City
        humbled Brighton to move within one point of league
        leaders Arsenal in the Premier League 2023/24
      </span>
    </div>
  )
}

export default PlayCard
