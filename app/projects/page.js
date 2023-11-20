import React from 'react'
import Image from 'next/image'

// components
import ProjectName from '../components/ProjectName'
import ProjectImgs from '../components/ProjectImgs'
import ProjectTags from '../components/ProjectTags'
import LivePreview from '../components/LivePreview'
import ProjectInfo from '../components/ProjectInfo'
import ProjectDescription from '../components/ProjectDescription'
import ProjectTechStack from '../components/ProjectTechStack'
import ProjectLinks from '../components/ProjectLinks'

export default function Page() {
  return (
    <div className='pt-[60px] md:pt-[140px] lg:pt-[165px]'>
      {/* ProjectImgs and tags  */}
      <section className='max-w-[83.333333%]  w-full  mx-auto '>
        <ProjectName />
        <ProjectImgs />
        <ProjectTags />
      </section>
      {/* projectInfo and Links */}
      <main className='mt-[60px] max-w-[83.333333%]  w-full  mx-auto' >
        <section className='grid grid-cols-12 gap-y-16 lg:gap-5 ' >
          {/* left */}
          <div className='col-span-12 lg:col-span-8 ' >
            <LivePreview/>
            <ProjectInfo/>
            <ProjectDescription/>
            <ProjectTechStack/>
          </div>
          {/* right */}
          <div className='col-span-12 lg:col-span-4' >
            <ProjectLinks/>
          </div>
        </section>

      </main>

    </div >
  )
}
