import React from 'react'
import SectionHeading from './SectionHeading'
import Image from 'next/image'

// images 
import webDev from '../assets/webDev.png'
import appDev from '../assets/appDev.png'
import uiUx from '../assets/UiUx.png'

const services = [
  {
    id: 1,
    img: webDev,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo erat vivamus quis viverra pellentesque purus lectus enim. Venenatis senectus .'
  },
  {
    id: 2,
    img: appDev,
    title: 'App Development',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo erat vivamus quis viverra pellentesque purus lectus enim. Venenatis senectus .'
  },
  {
    id: 3,
    img: uiUx,
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Commodo erat vivamus quis viverra pellentesque purus lectus enim. Venenatis senectus .'
  },
];

export default function Services() {
  return (
    <section className='mt-[120px] w-10/12 mx-auto'>
      <SectionHeading centerTitle={true} subTitle={'My Services'} title2={'Offered Services'} />
     
        {/* services */}
        <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 space-x-[15px] mt-[60px]'>
          {
            services.map(service =>
              <div className='flex items-center flex-col' key={service.id} >
                {/* serviceImg */}
                <div className='relative  h-[150px] w-[150px] '>
                  <Image src={service.img} layout='fill' alt={service.title} objectFit='contain' />
                </div>
                {/* serviceInfo */}
                <div className='space-y-[15px] text-center'>
                  <h1 className='text-2xl font-semibold text-blackText'>{service.title}</h1>
                  <p className='text-sm leading-6 opacity-80'>{service.description}</p>
                </div>
              </div>
            )
          }
        </div>
    </section>
  )
}
