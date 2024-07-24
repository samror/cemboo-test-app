import React, { useState } from 'react';
import YouTubePlayerMedia from './YouTubePlayerMedia';

interface Movie {
  id: number;
  title: string;
  thumbnail_vertical: string;
}

interface Props {
  movie: Movie;
}

const VideoCard: React.FC<Props> = ({ movie }) => {
  const [mediaItemOpened, setMediaItemOpened] = useState(false);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMediaItemOpened(true);
  };

  return (
    <main className='' style={{ overflow: 'visible' }}>
      <div
    className='relative w-[200px] h-full flex flex-col gap-y-2 select-none hover:cursor-pointer transition duration-400 transform      
    hover:scale-[1.5] hover:z-50 image-scale hover:top-10'
        onClick={handleOpen}
        style={{ zIndex: 10 }}
      >
        <img src={movie.thumbnail_vertical} alt="" className='w-[200px] rounded-md' />
        <div className="type flex gap-x-2 text-xs">
          <span className='bg-[#525252] px-1 rounded-sm'>Standard</span>
          <span>Free Episodes</span>
        </div>
        <h1 className='text-xs'>{movie.title}</h1>
      </div>
      {mediaItemOpened && (
        <YouTubePlayerMedia videoLink='#' open={mediaItemOpened} handleClose={e => setMediaItemOpened(false)} />
      )}
    </main>
  );
};

export default VideoCard;
