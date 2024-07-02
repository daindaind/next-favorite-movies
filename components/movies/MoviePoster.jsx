import Image from 'next/image'
import React from 'react'


function MoviePoster({movieData, onClick}) {
  return (
    <div onClick={onClick} className='flex flex-col gap-1 transition-transform duration-300 ease hover:transition-transform hover:cursor-pointer hover:scale-95 transform-gpu'>
      <Image src={movieData?.image} width={250} height={360} alt="Poster" className="bg-gray-08 rounded-md shadow-md" />
      <h5 className='flex mt-3 font-normal text-lg text-default-text'>{movieData?.title}</h5>
      <p className='flex font-extralight text-xs text-default-text'>{movieData?.slug}</p>
    </div>
  )
}

export default MoviePoster