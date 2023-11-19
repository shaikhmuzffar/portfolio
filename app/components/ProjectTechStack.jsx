import React from 'react'
import Image from 'next/image'

// images
import reactSmall from '../assets/reactSmall.png'
import reduxSmall from '../assets/reduxSmall.png'
import figmaSmall from '../assets/figmaSmall.png'
import tailwindSmall from '../assets/tailwindSmall.png'

// components
import SecondarySectionHeading from './SecondarySectionHeading'

export default function () {
    return (
        <section className='mt-[45px]'>
            <SecondarySectionHeading title={'Tech Stack'} />
            {/* techStacks */}
            <div className='mt-[30px] flex space-x-5'>
                {/* single tech stack */}
                <div className='flex space-x-2 items-center bg-gray-100 p-4 w-[187px] cursor-pointer rounded-lg '>
                    <div className='relative  h-[25px] w-[25px]  '>
                        <Image className='smallIcon' src={reactSmall} layout='fill' objectFit='contain' objectPosition='center' />
                    </div>
                    <span className=''>React</span>
                </div>

                {/* single tech stack */}
                <div className='flex space-x-2 items-center bg-gray-100 p-4 w-[187px] cursor-pointer rounded-lg '>
                    <div className='relative  h-[25px] w-[25px]  '>
                        <Image className='smallIcon' src={reduxSmall} layout='fill' objectFit='contain' objectPosition='center' />
                    </div>
                    <span className=''>redux-toolkit</span>
                </div>

                {/* single tech stack */}
                <div className='flex space-x-2 items-center bg-gray-100 p-4 w-[187px] cursor-pointer rounded-lg '>
                    <div className='relative  h-[25px] w-[25px]  '>
                        <Image className='smallIcon' src={figmaSmall} layout='fill' objectFit='contain' objectPosition='center' />
                    </div>
                    <span className=''>redux-toolkit</span>
                </div>

                {/* single tech stack */}
                <div className='flex space-x-2 items-center bg-gray-100 p-4 w-[187px] cursor-pointer rounded-lg '>
                    <div className='relative  h-[25px] w-[25px]  '>
                        <Image className='smallIcon' src={tailwindSmall} layout='fill' objectFit='contain' objectPosition='center' />
                    </div>
                    <span className=''>redux-toolkit</span>
                </div>
            </div>
            <h1 className='font-semibold text-sm mt-5 cursor-pointer  text-myGreen'>Show More</h1>
        </section>
    )
}
