import React from 'react'

export default function LivePreview() {
    return (
        <div className='flex justify-between border bg-white	rounded-2xl p-5'>
            <h1 className='text-blackText  basis-[55%] ' >watch <span className='font-semibold' >Deployed Version/live preview</span> of
                project on Vercel</h1>
            {/* button */}
            <button className='bg-myGreen  bg-opacity-25 hover:bg-opacity-30 text-myGreen font-semibold rounded-md px-[60px] py-[10px]'>
                Live Preview
            </button>
        </div>
    )
}
