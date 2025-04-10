import React from 'react'
import Hero from '../hero/Hero'
import './Home.css'
import DealSection from '../DealSection/DealSection'
import Trending from '../Trending/Trending'
import TopSellers from '../TopSeller/TopSeller'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <DealSection />
        <Trending />
        <TopSellers />
    </div>
  )
}

export default Home
