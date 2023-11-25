import React from 'react'
import SecondarySectionHeading from './SecondarySectionHeading'
import Image from 'next/image'
import ssrServicesIcon from '../assets/ssrServicesIcon.png'

export default function KeyFeature({ sectionData }) {
    console.log(sectionData)
    return (
        <section className='mt-[90px]' >
            <SecondarySectionHeading title={'Key Features'} />
            <div className='mt-[45px]'>
                {/* key features  */}
                <div className='flex items-center justify-between gap-y-3 flex-wrap'>
                    {/* single keyfeatures  */}
                    {
                        sectionData.map((feature) =>
                            <div className='flex space-x-2 items-center w-[350px]  px-3 py-2 '>
                                {/* icon */}
                                <div className='relative h-[60px] opacity-80 w-[60px]'>
                                    <Image className='rounded-xl sm:rounded-none' src={feature.img} alt='screenShot3' layout='fill' objectFit='contain' />
                                </div>
                                {/* info  */}
                                <h1 className='font-medium' >{feature.title}</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
