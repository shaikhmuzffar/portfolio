import React from 'react'
import Image from 'next/image'

// images
import projectCategory from '../assets/projectCategory.png'
import projectType from '../assets/projectType.png'

export default function ProjectInfo() {
    return (
        <section className='flex gap-8 mt-[45px]' >
            {/* singleInfo */}
            <div className='flex gap-4 items-center' >
                {/* icon */}
                <div className='flex justify-center items-center h-12 w-12 rounded-full border ' >
                <div className='relative  h-6 w-6  '>
                    <Image src={projectCategory} layout='fill' objectFit='cover' objectPosition='center' />
                </div>
                </div>
                {/* info  */}
                <div className='text-blackText'>
                    <h1 className='font-bold '>Frontend Project</h1>
                    <p className='text-xs' >client side</p>
                </div>
            </div>
            {/* singleInfo */}
            <div className='flex gap-4 items-center' >
                {/* icon */}
                <div className='flex justify-center items-center h-12 w-12 rounded-full border ' >
                <div className='relative  h-6 w-6  '>
                    <Image src={projectType} layout='fill' objectFit='cover' objectPosition='center' />
                </div>
                </div>
                {/* info  */}
                <div className='text-blackText'>
                    <h1 className='font-bold '>Food Delivery</h1>
                    <p className='text-xs' >ecommerce</p>
                </div>
            </div>
        </section>
    )
}
