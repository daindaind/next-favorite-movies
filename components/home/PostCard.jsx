import Image from 'next/image'
import React from 'react'

const img = 'https://i.namu.wiki/i/Qcu4AfVpgp5ddeU8y7Sf5_XYjdHwSHUQuycZFROAEYTIkLeogeUFTaqb9YKkM0xXLNUz9LGbxD53F_J0N6hEfw.webp'

function PostCard() {
  return (
    <div className='relative flex flex-col gap-5 hover:cursor-pointer'>
      <Image alt="Poster" src={img} className="rounded-xl" width={250} height={360}/>
      <div className='absolute top-0 bottom-0 left-0 right-0 w-[250px] h-[360px] opacity-90 rounded-xl bg-gradient-to-t from-black'></div>
      <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center p-7 text-white text-sm font-light'>
         <p>Create By.</p>
         <p className='font-normal text-base mt-1 mb-12'>차다인</p>
         <p>이 영화는 제가 가장 좋아하는 영화입니다.</p>
      </div>
    </div>
  )
}

export default PostCard