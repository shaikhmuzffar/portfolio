import React from 'react'
import Image from 'next/image'
import Button from '../components/Button'
import ButtonSecondary from '../components/ButtonSecondary'

// images
import handWave from '../assets/handWave.png'
import heroImg from '../assets/heroImg.png'


export default function Hero() {
    return (
        <div className=' h-screen flex items-end bg-[#f5f8f9]'>
            <div className='flex  flex-col md:flex-row w-full max-w-[83.333333%] mx-auto justify-between'>
                {/* left  */}
                <div className='flex  flex-col justify-center space-y-4'>
                    {/* subtitle */}
                    <div className='flex items-center space-x-1'>
                        <span>Im a full stack Web Developer</span>
                        <span>🚀</span>
                    </div>
                    <div className='flex flex-col space-y-11'>
                        {/* greet, name and Bio  */}
                        <div className='flex flex-col space-y-[30px]'>
                            <div className='flex flex-col space-y-1'>
                                {/* greeting and handwave */}
                                <div className='flex items-center space-x-5 ' >
                                    <h1 className='text-[80px] text-blackText font-[600]  leading-[66px] '>Hello</h1>
                                    <div className='relative h-[80px] w-[90px] '>
                                        <Image src={handWave} layout="fill" alt="handWave" objectFit='contain' />
                                    </div>
                                </div>
                                {/* name */}
                                <h1 className='text-[70px] text-blackText leading-[60px]  font-[600]'>Im Muzaffar</h1>
                            </div>
                            {/* bio */}
                            <p className='text-blackText leading-6 w-[350px]' >I dont really like talking about myself, but of my projects, which you can see here by clicking on them below</p>
                        </div>
                        {/* buttons  */}
                        <div className='flex items-center space-x-4'>
                            <Button className=" hidden md:flex" >Discover</Button>
                            <ButtonSecondary className=" hidden md:flex" >Resume</ButtonSecondary>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='relative  h-[500px] w-[500px] '>
                    <Image src={heroImg} layout="fill" alt="handWave" objectFit='contain'  />
                </div>
            </div>
        </div>
    )
}
