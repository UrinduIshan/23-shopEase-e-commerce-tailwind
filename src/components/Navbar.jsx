import React from 'react'
import cartIcon from '../assets/cart-icon.svg'

const Navbar = () => {
  return (
    <div className='bg-black flex text-white justify-between py-4 px-16'>
      <div className='flex items-center justify-center gap-5'>
        <span className='text-lg font-medium cursor-pointer'>ShopEase</span>
        <span className='text-sm cursor-pointer hover:underline'>Shop</span>
        <span className='text-sm cursor-pointer hover:underline'>Best Sellers</span>
        <span className='text-sm cursor-pointer hover:underline'>Deals</span>
      </div>

      <div className='md:flex items-center justify-center gap-5 hidden'>
        <div className='flex items-center gap-1 hover:underline cursor-pointer'>
            <img src={cartIcon} alt="" />
            <span>Cart</span>
        </div>
        <span className='hover:underline cursor-pointer text-sm'>Help</span>
        <span className='hover:underline cursor-pointer text-sm'>Login</span>
        <span className='bg-white text-black py-2 px-3 rounded-full font-medium text-sm cursor-pointer'>Signup</span>
      </div>
    </div>
  )
}

export default Navbar
