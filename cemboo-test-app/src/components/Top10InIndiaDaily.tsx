import React, { useEffect, useRef, useState } from 'react';
import MovieCard from './common/MovieCard';
import axios from 'axios';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const Top10InIndiaDaily: React.FC = () => {

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [movies, setMovies] = useState([])
  const apiUrl = `https://api.pastecode.io/anon/raw-snippet/4owen59r?raw=inline&api=true&ticket=${process.env.REACT_APP_API_KEY}&password=SNIPPET_PASSWORD_IF_NEEDED`
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setMovies(response.data);
    }).catch((error) => {console.log(error);});
  }, [apiUrl])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className='h-fit w-full py-3 ps-3 bg-black text-white flex flex-col gap-y-2 relative'>
      <h1 className='font-semibold'>Top 10 in India Today - Daily</h1>
      <div
        ref={containerRef}
        className="flex w-full overflow-x-auto overflow-y-hidden h-[20rem] cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="w-fit h-full flex">
          {movies.map((item, i) => <MovieCard key={i} index={i} movie={item} /> ) }
        </div>
      </div>

      <span className='bg-white py-1 px-[0.35rem] rounded-full cursor-pointer absolute z-20 left-[1rem] top-1/2' onClick={e => {
        containerRef!.current!.scrollBy({ left: -250, behavior: 'smooth' });
      }} >
        <ChevronLeftRoundedIcon style={{color:"black"}} />
      </span>
      <span className='bg-white py-1 px-[0.35rem] rounded-full cursor-pointer absolute z-20 right-[1rem] top-1/2' onClick={e => {
        containerRef!.current!.scrollBy({ left: +250, behavior: 'smooth' });
      }} >
        <ChevronRightRoundedIcon style={{color:"black"}} />
      </span>

    </div>
  );
};

export default Top10InIndiaDaily;