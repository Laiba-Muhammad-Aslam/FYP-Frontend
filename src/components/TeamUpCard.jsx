import React from 'react'

export default function TeamUpCard({icon, title, des}) {
  return (
    <div className='rounded-xl w-80 md:min-h-50 flex justify-center items-center flex-col p-5 text-center'>
      <p className='pb-3 md:pb-4'>{icon}</p>
      <h1 className='text-[#404040] font-[550] text-xl md:text-[20px] md:pb-3 pb-2'>{title}</h1>
      <p className='font-medium text-[#64748B] md:text-[16px]'>{des}</p>
    </div>
  )
}
