// import React from 'react'
import { ChevronRight } from "lucide-react";

export default function CollaborationCard({ title, des, imgUrl }) {
  return (
    <div className=" max-w-[1024px] py-10 flex flex-col md:flex-row items-center bg-[#f1f5f9] rounded-xl shadow-sm overflow-hidden">
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <h2
          className="font-bold text-[#404040] mb-3 text-2xl sm:text-3xl md:text-4xl  tracking-tight w-full sm:w-3/4"
        >
          {title}
        </h2>
        <p
          className="text-[#64748B] font-medium mb-4 w-full sm:w-2/3"
        >
          {des}
        </p>
        <button className="flex items-center gap-1 font-semibold hover:underline hover:bg-gray-100 px-2 py-1 rounded transition">
          Try Now <ChevronRight size={20} />
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <img className="w-full object-contain" src={imgUrl} alt={title} />
      </div>
    </div>
  );
}
