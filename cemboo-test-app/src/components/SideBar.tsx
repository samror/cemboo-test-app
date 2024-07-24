import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TimerIcon from '@mui/icons-material/Timer';
import WidgetsIcon from '@mui/icons-material/Widgets';

const SideBar: React.FC = () => {
  return (
    <aside className='lg:flex hidden flex-col bg-black fixed left-0 top-0 h-screen w-1/12 hover:w-2/12 z-50 transition-all duration-100 group'>
      <div className="h-1/4"></div>
      <div className="h-2/4 flex flex-col px-[2.5rem] justify-between">
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <AccountCircleIcon style={{color:"gray"}}/>
          <span className='group-hover:inline hidden text-gray-600'>My Space</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <SearchIcon style={{color:"gray"}}/>
          <span className='group-hover:inline hidden text-gray-600'>Search</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <HomeIcon style={{color:"white"}}/>
          <span className='group-hover:inline hidden text-white'>Home</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <LiveTvIcon style={{color:"gray"}}/>
          <span className='group-hover:inline hidden text-gray-600'>TV</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <BookmarksIcon style={{color:"gray"}}/>
          <span className='group-hover:inline hidden text-gray-600'>Movies</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <TimerIcon style={{color:"gray"}}/>
          <span className='group-hover:inline hidden text-gray-600'>Sports</span>
        </span>
        <span className="cursor-pointer inline-flex gap-x-3 items-center side-bar-hover-effect">
          <WidgetsIcon style={{color:"gray"}}/>
          <span className='group-hover:inline hidden text-gray-600'>Categories</span>
        </span>
      </div>
      <div className="h-1/4"></div>
    </aside>
  )
}

export default SideBar
