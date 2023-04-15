import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Connect from '../components/Connect'
import Customers from '../components/Customers'
import Template from '../components/Template'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services />
        <Connect/>
        <Customers/>
        <Template/>
    </div>
  )
}

export default Home