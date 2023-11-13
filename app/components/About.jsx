import React from 'react'
import Image from 'next/image'
// images
import plus from '../assets/plus.png'
import aboutImg from '../assets/AboutMeImg.png'
import SectionHeading from './SectionHeading'

export default function About() {
    return (
        <section className='mt-[120px]'>
            <div className='w-11/12 items-center mx-auto grid grid-cols-12 gap-4'>
                {/* img */}
                <div className='col-span-5  flex items-center justify-center'>
                    <div className=' relative w-[440px]  h-[400px] object-contain'>
                        <Image src={aboutImg} layout='fill' />
                    </div>
                </div>

                {/* right */}
                <div className='col-span-7'>
                    <SectionHeading subTitle="About Me" title1="Details About" title2="My Education and Experiences" />
                    {/* detailsRow */}
                    <div className='mt-[45px] flex flex-col space-y-5'>
                        {/* detailsRow */}
                        <div className='flex justify-between items-center pb-4 border-b border-dashed'>
                            <span className='text-lg'>My Educational Details</span>
                            <div className='relative h-4 w-4 object-contain cursor-pointer'>
                                <Image src={plus} layout="fill" alt="plus" />
                            </div>
                        </div>
                        {/* detailsRow */}
                        <div className='flex justify-between items-center pb-4 border-b border-dashed'>
                            <span className='text-lg'>Cerifications and Achivments </span>
                            <div className='relative h-4 w-4 object-contain cursor-pointer'>
                                <Image src={plus} layout="fill" alt="plus" />
                            </div>
                        </div>
                        {/* detailsRow */}
                        <div className='flex justify-between items-center pb-4 border-b border-dashed'>
                            <span className='text-lg'>Skills</span>
                            <div className='relative h-4 w-4 object-contain cursor-pointer'>
                                <Image src={plus} layout="fill" alt="plus" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
