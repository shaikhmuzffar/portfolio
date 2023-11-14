import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// images
import logo from '../assets/logo.png'
import facebook from '../assets/fb.png'
import dribbble from '../assets/dribbble.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

export default function
    () {
    return (
        <section className='bg-[#F5F8F9] mt-[120px]'>
            <div className='w-10/12 mx-auto pt-[40px]' >
                {/* footerColumns */}

                <div className='grid text-blackText gap-[30px] grid-cols-12' >
                    {/* column1 */}
                    <div className='col-span-4 flex flex-col space-y-5'>
                        <div className='relative h-12 w-[131px]' >
                            <Image src={logo} layout='fill' objectFit='contain' alt="logo" />
                        </div>
                        <p className='text-blackText text-sm w-full leading-5' >Lorem ipsum dolor sit amet consectetur. Curabitur sit lorem commodo iaculis leo tincidunt.</p>
                        {/* social medias */}
                        <div className='flex gap-x-[30px]'>
                            {/* facebook */}
                            <div className='relative h-5 w-5 opacity-60 hover:opacity-100 transition duration-300 ease-out ' >
                                <Image src={facebook} layout='fill' objectFit='contain' alt='facebook' />
                            </div>
                            {/* dribbble */}
                            <div className='relative h-5 w-5 opacity-60 hover:opacity-100 transition duration-300 ease-out' >
                                <Image src={dribbble} layout='fill' objectFit='contain' alt='facebook' />
                            </div>
                            {/* twitter */}
                            <div className='relative h-5 w-5 opacity-60 hover:opacity-100 transition duration-300 ease-out ' >
                                <Image src={twitter} layout='fill' objectFit='contain' alt='facebook' />
                            </div>
                            {/* linkedin */}
                            <div className='relative h-5 w-5 opacity-60 hover:opacity-100 transition duration-300 ease-out ' >
                                <Image src={linkedin} layout='fill' objectFit='contain' alt='facebook' />
                            </div>
                        </div>
                    </div>

                    {/* column2 */}
                    <div className='col-span-2  flex flex-col space-y-5' >
                        <h1 className='text-[18px] font-semibold text-blackText' >Navigation</h1>
                        <ul className='flex flex-col space-y-4 '>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out ' href='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>About Me</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Services</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Proects</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Blog</Link>
                            </li>
                        </ul>
                    </div>

                    {/* column3 */}
                    <div className='col-span-2  flex flex-col space-y-5' >
                        <h1 className='text-[18px] font-semibold' >Products</h1>
                        <ul className='flex flex-col space-y-4 '>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Web Development</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>App Development</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Web Design</Link>
                            </li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className='col-span-2  flex flex-col space-y-5' >
                        <h1 className='text-[18px] font-semibold' >Compony</h1>
                        <ul className='flex flex-col space-y-4 '>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Location</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Contact</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>Blog</Link>
                            </li>
                            <li>
                                <Link className='text-sm opacity-70 text-blackText hover:opacity-100 hover:text-myGreen transtion cursor-pointer duration-300 ease-out' href='/'>FAQ's</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* copyright */}
                <div className='mt-[90px] pb-[15px]'>
                    <span className='text-[12px] text-blackText'> &copy; ShaikhMuzffar 2023 all rights Reserved</span>
                </div>

            </div>

        </section>
    )
}