"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import githubSmall from '../assets/githubSmall.png'
import dribbbleSmall from '../assets/dribbbleSmall.png'
import Button from './Button' 

export default function ProjectLinks({projGit}) {
    const router = useRouter();
    return (
        <section>
            {/* section title  */}
            <div className='flex flex-col gap-y-1'>
                <h1 className='text-[20px] font-semibold text-center text-blackText ' >Source Code</h1>
                <p className='text-sm text-blackText  text-center'>checkout the complete source code and UI/UX design</p>
            </div>
            {/* links */}
            <div className='grid grid-cols-2 justify-between text-blackText px-10 sm:px-8 md:px-12 lg:p-0  xl:p-5 gap-5 sm:gap-5 xl:gap-4 lg:gap-2 my-8 md:my-10 ' >
                {/* github */}
                <div onClick={()=>router.push(projGit)} className='col-span-2  sm:col-span-1  border-myGreen  p-6 lg:p-3 h-[200px] justify-center  flex flex-col items-center rounded-xl bg-gray-50 cursor-pointer select-none  '>
                    <p className='font-medium text-base lg:text-[12px] text-center text-blackText opacity-80 '>checkout the complete source code on</p>
                    {/* Githubicon */}
                    <div className='relative  mt-5 h-7 w-[120px] md:h-10 md:w-[140px] lg:w-[90px] lg:h-5'>
                        <Image src={githubSmall} layout='fill' alt='githubIcon' objectFit='contain' objectPosition='center' />
                    </div>
                    <p className=' font-medium lg:text-[12px] mt-3 text-blackText text-center opacity-80 '>repository</p>
                </div>
                {/* dribbble */}
                <div className='col-span-2 sm:col-span-1   border-myGreen   p-6 lg:p-3  h-[200px] justify-center  flex flex-col items-center rounded-xl bg-gray-50 cursor-pointer select-none  '>
                    <p className='font-medium text-base lg:text-[12px]  text-center text-blackText opacity-80 '>checkout complete design in my</p>
                    {/* dribbbleicon */}
                    <div className='relative   mt-5 h-7 w-[120px]  md:h-10 md:w-[140px] lg:w-[90px] lg:h-5 '>
                        <Image src={dribbbleSmall} layout='fill' alt='dribbbleIcon' objectFit='contain' objectPosition='center' />
                    </div>
                    <p className='font-medium lg:text-[12px] mt-3 text-blackText text-center opacity-80'>portfolio</p>
                </div>

            </div>

            <p className='text-sm text-blackText  text-center' >or <span className='font-bold' >Hire me</span> for customization and  any personal
                project development</p>
            <Button className='flex mx-auto lg:w-full mt-5' >
                <p  >Hire Me</p>
            </Button>
        </section>

    )
}
