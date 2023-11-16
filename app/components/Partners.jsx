import React from 'react'
import Image from 'next/image'
import spotify from '../assets/spotify.png'
import airbnb from '../assets/airbnb.png'
import google from '../assets/google.png'
import amazon from '../assets/amazon.png'
import gramin from '../assets/gramin.png'

export default function Partners() {
    return (
        <div className='flex w-10/12 mx-auto flex-col space-y-[30px] items-center justify-center mt-[90px]'>
            <h1 className='text-[24px] font-[600] text-blackText'>Proud marketing partner with</h1>
            <div className='flex flex-wrap items-center  justify-center gap-12' >
                <div className='relative h-8 w-[102px] '>
                    <Image src={spotify} layout='fill' alt='spotify' objectFit='contain' />
                </div>
                <div className='relative h-8 w-[102px] '>
                    <Image src={airbnb} layout='fill' alt='airbnb' objectFit='contain' />
                </div>
                <div className='relative h-8 w-[102px] '>
                    <Image src={google} layout='fill' alt='google' objectFit='contain' />
                </div>
                <div className='relative h-8 w-[102px]'>
                    <Image src={amazon} layout='fill' alt='amazon' objectFit='contain'/>
                </div>
                <div className='relative h-6 w-[120px] '>
                    <Image src={gramin} layout='fill' alt='garmin' objectFit='contain' />
                </div>
            </div>
        </div>
    )
}
