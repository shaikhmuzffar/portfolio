import React from 'react'
import Image from 'next/image'

// images
import searchIcon from '../assets/searchIcon.png'
import ReactIcon from './svgs/ReactIcon'

export default function SearchbarAndFilter() {
  return (
    <section>
      <div className='flex flex-col sm:flex-row justify-between gap-y-6  md:border md:border-gray-100 px-3 py-3 rounded-[10px]' >
        {/* search and input  */}
        <div className='flex  gap-4 md:gap-6 items-center' >
          <div className='relative h-5 w-5 opacity-80 ' >
            <Image src={searchIcon} layout='fill' objectFit='contain' ></Image>
          </div>
          <input type="text" className='outline-none  w-full border-gray-100 sm:w-56 md:w-72 lg:w-96'  placeholder='Search your preference...' />
        </div>

        {/* filters */}
        <div className='flex gap-4 md:gap-6' >
          <select className='form-select w-25 bg-gray-100 py-1 active:border-none rounded-[4px] outline-none text-[12px] px-2' name="" id="">
            <option value="">Project type</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="ui design">UI Design</option>
          </select>

          <select className='form-select w-25 bg-gray-100 py-1 rounded-[4px] outline-none text-[12px] px-2'>
            <option value="ecommerce">Project genre</option>
            <option value="ecommerce">E-commerce</option>
            <option value="booking">Booking</option>
          </select>
        </div>
      </div>
    </section>
  )
}
