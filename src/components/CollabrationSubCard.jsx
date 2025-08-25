import React from "react";
import { ChevronRight } from 'lucide-react';


export default function CollabrationSubCard({ title, des, imgUrl }) {
  return (
    <div className="border-2flex flex-col bg-gray-100 rounded-xl shadow-sm overflow-hidden">
      {/* Text */}
      <div className="p-6">
        <h1 className="text-lg sm:text-xl md:text-2xl leading-6 md:leading-7  tracking-tight font-bold text-[#404040] mb-2  " 
      >
          {title}
        </h1>
        <p className="text-[#64748B] font-medium mb-3 text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-3/4 mt-4"
        >{des}</p>
        <button className="flex items-center gap-1 text-sm leading-5 tracking-tight font-semibold hover:underline hover:bg-gray-100 px-1 py-1 rounded transition"
        >
          Try Now <ChevronRight size={20} />
        </button>
      </div>

      {/* Image */}
      <div>
        <img className="w-full object-contain " src={imgUrl} alt={title} />
      </div>
    </div>
  );
}
