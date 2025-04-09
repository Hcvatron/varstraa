import React from 'react'
import Hero from '../hero/Hero'
import './Home.css'
import DealSection from '../DealSection/DealSection'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <DealSection />
    </div>
  )
}

export default Home
