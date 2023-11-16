import React, { Children } from 'react'

export default function Button
 ({children, className}) {
  return (
    <div className=''>
        <div className={`${className} items-center justify-center rounded-[4px] text-white h-11 w-[150px] text-[12px] bg-myGreen cursor-pointer active:scale-95 transition duration-300 ease-out `}>
            {children}
        </div>
    </div>
  )
}
