"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Link from 'next/link'
import Button from '../components/Button'
import hamburger from '../assets/hamburger.png'
import cross from '../assets/cross.png'


export default function Navbar() {
    const [showNav,setShowNav] = useState(false)
    return (
        <div className=' md:fixed md:top-0 md:w-full flex items-center h-[90px] z-10 bg-white shadow-lg'>
            <div className='w-full max-w-[83.333333%] mx-auto  flex justify-between items-center'>
                {/* logo */}
                <div className='relative h-6 w-[120px]  '>
                    <Image src={logo} layout='fill' alt='logo' objectFit='contain' />
                </div>
                {/* navigation */}
                <ul className={`${showNav ? 'fixed' : 'hidden'} bg-white space-y-4 shadow-md w-screen p-4 pt-[15vh] pb-8 text-center top-0 right-1  z-10  text-sm md:space-y-0  md:static md:bg-none md:shadow-none md:w-fit md:p-0 md:left-0 md:right-0 md:flex md:flex-row md:gap-x-4 ` } >
                    <li className='absolute top-9 right-10 h-4 w-4 md:hidden ' >
                    <Image src={cross} layout='fill' onClick={()=>setShowNav(false)} objectFit='contain' alt='cross'/>
                    </li>
                    <li className='text-myGreen  py-[15px] rounded-md px-2 hover:bg-myGreen hover:bg-opacity-10 md:text-[12px] md:py-0 md:hover:bg-none' onClick={()=>setShowNav(false)} >
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='text-myGreen  py-[15px] rounded-md px-2 hover:bg-myGreen hover:bg-opacity-10  md:text-[12px] md:py-0 md:hover:bg-none' onClick={()=>setShowNav(false)} >
                        <Link href='/'>About Me</Link>
                    </li>
                    <li className='text-myGreen  py-[15px] rounded-md px-2 hover:bg-myGreen hover:bg-opacity-10 md:text-[12px] md:py-0 md:hover:bg-none' onClick={()=>setShowNav(false)} >
                        <Link href='/'>Services</Link>
                    </li>
                    <li className='text-myGreen  py-[15px] rounded-md px-2 hover:bg-myGreen hover:bg-opacity-10 md:text-[12px] md:py-0 md:hover:bg-none' onClick={()=>setShowNav(false)} >
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li  className='text-myGreen  py-[15px] rounded-md px-2 hover:bg-myGreen hover:bg-opacity-10 md:text-[12px] md:py-0 md:hover:bg-none' onClick={()=>setShowNav(false)} >
                        <Link href='/'>Blogs</Link>
                    </li>
                </ul>
                {/* button */}
                <Button className=" hidden md:flex" >
                    <span>Contact</span>
                </Button>
                <div className='relative h-6 w-6 md:hidden ' >
                <Image src={hamburger} layout='fill' onClick={()=>setShowNav(true)} objectFit='contain' alt='hamburger'/>
                </div>
            </div>
        </div>
    )
}
