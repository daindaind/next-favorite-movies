import Image from 'next/image'
import React from 'react'

const img = 'https://i.namu.wiki/i/Qcu4AfVpgp5ddeU8y7Sf5_XYjdHwSHUQuycZFROAEYTIkLeogeUFTaqb9YKkM0xXLNUz9LGbxD53F_J0N6hEfw.webp'

function MoviePoster({onClick}) {
  return (
    <div onClick={onClick} className='flex flex-col gap-1 transition-transform duration-300 ease hover:transition-transform hover:cursor-pointer hover:scale-95 transform-gpu'>
      <Image src={img} width={250} height={360} alt="Poster" className="bg-gray-08 rounded-md shadow-md" />
      <h5 className='flex mt-3 font-light text-lg text-default-text'>영화 제목</h5>
      <p className='flex font-extralight text-xs text-default-text'>영화 슬러그</p>
    </div>
  )
}

export default MoviePoster