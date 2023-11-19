import React from 'react'
import SecondarySectionHeading from './SecondarySectionHeading'

export default function ProjectDescription() {
    return (
        <section className='mt-[60px]'>
            {/* sectiontitle */}
            <SecondarySectionHeading title={'Description'} />
            {/* sectionDescription */}
            <p className='text-sm opacity-80 mt-5 leading-[25px]'>
            Lorem ipsum dolor sit amet consectetur. Morbi vel est netus commodo lectus vel odio in. Proin eu eget nisl volutpat accumsan nisi eros dignissim. Tincidunt consectetur elit tempus egestas etiam. Morbi tincidunt vel varius ac velit eu tortor pretium. Sodales orci feugiat rhoncus bibendum. Ultricies enim etiam.
            </p>
            <h1 className='font-semibold text-sm mt-3 cursor-pointer  text-myGreen'>Show More</h1>
        </section>
    )
}
