import React from 'react'

const FeatureSection = (item) => {
  const {srcImg, title, description, ctaTitle, className} = item.feature;
  return (
    <div className={className}>
      <div className='bg-wild-sand p-8 rounded-md'>
        <img src={srcImg} alt="" className='h-100 w-md object-contain' />
      </div>  

      <div className='flex flex-col items-start gap-4 justify-center w-120'>
        <span className='text-4xl font-bold'>{title}</span>
        <span  className='text-base'>{description}</span>
        <button className='bg-black text-white px-6 py-3 rounded-md font-medium cursor-pointer hover:bg-black/90'>{ctaTitle}</button>
      </div>
    </div>
  )
}

export default FeatureSection
