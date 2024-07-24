import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  videoLink: string;
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLElement>;
}

const YouTubePlayerMedia: React.FC<Props> = ({videoLink, open, handleClose}) => {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
    onClick={handleClose}
  >
    <div className="h-[80vh] w-[80vw] bg-black relative border"  onClick={e => e.stopPropagation()}>
      <span className='absolute top-2 right-2 cursor-pointer z-10' onClick={handleClose}>
        <CloseIcon />
      </span>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zzFkspIW_WM?si=0aBa05sKpypULkTQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"       
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className='w-full h-full'>
      </iframe>
    </div>
  </Backdrop>
  )
}

export default YouTubePlayerMedia
