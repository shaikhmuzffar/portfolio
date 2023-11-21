import React from 'react'
import Image from 'next/image'

// images 
import screenShot1 from '../assets/doruko1.png'
import screenShot2 from '../assets/doruko2.png'
import screenShot3 from '../assets/doruko3.png'
import screenShot4 from '../assets/doruko4.png'
import arrowLeft from '../assets/arrowLeftRounded.png'

export default function ProjectImgs() {
  return (
    <section className='grid grid-cols-12 opacity-90 gap-3 mt-[45px]  lg:h-[400px] lg:overflow-hidden lg:rounded-3xl' >
      {/* left  */}
      <div className='col-span-12 lg:col-span-6'>
        <div className='relative h-[200px] w-full lg:h-full  '>
          <Image className='rounded-xl sm:rounded-none' src={screenShot4} alt='screenShot4' layout='fill' objectFit='cover' objectPosition='center' />
        </div>
      </div>
      {/* right */}
      <div className='col-span-12 lg:col-span-6 flex flex-col gap-3 '>
        {/* upperdiv */}
        <div>
          <div className='relative h-[200px] w-full'>
            <Image className='rounded-xl sm:rounded-none' src={screenShot3} alt='screenShot3' layout='fill' objectFit='cover' />
          </div>
        </div>
        {/* lowerdiv */}
        <div className='w-full grid grid-cols-2 gap-3 ' >
          {/* lowerdivImg left */}
          <div className='col-span-2 sm:col-span-1' >
            <div className='relative  h-[200px] w-full'>
              <Image className='rounded-xl sm:rounded-none' src={screenShot2} alt='screenShot2' layout='fill' objectFit='cover' />
            </div>
          </div>
          {/* lowerdivImg right | more images */}
          <div className='relative col-span-2  sm:col-span-1' >
            <div className='relative  h-[200px] w-full '>
              <Image className='rounded-xl sm:rounded-none' src={screenShot1} alt='screenShot1' layout='fill' objectFit='cover' />
            </div>
            {/* overlay */}
            <div className='rounded-xl sm:rounded-none absolute top-0 opacity-50 left-0 w-full h-full bg-blackText' />
            {/* show all photos */}
            <div className='absolute cursor-pointer w-full h-full pl-[40px] justify-center items-start flex flex-col gap-2 top-0' >
              {/* icon */}
              <div className=' relative  h-8 w-8 '>
                <Image className='rounded-xl sm:rounded-none' src={arrowLeft} alt='arrowLeft' layout='fill' objectFit='cover' />
              </div>
              <span className='text-white' >show <br /> all photos </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
