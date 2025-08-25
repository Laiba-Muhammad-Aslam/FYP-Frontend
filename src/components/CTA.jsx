import React from 'react'
import { ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      className="mt-4 flex justify-center items-center h-50 md:h-90"
      style={{
        backgroundImage: `url('src/assets/cta_footer.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col p-5">
        <h1 className="text-2xl md:text-[60px] font-[700] pb-2 md:pb-3 md:tracking-tighter">
          Start analyzing smarter, not harder
        </h1>
        <p className="text-center text-xl md:tracking-tight md:font-medium md:text-[24px] pb-3 md:pb-6 font-medium text-[#404040]">
          Join the future of data analysis. Let AI unlock insights from your SQL
          databases in seconds.
        </p>
        <button className="cursor-pointer md:font-[600] md:text-[18px] flex bg-[#2563eb] hover:bg-blue-800 transition py-2 text-white font-medium rounded-md px-5">
          Try Volt AI <ChevronRight />
        </button>
      </div>
    </section>
  );
}
