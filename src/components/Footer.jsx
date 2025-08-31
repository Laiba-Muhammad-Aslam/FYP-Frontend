import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#ffffff] flex flex-col justify-center p-4 border-t border-gray-200 pt-20 pb-10'>
      <div className='text-center font-bold text-3xl pb-4 cursor-pointer'>
        <img
          src={'/assets/logo_black.svg'}
          alt="Volt AI Logo"
          className="h-8 w-auto mx-auto"
        />
      </div>
      <div className='flex flex-col md:text-[14px] md:flex-row justify-center items-center gap-4 md:gap-10 font-medium p-8 md:p-10 text-[#64748bcc]'>
        <div>
          <h1 className='text-center'>Kamil Raza</h1>
          <p className='text-center'>EB22210006054</p>
        </div>
        <div>
          <h1 className='text-center'>Laiba Aslam</h1>
          <p className='text-center'>EB22210006056</p>
        </div>
        <div>
          <h1 className='text-center'>Muhammad Ausaf Jamal</h1>
          <p className='text-center'>EB22210006073</p>
        </div>
        <div>
          <h1 className='text-center'>Hamza Ali Shah</h1>
          <p className='text-center'>EB22210006042</p>
        </div>
      </div>
      <div className='text-center p-2 font-medium text-[#64748B]'>
        © 2025 Volt AI | All rights reserved.
      </div>
    </div>
  )
}
