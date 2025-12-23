import React from 'react'
import heroImg from '../assets/hero-image.png'


const HeroSection = () => {
  return (
    <div className='flex items-center justify-center gap-8 lg:gap-0 lg:justify-between w-[82%] m-auto mt-28 
        lg:flex-nowrap flex-wrap'>
      <div className='flex flex-col gap-4 lg:w-[45%]'>
        <span className='text-[3.25rem] font-medium'>Shop Smarter. Shop Better</span>
        <span className='w-full'>Discover thousands of products, each carefully selected for quality, style, and value bringing everything you need and love into one convenient place.</span>

        <div className='flex gap-4 mt-8'>
            <button className='bg-black text-white py-3 px-8 rounded-md font-medium cursor-pointer hover:bg-black/90'>Show Now</button>
            <button className='bg-black text-white py-3 px-8 rounded-md font-medium cursor-pointer hover:bg-black/90'>Explore Deals</button>
        </div>
      </div>

      <img src={heroImg} alt="hero-img" className='w-[20rem] lg:w-120 lg:h-100' />
    </div>
  )
}

export default HeroSection
