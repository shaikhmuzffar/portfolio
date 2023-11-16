"use client"
import React, { useState } from 'react'
import Image from 'next/image'
// images
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import aboutImg from '../assets/AboutMeImg.png'
import SectionHeading from './SectionHeading'



const myDetails = [
    {
        title: "My Educational Details",
        info: [
            {
                subTitle: "Name",
                subInfo: "Muzffar Shaikh"
            },
            {
                subTitle: "Email ID",
                subInfo: "shaikhmuzffar82@gmail.com"
            },
            {
                subTitle: "Phone",
                subInfo: "8208091113"
            },
            {
                subTitle: "Website",
                subInfo: "myWebsite.com"
            },
            {
                subTitle: "Nationality",
                subInfo: "Indian"
            },
            {
                subTitle: "Freelance",
                subInfo: "Available"
            },
        ]
    },
    {
        title: "Certifications and Achievements",
        info: [
            {
                subTitle: "",
                subInfo: "MERN Stack Web Development"
            },
            {
                subTitle: "",
                subInfo: "Responsive Design and Development"
            },
            {
                subTitle: "",
                subInfo: "UI/UX Design"
            },

        ]
    },
    {
        title: "Skills",
        info: [
            {
                subTitle: "Languages",
                subInfo: "Javascript, HTML, C, CPP, Python"
            },
            {
                subTitle: "React JS, GSAP",
                subInfo: "Responsive Design and Development"
            },
            {
                subTitle: "Framework",
                subInfo: "Next JS, Redux-Toolkit, React-Router"
            },
            {
                subTitle: "UI Framework",
                subInfo: "Tailwind CSS, Bootstrap, Material UI"
            },
            {
                subTitle: "CSS PreProcessors",
                subInfo: "SASS/SCSS, CSS Modules "
            },

        ]
    },
]

export default function About() {
    const [tab,setTab] =useState("")
    return (
        <section className='mt-[120px]'>
            <div className='w-10/12 items-center mx-auto grid grid-cols-12 gap-4'>
                {/* img */}
                <div className='col-span-12 md:col-span-6 lg:col-span-5  flex items-center justify-center'>
                    <div className=' relative w-[440px]  h-[400px] '>
                        <Image src={aboutImg} layout='fill' objectFit='contain' />
                    </div>
                </div>

                {/* right */}
                <div className='col-span-12  md:col-span-6 lg:col-span-7 text-blackText '>
                    <SectionHeading subTitle="About Me" title1="Details About" title2="My Education and Experiences" />
                    {/* detailsRows */}
                    <div className='mt-[45px] flex flex-col space-y-5'>

                        {
                            myDetails.map(({title,info}) => <div className='flex flex-col space-y-5' >
                                {/* detailsRow */}
                                <div className='flex space-x-5 justify-between  items-center pb-4 border-b border-dashed'>
                                    <span className='text-lg'>{title}</span>
                                    <div className='relative h-4 w-4 cursor-pointer'>
                                        {
                                            tab===title?<Image onClick={()=>setTab('')} src={minus} layout="fill" alt="plus" objectFit='contain' />
                                            :<Image onClick={()=>setTab(title)} src={plus} layout="fill" alt="plus" objectFit='contain' />
                                        }
                                        
                                    </div>
                                </div>
                                
                                {tab == title?
                                    <div className='flex flex-col space-y-3 pl-5' >
                                    {
                                        // singleInfo
                                        info.map(({ subInfo, subTitle }) =>
                                            <div className='opacity-90 text-sm'>
                                                {subTitle ?
                                                    <div className='flex space-x-3 ' >
                                                        <span className='font-semibold'>{subTitle}:</span>
                                                        <span>{subInfo}</span>
                                                    </div>
                                                    : 
                                                    <span className='font-semibold' >{subInfo}</span>
                                                    }
                                            </div>
                                        )
                                    }
                                </div>:""
                                }
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </section >
    )
}
