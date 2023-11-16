import React from 'react'
import Image from 'next/image'

// image
import orangeMark from '../assets/orangeMark.png'



export default function SectionHeading({ subTitle, title1, title2, centerTitle}) {
    return (
        <div className='flex flex-col space-y-[20px]'>
            {/* subTitle */}
            <div className={`flex items-center ${centerTitle ? 'justify-center' : ''} space-x-3`}>
                {/*orangeMark  */}
                <div className='relative  h-[25px] w-[25px] '>
                    <Image src={orangeMark} layout='fill' objectFit='contain' alt='mark' />
                </div>
                <span className='text-sm text-myOrange' >{subTitle}</span>
            </div>
            {/* header1 */}
            <div className={`flex flex-col ${centerTitle ? 'text-center' : ''}  space-y-1`} >
                {
                    title1 && <h1 className='text-[28px] text-blackText capitalize leading-[32px] font-medium'>{title1}</h1>
                }
                {
                    title2 && <h1 className='text-[32px] text-blackText capitalize leading-[32px] font-semibold'>{title2}</h1>
                }
            </div>
        </div>
    )
}
