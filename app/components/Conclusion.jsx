import React from 'react'
import SecondarySectionHeading from './SecondarySectionHeading'

export default function Conclusion({sectionData}) {
  return (
    <section className='mt-[90px] text-blackText ' >
        <SecondarySectionHeading title={'Conclusion'} />
        <p className='mt-[30px] opacity-80 leading-7 '>{sectionData}</p>
    </section>
  )
}
