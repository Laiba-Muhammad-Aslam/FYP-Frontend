import React from 'react'
import TeamUpCard from './TeamUpCard'
import { Settings2, Users, ShieldCheck } from "lucide-react";

export default function TeamUp() {
  return (
    <div className='py-2 md:py-4 flex justify-center items-center flex-col mt-3 md:mt-15'>
      <h1 className='text-2xl md:text-4xl font-bold text-center'>All your controls in one place</h1>
      <p className='text-center p-3 md:p-4 text-xl text-[#404040]'>Volt AI is your team's AI analyst that moves work forward.</p>

      <div className='p-5 md:p-10 gap-3 md:gap-5 grid md:grid-cols-3'>
        <TeamUpCard icon={<Settings2 size={50} color='#2563eb'/>} title="Comprehensive settings" des="Manage all account settings in one place"/>
        <TeamUpCard icon={<Users size={50} color='#2563eb'/>} title="Team management" des="Assign roles and track activity in a single place"/>
        <TeamUpCard icon={<ShieldCheck size={50} color='#2563eb'/>} title="Secure, reliable platform" des="Keep your data protected with top-grade security measures"/>
      </div>
    </div>
  )
}
