// import React from 'react'
import { ChevronRight } from 'lucide-react';

// export default function CollaborationCard({ title, des, imgUrl }) {
//   return (
//     <div className=' flex md:flex-row flex-col items-center justify-center p-5 md:p-10 bg-blue-50'>
//       <div className=' w-[100%] md:w-[50%] p-5 md:p-10'>
//         <h2 className='font-bold text-xl md:text-[36px] text-[#404040] md:max-w-80'>{title}</h2>
//         <p className='text-[#64748B] font-medium md:font-[600] py-1 md:py-3 md:max-w-70'>{des}</p>
//         <button className='flex justify-center items-center font-semibold hover:bg-gray-200 transition md:text-[14px] hover:underline'>Try Now <ChevronRight size={20}/></button>
//       </div>
//       <div className='w-[100%] md:w-[50%] p-5 md:p-10'>
//         <img className='w-[100%]' src={imgUrl} alt="" />
//       </div>
//     </div>
//   )
// }


export default function CollaborationCard({ title, des, imgUrl }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-xl shadow-sm overflow-hidden">
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <h2 className="font-bold text-xl md:text-[32px] text-[#404040] mb-3">
          {title}
        </h2>
        <p className="text-[#64748B] font-medium mb-4">
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
