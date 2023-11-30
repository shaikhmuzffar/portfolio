import React from 'react'
import SecondarySectionHeading from './SecondarySectionHeading'

export default function FutureImprovements({ sectionData }) {
    return (
        <section className='mt-[90px]' >
            <SecondarySectionHeading title={'Future Improvments'} />
            {/* Future Improvments */}
            <div className='mt-[45px] flex flex-col space-y-5' >
                {/* single Future Improvments */}
                {sectionData && sectionData.map(({ title, subTitle }) =>
                    <div key={title} className='flex flex-col space-y-1 py-6 px-6 rounded-2xl bg-gray-50' >
                        <h1 className='font-semibold' >{title}</h1>
                        <p className='text-sm' >{subTitle}</p>
                    </div>
                )
                }
            </div>
        </section>
    )
}
