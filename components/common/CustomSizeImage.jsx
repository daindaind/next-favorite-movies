import Image from 'next/image'
import React from 'react'

function CustomSizeImage({width, height, alt, src}) {
   console.log(width, height, alt, src)
  return (
   <div className={`w-[${width}] h-[${height}] relative`}>
      <Image alt={alt} src={src} className="rounded-xl" fill property />
   </div>
  )
}

export default CustomSizeImage