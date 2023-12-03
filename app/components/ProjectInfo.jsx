import React from 'react'
import Image from 'next/image'

// images
import projectCategory from '../assets/projectCategory.png'
import projectType from '../assets/projectType.png'

export default function ProjectInfo({sectionData}) {
    return (
        <section className='flex flex-col lg:flex-row gap-8 mt-[45px]' >
            {/* singleInfo */}
            <div className='flex gap-4 items-center' >
                {/* icon */}
                <div className='flex justify-center items-center h-12 w-12 rounded-full border ' >
                <div className='relative  h-6 w-6  '>
                    <Image src={projectCategory} layout='fill' objectFit='contain' alt='projectInfoIcon'  objectPosition='center' />
                </div>
                </div>
                {/* info  */}
                <div className='text-blackText'>
                    <h1 className='font-bold '>{sectionData[0].title}</h1>
                    <p className='text-xs' >{sectionData[0].subTitle}</p>
                </div>
            </div>
            {/* singleInfo */}
            <div className='flex gap-4 items-center' >
                {/* icon */}
                <div className='flex justify-center items-center h-12 w-12 rounded-full border ' >
                <div className='relative  h-[22px] w-[22px]  '>
                    <Image src={projectType} layout='fill' objectFit='contain' alt='projectInfoIcon' objectPosition='center' />
                </div>
                </div>
                {/* info  */}
                <div className='text-blackText'>
                <h1 className='font-bold '>{sectionData[1].title}</h1>
                    <p className='text-xs' >{sectionData[1].subTitle}</p>
                </div>
            </div>
        </section>
    )
}
