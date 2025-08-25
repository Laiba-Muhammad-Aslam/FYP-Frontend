import React from 'react'
import CollaborationCard from './CollaborationCard'
import CollabrationSubCard from './CollabrationSubCard'

// export default function Collaboration() {
//   return (
//     <section className='my-15 p-5 md:p-10 flex flex-col items-center justify-center'>
//         <div className=' p-2 md:p-4 flex flex-col items-center justify-center'>
//             <h1 className='text-[#020817] text-2xl md:text-[40px] font-bold text-center md:pb-3'>Explore. Iterate. Automate.</h1>
//             <p className='text-[#404040] md:text-[20px] font-medium md:w-95 text-center'>A powerful and easy-to-use AI workspace built for collaboration.</p>
//         </div>
//         <div className='flex flex-col'>
//           {/* replace with actual image */}
//             <CollaborationCard title="Flexible building blocks" des="Add, remove, or edit analysis steps as you work." imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg" /> 

//             <div className='flex md:flex-row flex-col gap-3 mt-4 items-center'>
//               <CollabrationSubCard title="Reproducible results every time" des="Save your process and run it automatically every time." imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"/>
//               <CollabrationSubCard title="A place for every team" des="Collaborate in real time to uncover insights instantly." imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"/>
//             </div>
//         </div>
//     </section>
//   )
// }


export default function Collaboration() {
  return (
    <section className="py-16 bg-white" id="workspace">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[#020817] text-2xl md:text-[40px] font-bold">
            Explore. Iterate. Automate.
          </h1>
          <p className="text-[#404040] md:text-[20px] font-medium max-w-2xl mx-auto">
            A powerful and easy-to-use AI workspace built for collaboration.
          </p>
        </div>

        {/* Main Collaboration Card */}
        <CollaborationCard
          title="Flexible building blocks"
          des="Add, remove, or edit analysis steps as you work."
          imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"
        />

        {/* Sub Cards */}
        <div className="flex md:flex-row flex-col gap-6 mt-8">
          <CollabrationSubCard
            title="Reproducible results every time"
            des="Save your process and run it automatically every time."
            imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"
          />
          <CollabrationSubCard
            title="A place for every team"
            des="Collaborate in real time to uncover insights instantly."
            imgUrl="https://wpdatatables.com/wp-content/uploads/2020/08/chart5.jpg"
          />
        </div>
      </div>
    </section>
  );
}
