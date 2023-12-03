'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

// components
import SingleProjectBox from './SingleProjectBox'


// data
import myProjects from '../data/projectsData'
import Projects from './Projects'



export default function ProjectsGroup({ searchContent}) {
  const navigate = useRouter();
  // const [filteredProject, setFilteredProject] = useState(myProjects);
  const [allProjects, setAllProjects] = useState(myProjects);

  const filterProjects = allProjects.filter((project) =>
    project.projTags.some((tag) =>
      tag.toLowerCase().includes(searchContent.toLowerCase())
    ));

  return (
    <section className='text-blackText' >
      {/* projects group */}
      <div>
        {/* single project */}
        {

          filterProjects.map(({ thumTitle, thumbDescription, thumbTech, projInfo, projScreenshots, thumbURL }) =>
            <SingleProjectBox key={thumTitle} thumTitle={thumTitle} thumbDescription={thumbDescription} thumbTech={thumbTech} projInfo={projInfo} projScreenshots={projScreenshots} thumbURL={thumbURL} />)
        }

      </div>
    </section>
  )
}





// filtered based on selected project type
// const matchesProjectType = !projectType || matchesSearch.projectType.toLowerCase() ===projectType.toLowerCase();

// // filtered based on selected project genre
// const matchesProjectGenre = !projectGenre || matchesSearch.projectGenre.toLowerCase() == projectGenre.toLowerCase();

// Combine all filters
// return matchesSearch || matchesProjectType || matchesProjectGenre;