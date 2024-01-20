import React from 'react'
import HeroSection from './HeroSection'
import PopularDish from './PopularDish'

export default function Home() {
  return (
    <div className='bg-bgMain h-fit flex flex-col'>
      <HeroSection/>
      <PopularDish/>
    </div>
  )
}
