import React from 'react'
import SecondarySectionHeading from './SecondarySectionHeading'

export default function ProjectDescription({sectionData}) {
    return (
        <section className='mt-[60px]'>
            {/* sectiontitle */}
            <SecondarySectionHeading title={'Overview'} />
            {/* sectionDescription */}
            <p className='text-sm opacity-80 mt-5 leading-[25px]'>
            {sectionData}
            </p>
            <h1 className='font-semibold text-sm mt-3 cursor-pointer  text-myGreen'>Show More</h1>
        </section>
    )
}
