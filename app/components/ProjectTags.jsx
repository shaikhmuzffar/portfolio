import React from 'react'


export default function ProjectTags({projectData}) {
    const {projTags} = projectData;
    return (
        <section className=' flex-wrap mt-[30px] flex gap-4 '>
                
               {projTags.map(tag=>
                    <span className='px-4 py-2 rounded-lg text-sm text-blackText  bg-slate-100'>{tag}</span>)
                }
            
        </section>
    )
}
