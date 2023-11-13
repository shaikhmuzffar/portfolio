import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'

// images
import arrowRight from '../assets/arrowRight.png'
import arrowLeft from '../assets/arrowLeft.png'
import dorukoThumb from '../assets/dorukoThumb.png'
import articleImg1 from '../assets/articleImg1.png'
import articleImg2 from '../assets/articleImg2.png'
import articleImg3 from '../assets/articleImg3.png'
import linkArrow from '../assets/linkArrow.png'
import minWatch from '../assets/minWatch.png'
import Link from 'next/link'

export default function Articles() {
    return (
        <section className='mt-[120px]'>
            <div className='w-10/12 mx-auto '>
                {/* sectionHeadign and slider arrows  */}
                <div className='flex justify-between items-end' >
                    {/* sectionHeading */}
                    <SectionHeading subTitle={'My Articles'} title1={'My articles on'} title2={'Latest Trends and Technology'} />
                    {/* arrows */}
                    <div className='flex space-x-[15px]'>
                        {/* arrowLeft  */}
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full border-2 border-myGreen cursor-pointer' >
                            <div className='relative h-4 w-4 object-contain'>
                                <Image src={arrowLeft} layout='fill' alt="arrowLeft" />
                            </div>
                        </div>
                        {/* arrowRight  */}
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-myGreen cursor-pointer' >
                            <div className='relative h-5 w-5 object-contain'>
                                <Image src={arrowRight} layout='fill' alt="arrowRight" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Articles */}
                <div className='grid grid-cols-3 gap-5 mt-[45px] '>
                    {/* single Article */}
                    <div className='flex flex-col space-y-3 '>
                        {/* img */}
                        <div className='relative w-full h-[260px] rounded-2xl overflow-hidden '>
                            <Image src={articleImg1} layout='fill' objectFit='cover' />
                            <div className='absolute bottom-2 right-2 px-[6px] py-1 bg-black bg-opacity-50 rounded-lg flex items-center space-x-1'>
                                <div className='relative h-[16px] w-[16px] '>
                                    <Image src={minWatch} layout='fill' objectFit='contain' />
                                </div>
                                <span className='text-white text-sm'>1 min read</span>
                            </div>
                        </div>
                        {/* articleInfo */}
                        <div>
                            <div className='flex flex-col space-y-1 pb-[10px] border-b-[1px] border-[#393939] border-opacity-25'>
                                <span className='text-sm font-semibold opacity-60'>Technology</span>
                                <h1 className='font-semibold text-xl' >Exploring React Server Components A Game Changer...</h1>
                            </div>
                        </div>
                        <Link href='/' className='flex items-center space-x-1 self-end'>
                            <span className='text-myGreen'>read more</span>
                            <div className='relative h-3 w-3' >
                                <Image src={linkArrow} layout='fill' objectFit='contain' />
                            </div>
                        </Link>
                    </div>
                      {/* single Article */}
                      <div className='flex flex-col space-y-3 '>
                        {/* img */}
                        <div className='relative w-full h-[260px] rounded-2xl overflow-hidden '>
                            <Image src={articleImg2} layout='fill' objectFit='cover' />
                            <div className='absolute bottom-2 right-2 px-[6px] py-1 bg-black bg-opacity-50 rounded-lg flex items-center space-x-1'>
                                <div className='relative h-[16px] w-[16px] '>
                                    <Image src={minWatch} layout='fill' objectFit='contain' />
                                </div>
                                <span className='text-white text-sm'>1 min read</span>
                            </div>
                        </div>
                        {/* articleInfo */}
                        <div>
                            <div className='flex flex-col space-y-1 pb-[10px] border-b-[1px] border-[#393939] border-opacity-25'>
                                <span className='text-sm font-semibold opacity-60'>Technology</span>
                                <h1 className='font-semibold text-xl' >Exploring React Server Components A Game Changer...</h1>
                            </div>
                        </div>
                        <Link href='/' className='flex items-center space-x-1 self-end'>
                            <span className='text-myGreen'>read more</span>
                            <div className='relative h-3 w-3' >
                                <Image src={linkArrow} layout='fill' objectFit='contain' />
                            </div>
                        </Link>
                    </div>
                      {/* single Article */}
                      <div className='flex flex-col space-y-3 '>
                        {/* img */}
                        <div className='relative w-full h-[260px] rounded-2xl overflow-hidden '>
                            <Image src={articleImg3} layout='fill' objectFit='cover' />
                            <div className='absolute bottom-2 right-2 px-[6px] py-1 bg-black bg-opacity-50 rounded-lg flex items-center space-x-1'>
                                <div className='relative h-[16px] w-[16px] '>
                                    <Image src={minWatch} layout='fill' objectFit='contain' />
                                </div>
                                <span className='text-white text-sm'>1 min read</span>
                            </div>
                        </div>
                        {/* articleInfo */}
                        <div>
                            <div className='flex flex-col space-y-1 pb-[10px] border-b-[1px] border-[#393939] border-opacity-25'>
                                <span className='text-sm font-semibold opacity-60'>Technology</span>
                                <h1 className='font-semibold text-xl' >Exploring React Server Components A Game Changer...</h1>
                            </div>
                        </div>
                        <Link href='/' className='flex items-center space-x-1 self-end'>
                            <span className='text-myGreen'>read more</span>
                            <div className='relative h-3 w-3' >
                                <Image src={linkArrow} layout='fill' objectFit='contain' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}
