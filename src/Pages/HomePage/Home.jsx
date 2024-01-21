import React from 'react'
import HeroSection from './HeroSection'
import PopularDish from './PopularDish'
import AboutUsSection from './AboutUsSection'
import MenuSection from './MenuSection'
import HowToOrder from './HowToOrder'
import JoinUsSection from './JoinUsSection'

export default function Home() {
  return (
    <div className='bg-bgMain h-fit flex flex-col'>
      <HeroSection/>
      <PopularDish/>
      <AboutUsSection/>
      <MenuSection/>
      <HowToOrder/>
      <JoinUsSection/>
    </div>
  )
}
