import React from 'react'
import firstFeature from '../assets/first-feature.png'


const FeatureSection = () => {
  return (
    <div className='flex mt-28 px-8 items-center  gap-8 justify-center lg:gap-50 flex-wrap'>
      <div className='bg-wild-sand p-8 rounded-md'>
        <img src={firstFeature} alt="" className='h-100 w-md object-contain' />
      </div>  

      <div className='flex flex-col items-start gap-4 justify-center w-120'>
        <span className='text-4xl font-bold'>Why Choose Us</span>
        <span  className='text-base'>we make online shopping simple, safe and rewarding with premium products, fast delivery and customer-first service.
        </span>
        <button className='bg-black text-white px-6 py-3 rounded-md font-medium cursor-pointer hover:bg-black/90'>Learn More</button>
      </div>
    </div>

    
  )
}

export default FeatureSection
