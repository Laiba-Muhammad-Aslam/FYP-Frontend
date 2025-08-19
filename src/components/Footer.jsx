import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#ffffff] flex flex-col justify-center p-4 border-t border-gray-200 md:mt-5 mt-4'>
      <div className='text-center font-bold text-3xl pb-4 text-blue-800'>Logo</div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 font-medium p-8 md:p-10 text-[#64748B]'>
        <div>
            <h1>Kamil Raza</h1>
            <p>EB22210006054</p>
        </div>
        <div>
            <h1>Laiba Aslam</h1>
            <p>EB22210006056</p>
        </div>
        <div>
            <h1>Muhammad Ausaf Jamal</h1>
            <p>EB22210006073</p>
        </div>
        <div>
            <h1>Hamza Ali Shah</h1>
            <p>EB22210006042</p>
        </div>
      </div>
      <div className='text-center p-2 font-medium text-[#64748B]'>
        © 2025 Name. All rights reserved.
      </div>
    </div>
  )
}
