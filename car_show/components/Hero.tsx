'use client'
import React from 'react'
import CustomBtn from './CustomBtn'


const Hero = () => {
    const handleScroll = ()=>{

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-3 padding-x'>
            <div className=' hero__title'>
                Find, Book or rent a car
            </div>
            <p className='hero__subtitle '>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque, in nesciunt aperiam.</p>
            <CustomBtn title='Explore cars' containerStyles= 'bg-blue-500 rounded-full mt-10 text-white' handeCick ={handleScroll}/>
        </div>
    </div>
  )
}

export default Hero
