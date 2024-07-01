import React from 'react'
import MoviePoster from './MoviePoster'

function MoviePosterSlide() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row pb-5 overflow-x-scroll overflow-y-visible'>
         {new Array(20).fill(null).map((item, index) => (
            <div key={index} className='mt-1 mr-1 mb-1 ml-0 pl-1 flex-shrink-0'>
               <MoviePoster />
            </div>
         ))}
      </div>
    </div>
  )
}

export default MoviePosterSlide