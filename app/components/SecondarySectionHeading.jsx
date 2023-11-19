import React, { Children } from 'react'

export default function SecondarySectionHeading({title,Children}) {
    return (
        <section className='flex gap-1 items-center'>
            <div className='h-1 w-5 bg-blackText' />
            <h1 className='text-[26px] font-bold' >{title}</h1>
        </section>
    )
}
