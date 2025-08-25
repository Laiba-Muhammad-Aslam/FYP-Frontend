import React from 'react'
import CollaborationCard from './CollaborationCard'
import CollabrationSubCard from './CollabrationSubCard'

export default function Collaboration() {
  return (
    <section className=" py-16 bg-white" id="workspace">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-5 md:px-10">
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
          imgUrl="src/assets/collaboration/collab1.webp"
        />

        {/* Sub Cards */}
        <div className=" md:max-w-[1024px] flex justify-center p-4 md:flex-row flex-col gap-6 mt-8">
          <CollabrationSubCard
            title="Reproducible results every time"
            des="Save your process and run it automatically every time."
            imgUrl="src/assets/collaboration/collab2.webp"
          />
          <CollabrationSubCard
            title="A place for every team"
            des="Collaborate in real time to uncover insights instantly."
            imgUrl="src/assets/collaboration/collab3.webp"
          />
        </div>
      </div>
    </section>
  );
}
