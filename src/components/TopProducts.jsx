import React, { useEffect } from 'react'
import { useState } from 'react'
import { PRODUCTS_URL } from '../utils/app.constants'

const TopProducts = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch(PRODUCTS_URL);
        const {products} = await response.json();
        console.log(products)
        setProducts(products)
    } 
    
    useEffect(() => {
        const fetchData = async () => {
            await fetchProducts();
        };
        fetchData();
    }, [])


  return (
    <div className='flex flex-col w-[80%] m-auto mt-28'>
      <span className='text-4xl font-bold'>Top Products</span>
      <div className="flex gap-8 overflow-x-scroll mt-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onWheel={(e) => {
        e.currentTarget.scrollLeft += e.deltaY;
    }}>
        {products.map((product) => {
            return <div key={product.id} className='max-w-70 min-w-70 h-80 flex flex-col items-center justify-center 
               whitespace-nowrap bg-wild-sand p-4 rounded-lg'>
                <img src={product.thumbnail} alt={product.title} className='w-full h-full object-cover'/>
                <span>{product.title}</span>
                <span className='font-medium'>{product.price}</span>
            </div>
        })}
      </div>
    </div>
  )
}

export default TopProducts
