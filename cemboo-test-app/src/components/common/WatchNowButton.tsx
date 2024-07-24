import React from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const WatchNowButton:React.FC = () => {
  return (
    <button className='inline-flex bg-[#424347] lg:w-full lg:px-0 w-fit px-6 justify-center items-center py-2.5 mt-3 rounded-lg font-semibold text-base'>
      <span>
        <PlayArrowRoundedIcon />
      </span>
      <span>Watch Now</span>
    </button>
  )
}

export default WatchNowButton
