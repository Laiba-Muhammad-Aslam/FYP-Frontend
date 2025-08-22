import React from 'react'
import { ChevronRight } from 'lucide-react';

export default function CollaborationCard({ title, des, imgUrl }) {
  return (
    <div className=' flex md:flex-row flex-col items-center justify-center p-5 md:p-10 bg-blue-50'>
      <div className=' w-[100%] md:w-[50%] p-5 md:p-10'>
        <h2 className='font-bold text-xl md:text-[36px] text-[#404040] md:max-w-80'>{title}</h2>
        <p className='text-[#64748B] font-medium md:font-[600] py-1 md:py-3 md:max-w-70'>{des}</p>
        <button className='flex justify-center items-center font-semibold hover:bg-gray-200 transition md:text-[14px] hover:underline'>Try Now <ChevronRight size={20}/></button>
      </div>
      <div className='w-[100%] md:w-[50%] p-5 md:p-10'>
        <img className='w-[100%]' src={imgUrl} alt="" />
      </div>
    </div>
  )
}
