import React from "react";
import { ChevronRight } from 'lucide-react';

export default function CollabrationSubCard({ title, des, imgUrl }) {
  return (
    <div className="p-5 flex flex-col items-center justify-center md:py-4 bg-gray-100 rounded-lg">
      <div>
        <h1 className="md:text-[24px] font-[700] pb-2 md:pb-3 text-[#404040]">{title}</h1>
        <p className="text-[#64748B] md:font-semibold md:w-80 pb-2 md:pb-3">{des}</p>
        <button className="flex justify-center items-center hover:underline font-semibold hover:bg-gray-200 transition md:text-[14px]">
          Try Now <ChevronRight size={20} />
        </button>
      </div>
       <div className='w-[100%] md:w-[100%] p-5 md:p-10'>
        <img className='w-[100%]' src={imgUrl} alt="" />
      </div>
    </div>
  );
}
