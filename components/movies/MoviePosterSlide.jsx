import React from 'react'
import MoviePoster from './MoviePoster'
import { useRouter } from 'next/router'
import { PAGE_URL } from '@/constants/router';

function MoviePosterSlide() {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row pb-5 ml-6 overflow-x-scroll overflow-y-visible'>
         {new Array(20).fill(null).map((item, index) => (
            <div key={index} className='mt-1 mr-1 mb-1 ml-0 pl-1 flex-shrink-0'>
               <MoviePoster onClick={() => router.push(`${PAGE_URL.MOVIES}/${index}`)}/>
            </div>
         ))}
      </div>
    </div>
  )
}

export default MoviePosterSlide