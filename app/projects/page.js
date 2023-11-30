import React from 'react'
import SearchbarAndFilter from '../components/SearchbarAndFilter'
import ProjectsGroup from '../components/ProjectsGroup'


export default function Page() {
  return (
    <div className='pt-[60px] md:pt-[140px] lg:pt-[165px]'>
      <section className='max-w-[83.333333%]  w-full  mx-auto '>
        <SearchbarAndFilter/>
        <ProjectsGroup/>
      </section>

    </div >
  )
}
