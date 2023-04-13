import React from 'react'
import logo from '../assets/logo2.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-[100px] py-[54px] bg-[#0A2640]'>
        <div>
            <img src={logo} alt="boldo logo" />
        </div>
        <div className='flex gap-[40px] items-center text-white'>
            <Link to="/">Product</Link>
            <Link to="services">Services</Link>
            <Link to="about">About</Link>
            <button className='border-2 rounded-3xl py-2 px-8 text-[#0A2640] bg-white font-bold'>Log in</button>
        </div>
        
    </div>
  )
}

export default Navbar