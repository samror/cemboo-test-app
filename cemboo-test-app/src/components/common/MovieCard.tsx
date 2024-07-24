import React from 'react'

interface Movie {
  id: number;
  title: string;
  thumbnail_horizontal: string;
}
interface Props {
  index: number;
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({index, movie}) => {
  return (
    <div className='w-[200px] h-full flex flex-col gap-y-2 select-none *:select-none relative mx-[1rem]'>
      <img src={movie.thumbnail_horizontal} alt="" />
      <div className="absolute left-[-1rem] bottom-0 text-[5rem] text-[#F0EFF2] font-semibold">
        {index + 1}
      </div>
    </div>
  )
}

export default MovieCard
