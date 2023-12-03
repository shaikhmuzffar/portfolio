"use client"
import React, { useState } from 'react'
import SecondarySectionHeading from './SecondarySectionHeading'
import Image from 'next/image'
import ssrServicesIcon from '../assets/ssrServicesIcon.png'

export default function KeyFeature({ sectionData }) {
    const [featuresQuantity,setFeaturesQuantity] = useState(4)
    return (
        <section className='mt-[90px] text-blackText' >
            <SecondarySectionHeading title={'Key Features'} />
            <div className='mt-[45px]'>
                {/* key features  */}
                <ul className='pl-16 grid grid-cols-2 gap-x-10 gap-y-5 list-disc'>
                    {/* single keyfeatures  */}
                    {
                        sectionData.slice(0, featuresQuantity).map((feature) =>
                            <li key={feature.title} className='py-2 col-span-2 sm:col-span-1 '>
                                {/* info  */}
                                <h1 className='opacity-90 ' >{feature.title}</h1>
                            </li>
                        )
                    }
                </ul>
                <h1 className='font-semibold text-sm mt-5 cursor-pointer  text-myGreen' onClick={()=>{
                if(featuresQuantity<=4){
                    setFeaturesQuantity(sectionData.length)
                }else{
                    setFeaturesQuantity(4) 
                }
                }} >{featuresQuantity<=4?'Show more':'Show less'}</h1>
            </div>
        </section>
    )
}
