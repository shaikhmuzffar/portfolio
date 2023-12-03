import React from 'react'
import { useRouter } from 'next/navigation'


export default function LivePreview({ projLive }) {
    const router = useRouter();
    return (
        <div className='flex select-none flex-col items-center gap-y-5 md:flex-row justify-between border bg-white	rounded-2xl p-5'>
            <h1 className='text-blackText  basis-[55%] ' >watch <span className='font-semibold' >Deployed Version/live preview</span> of
                project on Vercel</h1>
            {/* button */}
            {
                projLive ? <button onClick={() => router.push(projLive)} className='bg-myGreen  bg-opacity-25 hover:bg-opacity-30 text-myGreen font-semibold rounded-md px-[60px] py-[10px]'>
                    Live Preview
                </button> : <button className='bg-gray-300 cursor-not-allowed  bg-opacity-25 hover:bg-opacity-30 text-blackText font-semibold rounded-md px-[60px] py-[10px]'>
                    not available
                </button>
            }

        </div>
    )
}
