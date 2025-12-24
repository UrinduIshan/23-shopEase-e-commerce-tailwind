import React from 'react'
import { PLAY_STORE_IMG_URL, APP_STORE_IMG_URL } from '../utils/app.constants'

const Footer = () => {
  return (
    <div className='bg-black text-white p-20 md:px-36  mt-20 flex flex-col'>
      <span className='text-lg font-medium'>ShopEase</span>
      <span className='mt-8 hover:underline cursor-pointer'>Visit Help Center</span>

      <div>
        <div className='flex justify-between gap-2 mt-8 flex-wrap'>
            <div>
                <span className='text-lg font-medium'>Company</span>
                <div className='flex flex-col gap-3 mt-2'>
                    <span className='text-sm hover:underline cursor-pointer'>About us</span>
                    <span className='text-sm hover:underline cursor-pointer'>Our offerings</span>
                    <span className='text-sm hover:underline cursor-pointer'>Newsroom</span>
                    <span className='text-sm hover:underline cursor-pointer'>Investors</span>

                </div>
            </div>

            <div>
                <span className='text-lg font-medium'>Quick Links</span>
                <div className='flex flex-col gap-3 mt-2'>
                    <span className='text-sm hover:underline cursor-pointer'>Home</span>
                    <span className='text-sm hover:underline cursor-pointer'>Shop</span>
                    <span className='text-sm hover:underline cursor-pointer'>Best Sellers</span>
                    <span className='text-sm hover:underline cursor-pointer'>Deals</span>

                </div>
            </div>

            <div>
                <span className='text-lg font-medium'>Customer Support</span>
                <div className='flex flex-col gap-3 mt-2'>
                    <span className='text-sm hover:underline cursor-pointer'>FAQs</span>
                    <span className='text-sm hover:underline cursor-pointer'>Shipping & Deliver</span>
                    <span className='text-sm hover:underline cursor-pointer'>Retuns & Refunds</span>
                    <span className='text-sm hover:underline cursor-pointer'>Privacy Policy</span>

                </div>
            </div>

            <div>
                <span className='text-lg font-medium'>Follow Us</span>
                <div className='flex flex-col gap-3 mt-2'>
                    <span className='text-sm hover:underline cursor-pointer'>Instagram</span>
                    <span className='text-sm hover:underline cursor-pointer'>Facebook</span>
                    <span className='text-sm hover:underline cursor-pointer'>Twitter/X</span>
                    <span className='text-sm hover:underline cursor-pointer'>LinkedIn</span>
                </div>
            </div>
        </div>
      </div>

      <div className='flex gap-2 items-center justify-start'>
        <img src={PLAY_STORE_IMG_URL} alt="play-store-icon" className='w-[7.8rem] h-[7.8rem] cursor-pointer' />
        <img src={APP_STORE_IMG_URL} alt="play-store-icon" className='w-[7.8rem] h-[7.8rem] cursor-pointer' />
      </div>

      <span> &copy; 2025 ShopEase Technologies Inc.</span>
    </div>
  )
}

export default Footer
