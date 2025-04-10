import React from 'react'
import Hero from '../hero/Hero'
import './Home.css'
import DealSection from '../DealSection/DealSection'
import Trending from '../Trending/Trending'
import TopSeller from '../TopSeller/TopSeller'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <DealSection />
        <Trending />
        <TopSeller />
    </div>
  )
}

export default Home
