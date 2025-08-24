// import React from 'react'

// export default function FeatureCard({icon, title, des, imgUrl}) {
//   return (
//     <div className='mx-5 md:w-90 bg-gray-100 flex flex-col items-start justify-start p-6'>
//       <p className='font-bold text-[#2563eb] text-2xl pb-2 md:pb-3'>{icon}</p>
//       <h1 className='font-bold md:text-[20px] text-xl text-[#020817]'>{title}</h1>
//       <p className='text-[#404040]'>{des}</p>
//       <img className='mt-4 md:mt-2' src={imgUrl} alt="feature" />
//     </div>
//   )
// }

export default function FeatureCard({icon, title, des, imgUrl}) {
  return (
    <div className="w-full bg-gray-100 flex flex-col items-start justify-between p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div>
      <p className="font-bold text-[#2563eb] text-2xl pb-2 md:pb-3">{icon}</p>
      <h1 className="font-bold md:text-[20px] text-xl text-[#020817]">{title}</h1>
      <p className="text-[#404040]">{des}</p>
      </div>
      <img className="mt-4 md:mt-2 w-full object-contain" src={imgUrl} alt="feature" />
    </div>
  );
}

