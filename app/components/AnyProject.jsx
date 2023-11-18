import Image from 'next/image'
import React from 'react'
import worldMap from '../assets/worldMap.png'
import Button from './Button'

export default function AnyProject() {
  return (
    <section className='mt-[120px]'>
        <div className='relative flex items-center justify-center h-[300px] w-full sm:h-[350px] md:h-[400px] mx-auto' >
            <Image src={worldMap} layout='fill' objectFit='contain' alt='worldMap' />
            <div className=' z-[5] flex items-center justify-center flex-col space-y-[45px]' >
                <h1 className='text-2xl font-semibold text-myGreen' >Do you have Any Project?</h1>
                <Button className=" flex" >
                    <span>Contact Me</span>
                </Button>
            </div>
        </div>
    </section>
  )
}
