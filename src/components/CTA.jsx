import React, { useRef } from 'react'
import { ChevronRight } from 'lucide-react';
import { redirectUserToUrl } from '../utility';
import { useFade } from '../hooks/useFade';

export default function CTA() {
  const heroRef = useRef(null);

  // Apply fade animations
  useFade(heroRef, {
    trigger: "scroll",
    duration: 1.5,
    delay: 0.05
  });
  return (
    <section
    ref={heroRef}
      className="mt-4 flex justify-center items-center p-7 md:p-20"
      style={{
        backgroundImage: `url('/assets/cta_footer.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col p-5">
        <h1 className="text-2xl md:text-[60px] font-[700] pb-2 md:pb-3 md:tracking-tighter text-center">
          Start analyzing smarter, not harder
        </h1>
        <p className="text-center text-xl md:tracking-tight md:font-medium md:text-[24px] pb-3 md:pb-6 font-medium text-[#404040]">
          Join the future of data analysis. Let AI unlock insights from your SQL
          databases in seconds.
        </p>
        <button onClick={() => redirectUserToUrl()} className="cursor-pointer md:font-[600] md:text-[18px] flex bg-[#2563eb] hover:bg-blue-800 transition py-2 text-white font-medium rounded-md px-5">
          Try Volt AI <ChevronRight />
        </button>
      </div>
    </section>
  );
}
