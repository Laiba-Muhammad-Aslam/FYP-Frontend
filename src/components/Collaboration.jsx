import React from 'react'
import CollaborationCard from './CollaborationCard'

export default function Collaboration() {
  return (
    <section className=' p-5 md:p-10 flex flex-col items-center justify-center'>
        <div className=' p-2 md:p-4 flex flex-col items-center justify-center'>
            <h1 className='text-[#020817] text-2xl md:text-[40px] font-bold text-center md:pb-3'>Explore. Iterate. Automate.</h1>
            <p className='text-[#404040] md:text-[20px] font-medium md:w-95 text-center'>A powerful and easy-to-use AI workspace built for collaboration.</p>
        </div>
        <div className=''>
            <CollaborationCard/>
        </div>
    </section>
  )
}
