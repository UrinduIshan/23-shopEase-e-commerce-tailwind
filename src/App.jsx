import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TopProducts from './components/TopProducts'
import FeatureSection from './components/FeatureSection'
import { featureData } from './assets/featureData'  

const App = () => {
  const features = featureData;
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopProducts />
      <div className='flex flex-col w-full lg:w-[80%] m-auto'>

        {features.map((feature, index) => (
          <FeatureSection key={index} feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default App
