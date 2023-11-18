import React from 'react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import Image from 'next/image'
import experticeImg from '../assets/experticeImg.png'
export default function Expertice() {
    return (
        <section className='mt-[120px]'>
            <div className='w-10/12 mx-auto grid grid-cols-12 gap-5 items-center'>
                {/* experticeInfo */}
                <div className='col-span-12 md:col-span-7  lg:col-span-7 flex flex-col space-y-[30px]' >
                    <SectionHeading subTitle={'My Expetice'} title1={'I’m Experienced in'} title2={'Some Latest Trends'} />
                    <p className='w-full'>I design and develop modern web solutions with a professional design using latest trends.</p>
                    <Button className="flex" >
                        <span>Explore</span>
                    </Button>
                </div>
                {/* experticeImg */}
                <div className='col-span-12 md:col-span-5'>
                    <div className='relative w-full  h-[320px] sm:h-[400px] md:h-[300px] lg:h-[400px] '>
                        <Image src={experticeImg} layout='fill' objectFit='contain' alt={'experticeImg'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
