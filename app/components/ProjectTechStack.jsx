'use client'
import React, { useState } from 'react'
import Image from 'next/image'


// images
import reactSmall from '../assets/reactSmall.png'
import reduxSmall from '../assets/reduxSmall.png'
import figmaSmall from '../assets/figmaSmall.png'
import tailwindSmall from '../assets/tailwindSmall.png'

// components
import SecondarySectionHeading from './SecondarySectionHeading'

export default function ProjectTechStack({ sectionData }) {
    const [techQuantity,setTechQuantity] =useState(3);
    return (
        <section className='block mt-[45px]'>
            <SecondarySectionHeading title={'Tech Stack'} />
            {/* techStacks */}
            <div className='mt-[30px] flex flex-row flex-wrap gap-5'>
                {/* single tech stack */}
                {sectionData.slice(0, techQuantity).map(({icon,name}) =>
                    <div key={name} className='flex space-x-2 items-center bg-gray-100 p-4 w-[187px] cursor-pointer rounded-lg '>
                        <div className='relative  h-[25px] w-[25px]  '>
                            <Image className='smallIcon' src={icon} alt='reactSmallIcon' layout='fill' objectFit='contain' objectPosition='center' />
                        </div>
                        <span className=''>{name}</span>
                    </div>
                )

                }


            </div>
            <h1 className='font-semibold text-sm mt-5 cursor-pointer  text-myGreen' onClick={()=>{
                if(techQuantity<=3){
                    setTechQuantity(sectionData.length)
                }else{
                    setTechQuantity(3) 
                }
                }} >{techQuantity<=3?'Show more':'Show less'}</h1>
        </section>
    )
}
