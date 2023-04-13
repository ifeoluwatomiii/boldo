import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center py-[82px]'>
            <p className='text-[#777777]'>Our Services</p>
            <h2 className='leading-[72px] text-[48px] text-center'>Handshake infographic mass market <br /> crowdfunding iteration.</h2>
        </div>
        <div>
            <ServicesCard/>
        </div>
    </div>
  )
}

export default Services