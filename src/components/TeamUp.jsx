import React from 'react'
import TeamUpCard from './TeamUpCard'
import { ChartLine, Share2, File } from 'lucide-react';

export default function TeamUp() {
  return (
    <div className='py-2 md:py-4 flex justify-center items-center flex-col mt-3 md:mt-15'>
      <h1 className='text-2xl md:text-4xl font-bold text-center'>Team up for faster outcomes</h1>
      <p className='text-center p-3 md:p-4 text-xl text-[#404040]'>Julius is your team's AI analyst that moves work forward.</p>

      <div className='p-5 md:p-10 gap-3 md:gap-5 grid md:grid-cols-3'>
        <TeamUpCard icon={<ChartLine  size={40} color='#2563eb'/>} title="Shared workspace" des="Explore new ideas, iterate on existing ones, and share your work across the team"/>
        <TeamUpCard icon={<Share2  size={40} color='#2563eb'/>} title="Team management" des="Assign roles, manage billing, and track usage in a single place"/>
        <TeamUpCard icon={<File  size={40} color='#2563eb'/>} title="Secure, reliable platform" des="Keep your data protected with top-grade security measures and compliance standards"/>
      </div>
    </div>
  )
}
