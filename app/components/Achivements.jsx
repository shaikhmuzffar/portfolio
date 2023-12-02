"use client"
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import SecondarySectionHeading from './SecondarySectionHeading'
import Image from 'next/image'

// svg
import ReactIcon from './svgs/ReactIcon'

// imgs
import hashImg from '../assets/hash.png'

export default function Achivements({sectionData}) {
    const [achivementQuantity,setAchivementQuantity]=useState(2)
    // console.log(sectionData);
    return (
        <section className='mt-[90px] '>
            <SecondarySectionHeading title={'Achivements'} />
            {/* achivements group */}
            <div className='mt-[45px]' >
                {/* single achivement */}
                {
                    sectionData && sectionData.slice(0,achivementQuantity).map(({title,subTitle}) =>
                        <div key={title} className='flex  space-x-2 pl-3 pb-[30px]'>
                            <div className='flex  h-[50] w-[50px] pt-3 sm:pt-0 justify-center items-start lg:items-center'>
                                <div className='relative h-5 w-5'>
                                    <Image className='rounded-xl sm:rounded-none' src={hashImg} alt='screenShot3' layout='fill' objectFit='contain' />
                                </div>
                            </div>
                            <div >
                                <h1 className='font-semibold text-base' >{title}</h1>
                                <p className='text-xs opacity-80' >{subTitle}</p>
                                <ReactIcon/>
                            </div>
                            
                        </div>
                        
                    )
                }
            </div>
            <h1 className='font-semibold text-sm mt-5 cursor-pointer  text-myGreen' onClick={()=>{
                if(achivementQuantity<=2){
                    setAchivementQuantity(sectionData.length)
                }else{
                    setAchivementQuantity(2) 
                }
                }} >{achivementQuantity<=2?'Show more':'Show less'}</h1>
        </section>
    )
}
