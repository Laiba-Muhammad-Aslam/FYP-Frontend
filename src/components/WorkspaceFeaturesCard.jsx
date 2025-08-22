import React from 'react'

export default function WorkspaceFeaturesCard({imgUrl, title, desc}) {
  return (
    <div className=' bg-blue-50 w-80 p-5 md:p-3 rounded-2xl md:mx-5'>
      <img src={imgUrl} alt="" />
      <h1 className='text-[16px] text-[#404040] md:text-[18px] font-semibold pt-3 md:pt-5'> {title}</h1>
      <p className='text-[#64748B] md:text-[16px] font-[400]'> {desc}</p>
    </div>
  )
}
