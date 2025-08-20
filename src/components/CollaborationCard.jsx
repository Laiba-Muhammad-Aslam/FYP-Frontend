import React from 'react'
import { ChevronRight } from 'lucide-react';

export default function CollaborationCard() {
  return (
    <div className=' flex md:flex-row flex-col items-center justify-center p-5 md:p-10 bg-blue-50'>
      <div className=' w-[100%] md:w-[50%] p-5 md:p-10'>
        <h2 className='font-bold text-xl md:text-3xl'>Flexible building blocks</h2>
        <p className='text-[#404040] font-medium py-1 md:py-3'>Add, remove, or edit analysis steps as you work.</p>
        <button className='flex hover:bg-gray-200 transition'>Try Now <ChevronRight /></button>
      </div>
      <div className='w-[100%] md:w-[50%] p-5 md:p-10'>
        <img className='w-[100%]' src="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg" alt="" />
      </div>
    </div>
  )
}
