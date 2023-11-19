import React from 'react'
import Image from 'next/image'

import githubSmall from '../assets/githubSmall.png'
import dribbbleSmall from '../assets/dribbbleSmall.png'
import Button from './Button'

export default function ProjectLinks() {
    return (
        <section>
            {/* section title  */}
            <div className='flex flex-col gap-y-1'>
                <h1 className='text-[20px] font-bold text-center text-blackText ' >Source Code</h1>
                <p className='text-sm text-blackText  text-center'>checkout the complete source code and UI/UX design</p>
            </div>
            {/* links */}
            <div className='grid grid-cols-2 justify-between text-blackText p-5  gap-5 ' >
                {/* github */}
                <div className='col-span-1  p-2 h-[200px] justify-center  flex flex-col items-center rounded-xl bg-gray-50 cursor-pointer '>
                    <p className='text-sm font-medium text-center  '>checkout the complete code on</p>
                    {/* Githubicon */}
                    <div className='relative mt-5 h-5 w-[90px]  '>
                        <Image src={githubSmall} layout='fill' objectFit='cover' objectPosition='center' />
                    </div>
                    <p className='text-sm font-medium mt-2 text-center'>repository</p>
                </div>
                {/* dribbble */}
                <div className='col-span-1  p-2 h-[200px] justify-center  flex flex-col items-center rounded-xl bg-gray-50 cursor-pointer '>
                    <p className='text-sm font-medium text-center '>checkout complete design in my</p>
                    {/* Githubicon */}
                    <div className='relative mt-5 h-5 w-[90px]  '>
                        <Image src={dribbbleSmall} layout='fill' objectFit='cover' objectPosition='center' />
                    </div>
                    <p className='text-sm font-medium mt-2 text-center'>portfolio</p>
                </div>

            </div>

            <p className='text-sm text-blackText  text-center' >or <span className='font-bold' >Hire me</span> for customization and  any personal
                project development</p>
            <Button className='flex w-full mt-5' >
                <p  >Hire Me</p>
            </Button>
                
        </section>

    )
}
