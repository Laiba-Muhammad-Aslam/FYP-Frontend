import React, { useRef } from 'react'
import TeamUpCard from './TeamUpCard'
import { Settings2, Users, ShieldCheck } from "lucide-react";
import { useFade } from '../hooks/useFade';

export default function TeamUp() {
  const heroRef = useRef(null);

  // Apply fade animations
  useFade(heroRef, {
    trigger: "scroll",
    duration: 1.5,
    delay: 0.05
  });
  return (
    <div       ref={heroRef}
 className='py-2 md:py-4 flex justify-center items-center flex-col mt-3 md:mt-15' id='hub'>
      <h1 className='text-2xl md:text-4xl font-bold text-center'>All your controls in one place</h1>
      <p className='text-center p-3 md:p-4 text-xl text-[#404040]'>Volt AI is your team's AI analyst that moves work forward.</p>

      <div className='p-5 md:p-10 gap-3 md:gap-5 grid grid-cols-1 lg:grid-cols-3'>
        <TeamUpCard icon={<Settings2 size={50} color='#2563eb' />} title="Comprehensive settings" des="Manage all account settings in one place" />
        <TeamUpCard icon={<Users size={50} color='#2563eb' />} title="Team management" des="Assign roles and track activity in a single place" />
        <TeamUpCard icon={<ShieldCheck size={50} color='#2563eb' />} title="Secure, reliable platform" des="Keep your data protected with top-grade security measures" />
      </div>
    </div>
  )
}
