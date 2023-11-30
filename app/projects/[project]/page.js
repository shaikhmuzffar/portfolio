'use client'
import React, { useState } from 'react'

// components
import ProjectName from '../../components/ProjectName'
import ProjectImgs from '../../components/ProjectImgs'
import ProjectTags from '../../components/ProjectTags'
import LivePreview from '../../components/LivePreview'
import ProjectInfo from '../../components/ProjectInfo'
import ProjectDescription from '../../components/ProjectDescription'
import ProjectTechStack from '../../components/ProjectTechStack'
import ProjectLinks from '../../components/ProjectLinks'
import Achivements from '@/app/components/Achivements'
import KeyFeature from '@/app/components/KeyFeature'
import FutureImprovements from '@/app/components/FutureImprovements'
import Conclusion from '@/app/components/Conclusion'

// projectData
import myProjects from '../../data/projectsData'

export default function Page({params}) {
  const [projId,setProjectId] = useState(params.project)
  const projectData = myProjects.find(({thumbURL})=>thumbURL===projId)
  console.log(myProjects);


  return (
    <div className='pt-[60px] md:pt-[140px] lg:pt-[165px]'>
      {/* ProjectImgs and tags  */}
      <section className='max-w-[83.333333%]  w-full  mx-auto '>
        <ProjectName sectionData={projectData.projTitle} />
        <ProjectImgs sectionData={projectData.projScreenshots}  />
        <ProjectTags projectData={projectData} />
      </section>
      {/* projectInfo and Links */}
      <main className='mt-[60px] max-w-[83.333333%]  w-full  mx-auto' >
        <section className=' grid grid-cols-12 gap-y-16 lg:gap-5 ' >
          {/* left */}
          <div className='col-span-12 lg:col-span-8 ' >
            <LivePreview />
            <ProjectInfo sectionData={projectData.projInfo} />
            <ProjectDescription sectionData={projectData.projOverview} />
            <ProjectTechStack sectionData={projectData.projTech} />
          </div>
          {/* right */}
          <div className=' col-span-12 lg:col-span-4' >
            <ProjectLinks />
          </div>
        </section>
        <Achivements sectionData={projectData.achievements} />
        <KeyFeature  sectionData={projectData.keyFeatures} />
        <FutureImprovements sectionData={projectData.futureImprovements} />
        <Conclusion sectionData={projectData.conclusion} />
      </main>
    </div >
  )
}
