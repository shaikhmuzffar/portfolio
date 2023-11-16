import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import Link from 'next/link'
import Button from '../components/Button'
import hamburger from '../assets/hamburger.png'


export default function Navbar() {
    return (
        <div className=' md:fixed md:top-0 md:w-full flex items-center h-[90px] z-10 bg-white shadow-lg'>
            <div className='w-full max-w-[83.333333%] mx-auto  flex justify-between items-center'>
                {/* logo */}
                <div className='relative h-6 w-[120px]  '>
                    <Image src={logo} layout='fill' alt='logo' objectFit='contain' />
                </div>
                {/* navigation */}
                <ul className=' hidden md:flex space-x-12 text-sm'>
                    <li className='text-myGreen'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='opacity-70  transition duration-300 ease-out hover:opacity-100 hover:text-myGreen'>
                        <Link href='/'>About Me</Link>
                    </li>
                    <li className='opacity-70 hover:opacity-100 transition duration-300 ease-out hover:text-myGreen' >
                        <Link href='/'>Services</Link>
                    </li>
                    <li className='opacity-70 hover:opacity-100 transition duration-300 ease-out hover:text-myGreen' >
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li className='opacity-70 hover:opacity-100 transition duration-300 ease-out hover:text-myGreen ' >
                        <Link href='/'>Blogs</Link>
                    </li>
                </ul>
                {/* button */}
                <Button className=" hidden md:flex" >
                    <span>Contact</span>
                </Button>
                <div className='relative h-6 w-6 md:hidden ' >
                    <Image src={hamburger} layout='fill' objectFit='contain' alt='hamburger'  ></Image>
                </div>
            </div>
        </div>
    )
}
