import React from 'react'
import Button from './common/Button'
import PlayCard from './common/PlayCard'
import WatchNowButton from './common/WatchNowButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Hero: React.FC<{setNavOpened: any}> = ({setNavOpened}) => {
  return (
    <div style={{backgroundImage:"url('/images/banner-image.jpg')"}} className='lg:h-screen h-fit w-full bg-no-repeat bg-cover '>
      <div className="h-full header-gradient flex flex-col justify-center text-white gap-y-4 lg:w-fit w-full items-center lg:py-0 py-[3rem]">
        <span className='absolute left-4 top-4' onClick={e => setNavOpened(true)}>
          <MenuRoundedIcon/>
        </span>
        <h1 className='text-5xl font-extrabold italic'>BHA <span className='text-blue-500'>VS</span> MCI</h1>
        <Button />
        <PlayCard />
        <WatchNowButton />
      </div>
    </div>
  )
}

export default Hero
