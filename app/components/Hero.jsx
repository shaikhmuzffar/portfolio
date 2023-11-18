import React from 'react'
import Image from 'next/image'
import Button from '../components/Button'
import ButtonSecondary from '../components/ButtonSecondary'

// images
import handWave from '../assets/handWave.png'
import heroImg from '../assets/heroImg.png'


export default function Hero() {
    return (
        <div className='pt-[60px] md:pt-[120px] flex items-end bg-[#f5f8f9]'>
            <div className='grid grid-cols-12 gap-y-10 w-full max-w-[83.333333%] mx-auto '>
                {/* left  */}
                <div className='flex items-center  justify-center text-center md:items-start  md:text-start  col-span-12 md:col-span-6  flex-col  space-y-4'>
                    {/* subtitle */}
                    <div className='flex items-center space-x-1 px-2 py-1 rounded-lg bg-opacity-50 bg-myGreen text-white'>
                        <span className='text-sm lg:text-base' >Im a full stack Web Developer</span>
                        <span className='text-sm lg:text-base' >🚀</span>
                    </div>
                    <div className='flex flex-col   justify-center space-y-5 lg:space-y-11'>
                        {/* greet, name and Bio  */}
                        <div className='flex flex-col  space-y-[15px] lg:space-y-[30px]'>
                            <div className='flex flex-col space-y-1'>
                                {/* greeting and handwave */}
                                <div className='flex items-center justify-center space-x-2 sm:space-x-3 md:justify-start ' >
                                    <h1 className='text-[35px] leading-[35px] sm:text-[40px] sm:leading-[40px] md:text-[45px] md:leading-[45px] lg:text-[60px] lg:leading-[60px] text-blackText font-[600]'>Hello</h1>
                                    <div className='relative h-[35px] w-[35px] sm:w-[40px] sm:h-[40px] lg:h-[80px] lg:w-[90px] '>
                                        <Image src={handWave} layout="fill" alt="handWave" objectFit='contain' />
                                    </div>
                                </div>
                                {/* name */}
                                <h1 className='text-[35px] leading-[35px] sm:text-[40px] sm:leading-[40px] md:text-[45px] md:leading-[45px]  lg:text-[70px] lg:leading-[60px] text-blackText  font-[600]'>Im Muzaffar</h1>
                            </div>
                            {/* bio */}
                            <p className='text-blackText text-[10px] text  lg:text-base leading-6  w-11/12 mx-auto md:ml-0 sm:w-[350px] ' >I dont really like talking about myself, but of my projects, which you can see here by clicking on them below</p>
                        </div>
                        {/* buttons  */}
                        <div className='flex flex-col  justify-center gap-5 items-center sm:flex-row sm:justify-start  '>
                            <Button className="flex" >Discover</Button>
                            <ButtonSecondary className=" flex" >Resume</ButtonSecondary>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='relative col-span-12 md:col-span-6 flex flex-col items-center justify-end '>
                    <div className='absolute bottom-0 110 md:relative  h-[300px] w-full md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] '>
                        <Image className=' ' src={heroImg} layout="fill" alt="handWave" objectFit='contain' />
                    </div>
                    <div className='w-full h-[300px] md:hidden'></div>
                </div>
            </div>
        </div>
    )
}





// <div className='relative col-span-6 border h-[300px] w-full md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] '>
// <Image className=' ' src={heroImg} layout="fill" alt="handWave" objectFit='contain'  />
// </div>