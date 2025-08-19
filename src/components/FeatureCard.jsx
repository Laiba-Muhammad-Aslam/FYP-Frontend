import React from 'react'

export default function FeatureCard({icon, title, des, imgUrl}) {
  return (
    <div className='mx-5 md:w-90 bg-gray-100 flex flex-col items-start justify-start p-6'>
      <p className='font-bold text-blue-800 text-2xl'>{icon}</p>
      <h1 className='font-bold text-xl text-[#020817]'>{title}</h1>
      <p className='text-[#404040]'>{des}</p>
      <img className='mt-4 md:mt-2' src={imgUrl} alt="feature" />
    </div>
  )
}
