'use client'
import React, { useState } from 'react'
import SearchbarAndFilter from '../components/SearchbarAndFilter'
import ProjectsGroup from '../components/ProjectsGroup'

export default function Page() {
  const [searchContent,setSeachContent]=useState('');

  const handleSearchChange = (searchInput) =>{
    console.log(searchInput)
    setSeachContent(searchInput);
  }


  return (
    <div className='pt-[60px] md:pt-[140px] lg:pt-[165px]'>
      <section className='max-w-[83.333333%]  w-full  mx-auto '>
        <SearchbarAndFilter onSearchChange={handleSearchChange} />
        <ProjectsGroup searchContent={searchContent} />
      </section>

    </div >
  )
}
