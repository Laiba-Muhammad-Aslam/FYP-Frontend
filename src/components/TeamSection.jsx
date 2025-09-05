import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Laiba M. Aslam",
    role: "Software Engineer",
    img: "/assets/team/laiba.png",
    description:
      "I'm Laiba M. Aslam, a Software Engineer who writes purposeful logic and builds experiences connecting people to tech.",
  },
  {
    name: "M. Ausaf Jamal",
    role: "Software Engineer",
    img: "/assets/team/ausaf.png",
    description:
      "M. Ausaf Jamal — A digital architect whose mind speaks in algorithms and passion flows through innovative loops.",
  },
  {
    name: "Kamil Raza",
    role: "Software Engineer",
    img: "/assets/team/kamil.png",
    description:
      "I'm Kamil Raza. A web maestro with a heart that beats in lines of code and a mind that dreams in vibrant designs.",
  },
  {
    name: "Hamza Ali Shah",
    role: "Technical Consultant",
    img: "/assets/team/Hamza.png",
    description:
      "Hamza has experience in software engineering, strategy consulting, and product management internationally",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide everything first to prevent flicker
      gsap.set([".team-heading", ".team-subheading", ".team-card"], {
        autoAlpha: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // replay on scroll
        },
        defaults: { ease: "power2.out", duration: 0.8 },
      });

      // Heading
      tl.to(".team-heading", { autoAlpha: 1, y: 0 });

      // Subheading
      tl.to(".team-subheading", { autoAlpha: 1, y: 0 }, "+=0.2");

      // Cards sequential
      tl.to(".team-card", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
      }, "+=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={sectionRef} className="py-16 bg-white" id="our-team">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="team-heading text-3xl font-bold text-center mb-4 md:text-[36px] text-[#020817]">
          Meet Our Team
        </h2>

        {/* Subheading */}
        <p className="team-subheading text-[#404040] md:text-lg font-medium max-w-2xl mx-auto mb-10 text-center">
          Volt AI is our Final Year Project—a culmination of our computer
          science journey. We've built a platform that bridges complex SQL
          queries and simple conversations using advanced AI, turning our
          academic knowledge into a practical solution.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-65 md:h-70 w-full rounded-lg object-cover border-5 border-transparent hover:border-[#2563eb] transition mb-4 cursor-pointer"
              />
              <h3 className="text-xl font-semibold text-[#2563eb] mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
