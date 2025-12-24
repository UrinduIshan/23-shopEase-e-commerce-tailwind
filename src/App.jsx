import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopProducts from './components/TopProducts'
import FeatureSection from './components/FeatureSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopProducts />
      <div className='flex flex-col w-full lg:w-[80%] m-auto'>
        <FeatureSection />
        
      </div>
    </div>
  )
}

export default App
