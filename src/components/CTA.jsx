import React from 'react'
import { ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className='mt-4 flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col p-5'>
            <h1 className='text-2xl md:text-6xl font-bold pb-2 md:pb-3'>Get started for free</h1>
            <p className='text-center text-xl md:text-3xl pb-3 md:pb-6 font-medium text-[#404040]'>With Julius, you can get the most out of your data.</p>
            <button className='cursor-pointer flex bg-blue-700 hover:bg-blue-800 transition py-2 text-white font-medium rounded-md px-5'>Get Started for free  <ChevronRight /></button>
        </div>
    </section>
  )
}
