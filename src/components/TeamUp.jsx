import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamUpCard from "./TeamUpCard";
import { Settings2, Users, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeamUp() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none", // play once
        },
        defaults: { ease: "power3.out", duration: 1 },
      });

      // Heading
      tl.from(".teamup-heading", { opacity: 0, y: 30 });

      // Subheading
      tl.from(".teamup-subheading", { opacity: 0, y: 30 }, "-=0.5");

      // Cards (staggered)
      tl.from(
        ".teamup-card",
        {
          opacity: 0,
          y: 50,
          stagger: 0.3,
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-2 md:py-4 flex justify-center items-center flex-col mt-3 md:mt-15"
      id="hub"
    >
      <h1 className="teamup-heading text-2xl md:text-4xl font-bold text-center">
        All your controls in one place
      </h1>
      <p className="teamup-subheading text-center p-3 md:p-4 text-xl text-[#404040]">
        Volt AI is your team's AI analyst that moves work forward.
      </p>

      <div className="p-5 md:p-10 gap-3 md:gap-5 grid grid-cols-1 lg:grid-cols-3">
        <div className="teamup-card">
          <TeamUpCard
            icon={<Settings2 size={50} color="#2563eb" />}
            title="Comprehensive settings"
            des="Manage all account settings in one place"
          />
        </div>
        <div className="teamup-card">
          <TeamUpCard
            icon={<Users size={50} color="#2563eb" />}
            title="Team management"
            des="Assign roles and track activity in a single place"
          />
        </div>
        <div className="teamup-card">
          <TeamUpCard
            icon={<ShieldCheck size={50} color="#2563eb" />}
            title="Secure, reliable platform"
            des="Keep your data protected with top-grade security measures"
          />
        </div>
      </div>
    </div>
  );
}
