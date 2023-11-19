import React from 'react'
import Image from 'next/image'

// images 
import screenShot1 from '../assets/doruko1.png'
import screenShot2 from '../assets/doruko2.png'
import screenShot3 from '../assets/doruko3.png'
import screenShot4 from '../assets/doruko4.png'
export default function ProjectImgs() {
  return (
    <section className='grid grid-cols-12 gap-3 mt-[45px]  h-[400px]  rounded-3xl overflow-hidden' >
    {/* left  */}
    <div className='col-span-6'>
      <div className='relative  h-full w-full  '>
        <Image src={screenShot4}  layout='fill' objectFit='cover' objectPosition='center' />
      </div>
    </div>
    {/* right */}
    <div className='col-span-6 flex flex-col gap-3 '>
      {/* upperdiv */}
      <div>
        <div className='relative h-[200px] w-full'>
          <Image src={screenShot3} layout='fill' objectFit='cover' />
        </div>
      </div>
      {/* lowerdiv */}
      <div className='w-full grid grid-cols-2 gap-3 ' >
        {/* lowerdivImg left */}
        <div className='relative col-span-1 h-[200px] w-full'>
          <Image src={screenShot2} layout='fill' objectFit='cover' />
        </div>
        {/* lowerdivImg right */}
        <div className='relative col-span-1 h-[200px] w-full'>
          <Image src={screenShot1} layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  </section>
  )
}
