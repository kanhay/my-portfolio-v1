'use client'
import React, { useEffect, useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'


const Navbar = () => {
    const [ isScroll, setIsScroll ] = useState(false)
    const [ openMenu, setOpenMenu ] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(true)
    }
    const handleCloseMenu = () => {
        setOpenMenu(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50)
                setIsScroll(true)
            else
                setIsScroll(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt='' className='' />
        </div>
        <nav className={`flex items-center justify-between w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg border border-white/30 shadow-lg" : ""}`}>
            <a href='/'>
                <Image alt='#top' src={assets.logo} className='w-28 cursor-pointer mr-14'/>
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "shadow-sm bg-white/50"}`}>
                <li>
                    <a href='#top' className='hover:text-[#F94625]' >Home</a>
                </li>
                <li>
                    <a href='#about' className='hover:text-[#F94625]' >About me</a>
                </li>
                {/* <li>
                    <a href='#services' className='hover:text-[#F94625]' >Services</a>
                </li> */}
                <li>
                    <a href='#work' className='hover:text-[#F94625]' >My work</a>
                </li>
                <li>
                    <a href='#contact' className='hover:text-[#F94625]' >Contact me</a>
                </li>
            </ul>
            <div className='flex'>
                {/* <button>
                    <Image src={assets.moon_icon} alt='' className='w-6 cursor-pointer' />
                </button> */}
                <a href='#contact' className='hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 hover:border-2 hover:border-[#F94625] rounded-full ml-4 '>Contact<Image alt='' src={assets.arrow_icon} className="w-3"/></a>
                <button className='block md:hidden ml-3 ' onClick={handleOpenMenu}>
                    <Image src={assets.menu_black} alt='' className='w-6 cursor-pointer' />
                </button>
            </div>

            {/* -------------------- mobile menu --------------------- */}
            {openMenu && 
                <ul className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0
                    top-0 w-64 z-50 bg-rose-50 transition duration-500'>
                    <div className='absolute top-6 right-6 '>
                        <Image alt='' src={assets.close_black} className='w-5 cursor-pointer' onClick={handleCloseMenu} />
                    </div>
                    <li>
                        <a href='#top'  onClick={handleCloseMenu}>Home</a>
                    </li>
                    <li>
                        <a href='#about'  onClick={handleCloseMenu}>About me</a>
                    </li>
                    {/* <li>
                        <a href='#services' onClick={handleCloseMenu} >Services</a>
                    </li> */}
                    <li>
                        <a href='#work' onClick={handleCloseMenu} >My work</a>
                    </li>
                    <li >
                        <a href='#contact' onClick={handleCloseMenu} >Contact me</a>
                    </li>
                </ul>
            }
        </nav>
    </>
  )
}

export default Navbar
