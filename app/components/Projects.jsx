import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'

// images
import arrowRight from '../assets/arrowRight.png'
import arrowLeft from '../assets/arrowLeft.png'
import dorukoThumb from '../assets/dorukoThumb.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import figma from '../assets/figma.png'

export default function Projects() {
    return (
        <section className='mt-[120px]'>
            <div className='w-10/12 mx-auto '>
                {/* sectionHeadign and slider arrows  */}
                <div className='flex justify-between items-end' >
                    {/* sectionHeading */}
                    <SectionHeading subTitle={'My Work'} title1={'My Recent'} title2={'Designs and Developments'} />
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
                {/* projects */}
                <div className='grid grid-cols-3 gap-5'>
                    {/* single project */}
                    <div className='relative h-[500px] mt-[45px] w-full object-cover rounded-2xl overflow-hidden'>
                        <Image src={dorukoThumb} layout='fill' objectFit='cover' objectPosition='50%' />
                        {/* overlay */}
                        <div className='absolute h-full w-full bg-black opacity-20 top-0 left-0' ></div>
                        {/* proectInfo */}
                        <div className='absolute px-[15px] flex-col space-y-1 py-[10px] rounded-xl bg-white text-blackText bottom-2 left-2'>
                            <h1 className='text-xl font-semibold' >Doruko</h1>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-sm '>A Food Delivery Website and UI/UX</p>
                                <div className='flex space-x-3' >
                                    <span className='text-[12px]'>Tools used</span>
                                    {/* tools */}
                                    <div className='flex items-center space-x-2'>
                                        {/* tool1 */}
                                        <div className='relative h-4 w-4 object-contain'>
                                            <Image src={react} layout='fill' alt='tools' />
                                        </div>
                                        {/* tool2 */}
                                        <div className='relative h-4 w-4 object-contain'>
                                            <Image src={redux} layout='fill' alt='tools' />
                                        </div>
                                        {/* tool3 */}
                                        <div className='relative h-4 w-3 object-contain'>
                                            <Image src={figma} layout='fill' alt='tools' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single project */}
                    <div className='relative h-[500px] mt-[45px] w-full object-cover rounded-2xl overflow-hidden'>
                        <Image src={dorukoThumb} layout='fill' objectFit='cover' objectPosition='50%' />
                        {/* overlay */}
                        <div className='absolute h-full w-full bg-black opacity-20 top-0 left-0' ></div>
                        {/* proectInfo */}
                        <div className='absolute px-[15px] flex-col space-y-1 py-[10px] rounded-xl bg-white text-blackText bottom-2 left-2'>
                            <h1 className='text-xl font-semibold' >Doruko</h1>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-sm '>A Food Delivery Website and UI/UX</p>
                                <div className='flex space-x-3' >
                                    <span className='text-[12px]'>Tools used</span>
                                    {/* tools */}
                                    <div className='flex items-center space-x-2'>
                                        {/* tool1 */}
                                        <div className='relative h-4 w-4 object-contain'>
                                            <Image src={react} layout='fill' alt='tools' />
                                        </div>
                                        {/* tool2 */}
                                        <div className='relative h-4 w-4 object-contain'>
                                            <Image src={redux} layout='fill' alt='tools' />
                                        </div>
                                        {/* tool3 */}
                                        <div className='relative h-4 w-3 object-contain'>
                                            <Image src={figma} layout='fill' alt='tools' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* single project */}
                     <div className='relative h-[500px] mt-[45px] w-full object-cover rounded-2xl overflow-hidden'>
                        <Image src={dorukoThumb} layout='fill' objectFit='cover' objectPosition='50%' />
                        {/* overlay */}
                        <div className='absolute h-full w-full bg-black opacity-20 top-0 left-0' ></div>
                        {/* proectInfo */}
                        <div className='absolute px-[15px] flex-col space-y-1 py-[10px] rounded-xl bg-white text-blackText bottom-2 left-2'>
                            <h1 className='text-xl font-semibold' >Doruko</h1>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-sm '>A Food Delivery Website and UI/UX</p>
                                <div className='flex space-x-3' >
                                    <span className='text-[12px]'>Tools used</span>
                                    {/* tools */}
                                    <div className='flex items-center space-x-2'>
                                        {/* tool1 */}
                                        <div className='relative h-4 w-4 object-contain'>
                                            <Image src={react} layout='fill' alt='tools' />
                                        </div>
                                        {/* tool2 */}
                                        <div className='relative h-4 w-4 object-contain'>
                                            <Image src={redux} layout='fill' alt='tools' />
                                        </div>
                                        {/* tool3 */}
                                        <div className='relative h-4 w-3 object-contain'>
                                            <Image src={figma} layout='fill' alt='tools' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
