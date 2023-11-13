import React, { Children } from 'react'

export default function ButtonSecondary({children}) {
  return (
    <div className=''>
        <div className='flex items-center justify-center rounded-[4px] text-[600] border-gray-900 shadow-xl bg-white h-11 w-[150px] text-[12px] text-myGreen hover:bg-gray-50 cursor-pointer active:scale-95 transition duration-300 ease-out '>
            {children}
        </div>
    </div>
  )
}
