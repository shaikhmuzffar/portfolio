import React from 'react'
import Image from 'next/image'
import share from '../assets/share.png'
import save from '../assets/save.png'

export default function ProjectName() {
    return (
        <section className=' w-full flex flex-col gap-y-5 justify-between ' >
            {/* proectName */}
            <h1 className='text-[28px] lg:text-[32px] text-blackText capitalize leading-[40px] font-semibold' >Doruko - a Food Ordering Website </h1>
            {/* useractions save and share */}
            <div className='flex gap-x-3' >
                {/* save  */}
                <div className='h-11 w-11 rounded-full flex border items-center justify-center opacity-75 hover:opacity-100 transition ease-in duration-300 hover:shadow-sm '>
                    <div className='relative h-5 w-5  '>
                        <Image src={save} layout='fill' alt='save' objectFit='contain' />
                    </div>
                </div>
                {/* share  */}
                <div className='h-11 w-11 rounded-full flex border items-center justify-center opacity-75 hover:opacity-100 transition ease-in duration-300 hover:shadow-sm '>
                    <div className='relative h-5 w-5  '>
                        <Image src={share} layout='fill' alt='share' objectFit='contain' />
                    </div>
                </div>
            </div>
        </section>
    )
}
