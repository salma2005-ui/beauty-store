import React from 'react'
import Image from 'next/image'
import hero from '../public/hero.png'
const Hero = () => {
  return (
    <div className="w-full h-[500px] relative">
 
 <Image src={hero}  className="  w-full h-[600px] object-cover" alt=""></Image>

<h1 className='absolute inset-0 text-4xl font-bold  flex flex-start items-center  px-10 pb-30 '>Discover our Beauty Collection</h1>
  
    </div>
  )
}

export default Hero