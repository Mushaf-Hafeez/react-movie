import React from 'react'

const MovieCard = ({movie: {title, poster_path, vote_average, release_date, original_language}}) => {

  return (
    <div className='p-5 shadow-inner shadow-dark-100 rounded-lg cursor-pointer hover:bg-slate-900 transition-all ease-in duration-100'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'no-poster.png'} alt="" />
        <h1 className='text-left my-2 font-semibold'>
            {
                title
            }
        </h1>
        <div className='mt-2 flex gap-1 items-center'>
            <img src="star.svg" alt="error while rendering ster icon" />
            <p className='font-semibold'>{vote_average.toFixed(1)}</p>
            <span className='text-gray-100'>•</span>
            <p className='font-semibold text-gray-100'>{release_date.split("-")[0]}</p>
            <span className='text-gray-100'>•</span>
            <p className='font-semibold text-gray-100'>{original_language}</p>

        </div>
    </div>
  )
}

export default MovieCard