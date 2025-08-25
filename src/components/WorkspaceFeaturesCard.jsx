import React from 'react'

export default function WorkspaceFeaturesCard({imgUrl, title, desc}) {
  return (
    <div className='flex flex-col rounded-2xl shadow-sm w-full h-full hover:shadow-md transition'>
      <img src={imgUrl} className="w-full object-contain rounded-lg" alt={title}/>
      <div className='p-6'>
      <h1 className='text-lg md:text-xl text-[#404040] font-semibold pt-4 text-start'> {title}</h1>
      <p className='text-[#64748B] text-sm md:text-base mt-2 text-start'> {desc}</p>
      </div>
    </div>
  )
}
