import React from 'react'

export default function TeamUpCard({icon, title, des}) {
  return (
    <div className='rounded-xl flex justify-center items-center flex-col p-5 text-center'>
      <p className='font-medium'>{icon}</p>
      <h1 className='text-[#404040] font-semibold text-xl md:text-2xl'>{title}</h1>
      <p className='font-medium text-[#64748B]'>{des}</p>
    </div>
  )
}
