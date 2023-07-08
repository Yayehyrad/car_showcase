import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomBtn from './CustomBtn'
// a walk to remember
const NavBar = () => {
  return (
    <header className=' w-full absolute z-10'>
      <nav className='h-2 max-w-[1440px] mx-auto flex justify-between items-center p-6 sm:px-16 py-4'>
        <Link href={'/'} className=' flex justify-between items-center'>
            <Image src={'/logo.svg'} alt='Logo' width={118} height={18} className=" object-contain "/>
        </Link> 
        <CustomBtn title={'Sign In'} btnType={'button'}  containerStyles={' text-primary-blue min-w-[130px] bg-violet-50 rounded-md bg-opacity-50'}/>
      </nav>
    </header>
  )
}

export default NavBar
