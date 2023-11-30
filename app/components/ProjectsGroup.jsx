'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

// components
import SingleProjectBox from './SingleProjectBox'


// data
import myProjects from '../data/projectsData'



export default function ProjectsGroup() {
  const navigate=useRouter()
  return (
    <section className='text-blackText' >
      {/* projects group */}
      <div>
        {/* single project */}
        {
          myProjects.map(({thumTitle,thumbDescription,thumbTech,projInfo,projScreenshots,thumbURL}) =>
          <SingleProjectBox key={thumTitle} thumTitle={thumTitle} thumbDescription={thumbDescription} thumbTech={thumbTech} projInfo={projInfo} projScreenshots={projScreenshots} thumbURL={thumbURL} />
          )
        }

      </div>
    </section>
  )
}
