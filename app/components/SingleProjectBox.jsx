"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// images
import projectCategory from '../assets/projectCategory.png'
import hashImg from '../assets/hash.png'

export default function SingleProjectBox({projScreenshots,thumbTech,thumTitle,thumbURL,thumbDescription,projInfo}) {
    const router = useRouter()
    return (
        <div className=' py-8 lg:px-8 mt-[30px]'>
            {/* top div  */}
            <div className='grid grid-cols-12 gap-5 lg:gap-7 pb-5 md:pb-8 border-b'>
                {/* Img  */}
                <div className='col-span-12 md:col-span-6 lg:col-span-5 h-[250px] sm:h-[300px] lg:h-[300px] w-full' >
                    <div className='relative w-full h-full md:none '>
                        <Image className='rounded-xl' src={projScreenshots[0]} alt='screenShot4' layout='fill' objectFit='cover' objectPosition='center' />
                        <div className='absolute h-full w-full bg-black opacity-5 rounded-xl' />
                    </div>
                </div>
                {/* projectInfo */}
                <div className='col-span-12 md:col-span-6 lg:col-span-7 '>
                    {/* name and date */}
                    <div className='lg:pb-3 md:pt-5 md:pb-7 ' >
                        <h1 className='text-2xl sm:text-3xl font-semibold' >{thumTitle}</h1>
                        <p className='text-base sm:text-lg mt-2 font-medium opacity-90 ' >{thumbDescription}</p>
                    </div>

                    <p className=' text-sm sm:text-base opacity-70 mt-2 lg:mt-0 lg:py-5 lg:border-b-2' >sep 2023 - oct 2023</p>

                    {/* info */}
                    <div className='hidden lg:flex flex-col mt-30px md:flex-row md:gap-[30px] xl:gap-[60px] ' >
                        {/* single info */}
                        <div className='flex space-x-5 mt-5 items-center' >
                            {/* img */}
                            <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center' >
                                < div className='relative w-7 h-7 md:w-10 md:h-10 opacity-80  '>
                                    <Image className='rounded-xl ' src={projectCategory} alt='screenShot4' layout='fill' objectFit='contain' objectPosition='center' />
                                </div>
                            </div>
                            {/* project type */}
                            <div className='flex flex-col  space-y-1' >
                                <h1 className='text-sm md:text-base font-medium opacity-70'> Project type</h1>
                                <p className='text-sm md:text-base font-semibold opacity-90 '>{projInfo[0].title}</p>
                            </div>

                        </div>

                        {/* single info */}
                        <div className='flex space-x-5 mt-5 items-center' >
                            {/* img */}
                            <div className=' w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center' >
                                <div className='relative  w-6 h-6 md:w-7 md:h-7 opacity-80 '>
                                    <Image src={hashImg} alt='screenShot4' layout='fill' objectFit='contain' objectPosition='center' />
                                </div>
                            </div>
                            {/* project type */}
                            <div className='flex flex-col space-y-1' >
                                <h1 className='text-sm md:text-base font-medium opacity-70  '> Project Genre</h1>
                                <p className='text-sm md:text-base font-semibold opacity-90 ' >{projInfo[1].title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom div */}
            <div className='flex flex-col md:flex-row items-center  justify-between mt-4 md:mt-6 lg:mt-8'>
                {/* tech stack */}
                <div className='flex w-full lg:w-fit flex-row gap-[60px] md:flex-col  md:gap-0 items-center md:items-start justify-between md:justify-start  ' >
                    <p className=' opacity-70 text-lg' >Tech Stack</p>
                    {/* tech stack group  */}
                    <div className='mt-2' >
                        {/* single tech stack */}
                        <div className='flex gap-2' >
                            {thumbTech.map(({ img,title }) =>
                                <div key={title} className='relative w-5 h-5  '>
                                    <Image src={img} alt='reactSmallColor' layout='fill' objectFit='contain' objectPosition='center' />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <button className='bg-myGreen w-full md:w-fit text-lg pointer mt-8 md:mt-2  bg-opacity-10 hover:bg-opacity-10 text-myGreen font-semibold rounded-md md:px-[100px] py-5' onClick={() => router.push(`/projects/${thumbURL}`, { scroll: true })} >
                    Explore
                </button>
            </div>
        </div>
    )
}
