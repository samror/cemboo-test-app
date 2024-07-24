import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TimerIcon from '@mui/icons-material/Timer';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface Props {
  navOpened: boolean;
  setNavOpened: any;
}

const SideBarMob: React.FC<Props> = ({navOpened, setNavOpened}) => {
  return (
    <aside className={`lg:hidden flex flex-col w-[80vw] h-screen bg-black fixed top-0 left-0 z-[100] transition-transform duration-100 ${navOpened ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="h-1/4 px-3 pt-3 flex justify-end">
        <span onClick={e => setNavOpened(false)}>
          <CloseRoundedIcon style={{color:"white"}}/>
        </span>
      </div>
      <div className="h-2/4 flex flex-col px-[2.5rem] justify-between text-white">
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <AccountCircleIcon style={{color:"gray"}}/>
          <span className='inline text-gray-600'>My Space</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <SearchIcon style={{color:"gray"}}/>
          <span className='inline text-gray-600'>Search</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <HomeIcon style={{color:"white"}}/>
          <span className='inline text-white'>Home</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <LiveTvIcon style={{color:"gray"}}/>
          <span className='inline text-gray-600'>TV</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <BookmarksIcon style={{color:"gray"}}/>
          <span className='inline text-gray-600'>Movies</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <TimerIcon style={{color:"gray"}}/>
          <span className='inline text-gray-600'>Sports</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <WidgetsIcon style={{color:"gray"}}/>
          <span className='inline text-gray-600'>Categories</span>
        </span>
      </div>
      <div className="h-1/4"></div>
      
    </aside>
  )
}

export default SideBarMob
