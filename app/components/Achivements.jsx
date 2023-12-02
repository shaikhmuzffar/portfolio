import React from 'react'
import SectionHeading from './SectionHeading'
import SecondarySectionHeading from './SecondarySectionHeading'
import Image from 'next/image'

// imgs
import hashImg from '../assets/hash.png'

export default function Achivements({sectionData}) {
    // console.log(sectionData);
    return (
        <section className='mt-[90px] '>
            <SecondarySectionHeading title={'Achivements'} />
            {/* achivements group */}
            <div className='mt-[45px]' >
                {/* single achivement */}
                {
                    sectionData && sectionData.map(({title,subTitle}) =>
                        <div key={title} className='flex  space-x-2 pl-3 pb-[30px]'>
                            <div className='flex  h-[50] w-[50px] pt-3 justify-center items-start lg:items-center'>
                                <div className='relative h-5 w-5'>
                                    <Image className='rounded-xl sm:rounded-none' src={hashImg} alt='screenShot3' layout='fill' objectFit='contain' />
                                </div>
                            </div>
                            <div >
                                <h1 className='font-semibold text-base' >{title}</h1>
                                <p className='text-sm opacity-80' >{subTitle}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
