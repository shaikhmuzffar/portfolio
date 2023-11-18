import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'
import arrowRight from '../assets/arrowRight.png'
import arrowLeft from '../assets/arrowLeft.png'
import dorukoProThumb from '../assets/dorukoProThumb.png'
import grocifyThumb from '../assets/grocifyThumb.png'
import touroThumb from '../assets/touroThumb.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import figma from '../assets/figma.png'


const myProjects = [
    {
        img: dorukoProThumb,
        title: 'Doruko',
        description: 'A Food Delivery Website and UI/UX.',
        url: 'https://doruko.netlify.app/',
        tech: [
            {
                img: react,
                title: 'React'
            },
            {
                img: redux,
                title: 'Redux'
            },
            {
                img: figma,
                title: 'Figma'
            },
        ]
    },
    {
        img: touroThumb,
        title: 'Touro',
        description: 'A Food Delivery Website and UI/UX.',
        url: 'https://doruko.netlify.app/',
        tech: [
            {
                img: react,
                title: 'React'
            },
            {
                img: redux,
                title: 'Redux'
            },
            {
                img: figma,
                title: 'Figma'
            },
        ]
    },
    {
        img: grocifyThumb,
        title: 'Grocify',
        description: 'A Food Delivery Website and UI/UX.',
        url: 'https://doruko.netlify.app/',
        tech: [
            {
                img: react,
                title: 'React'
            },
            {
                img: redux,
                title: 'Redux'
            },
            {
                img: figma,
                title: 'Figma'
            },
        ]
    },

]

export default function Projects() {
    return (
        <section className='mt-[120px]'>
            <div className='w-10/12 mx-auto '>
                {/* sectionHeadign and slider arrows  */}
                <div className='flex justify-between items-end' >
                    {/* sectionHeading */}
                    <SectionHeading subTitle={'My Work'} title1={'My Recent'} title2={'Designs and Developments'} />
                    {/* arrows */}
                    <div className='hidden lg:flex space-x-[15px]'>
                        {/* arrowLeft  */}
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full border-2 border-myGreen cursor-pointer' >
                            <div className='relative h-4 w-4 '>
                                <Image src={arrowLeft} layout='fill' alt="arrowLeft" objectFit='contain' />
                            </div>
                        </div>
                        {/* arrowRight  */}
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-myGreen cursor-pointer' >
                            <div className='relative h-5 w-5 '>
                                <Image src={arrowRight} layout='fill' alt="arrowRight" objectFit='contain' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* projects */}
                <div className='grid grid-cols-12 gap-5'>
                    {/* single project */}
                    {
                        myProjects.map(({ img, title, description, tech }) =>
                            <div key={title} className='relative col-span-12 md:col-span-6 lg:col-span-4 h-[500px] mt-[45px] w-full rounded-2xl overflow-hidden'>
                                <Image src={img} layout='fill' objectFit='cover' alt='projectImg' />
                                {/* overlay */}
                                <div className='absolute h-full w-full bg-black opacity-20 top-0 left-0' ></div>
                                {/* proectInfo */}
                                <div className='absolute px-[15px] flex-col space-y-1 py-[10px] rounded-xl bg-white text-blackText bottom-2 left-2'>
                                    <h1 className='text-xl font-semibold' >{title}</h1>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-sm '>{description}</p>
                                        <div className='flex space-x-3' >
                                            <span className='text-[12px] opacity-80'>Tools used</span>
                                            {/* tools */}
                                            <div className='flex items-center space-x-2'>
                                                {/* tool */}
                                                {tech.map(({img,name}) =>
                                                    <div key={name} className='relative h-4 w-4 '>
                                                        <Image src={img} layout='fill' alt='tools' objectFit='contain' />
                                                    </div>
                                                )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section >
    )
}
