import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Connect from '../components/Connect'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services />
        <Connect/>
    </div>
  )
}

export default Home