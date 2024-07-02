import React from 'react'

function ThirdUI() {
  return (
    <div className='flex flex-col justify-center items-center mb-[100px]'>
      <h1 className='text-5xl font-bold text-default-text z-[100]'>인기 게시글</h1>
      <h3 className='text-xl font-medium text-default-text mt-3 mb-20 z-[100]'>모두의 취향이 담긴 소개를 읽어보세요</h3>
      
      <div className='grid-cols-2 gap-5'>
        {new Array(4).fill(null).map((item, index) => (
            <div key={index}></div>
        ))}
      </div>
    </div>
  )
}

export default ThirdUI