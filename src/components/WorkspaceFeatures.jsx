// import React from 'react'
// import WorkspaceFeaturesCard from './WorkspaceFeaturesCard'
// import { ChevronRight } from 'lucide-react';

// export default function WorkspaceFeatures() {
//   return (
//     <section className='border-red-800 flex flex-col justify-center items-center'>
//         <h1 className='text-2xl text-center md:text-[40px] font-[700] pb-2 md:pb-4'>Results in seconds, not hours</h1>
//         <p className='text-xxl md:text-[20px] font-[400] text-center text-[#404040]'>Ask for what you want and Julius analyzes the data for you</p>

//         <div className='flex flex-col md:flex-row gap-7 justify-center items-center pb-3 m-5 md:m-10'>
//             <WorkspaceFeaturesCard imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg" title="Connect all your data sources" desc="Connect with data sources like databases, spreadsheets, and more"/>

//             <WorkspaceFeaturesCard imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg" title="Ask for analysis" desc="You provide the questions, Julius handles the analysis"/>

//             <WorkspaceFeaturesCard imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg" title="Get results, instantly" desc="Choose from charts, tables or full reports tailored to your data"/>
           
//         </div>

//         <button className='cursor-pointer flex bg-[#2563eb] hover:bg-blue-800 transition py-2 text-white font-medium md:text[18px] md:font-[600] rounded-md px-5'>Get Started for free <ChevronRight /></button>
//     </section>
//   )
// }


import React from "react";
import WorkspaceFeaturesCard from "./WorkspaceFeaturesCard";
import { ChevronRight } from "lucide-react";

export default function WorkspaceFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Results in seconds, not hours
        </h1>
        <p className="text-[#404040] md:text-lg font-medium max-w-2xl mx-auto mb-10">
          Ask for what you want and Julius analyzes the data for you
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <WorkspaceFeaturesCard
            imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"
            title="Connect all your data sources"
            desc="Connect with data sources like databases, spreadsheets, and more"
          />

          <WorkspaceFeaturesCard
            imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"
            title="Ask for analysis"
            desc="You provide the questions, Julius handles the analysis"
          />

          <WorkspaceFeaturesCard
            imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"
            title="Get results, instantly"
            desc="Choose from charts, tables or full reports tailored to your data"
          />
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="flex items-center gap-2 bg-[#2563eb] hover:bg-blue-800 transition text-white font-semibold text-base md:text-lg rounded-md px-6 py-2 mx-auto">
            Get Started for free <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
