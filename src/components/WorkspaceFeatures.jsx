import React, { useRef, useEffect } from "react";
import WorkspaceFeaturesCard from "./WorkspaceFeaturesCard";
import { ChevronRight } from "lucide-react";
import { redirectUserToUrl } from "../utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkspaceFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current.querySelector(".fade-heading");
      const paragraph = sectionRef.current.querySelector(".fade-para");
      const cards = sectionRef.current.querySelectorAll(".fade-card");
      const cta = sectionRef.current.querySelector(".fade-cta");

      // Animate heading
      gsap.from(heading, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate paragraph
      gsap.from(paragraph, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: paragraph,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate cards in stagger
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate CTA button
      gsap.from(cta, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: cta,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white" id="discover">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
        {/* Heading */}
        <h1 className="fade-heading text-2xl md:text-4xl font-bold mb-3">
          Results in seconds, not hours
        </h1>
        <p className="fade-para text-[#404040] md:text-lg font-medium max-w-2xl mx-auto mb-10">
          Ask for what you want & Volt AI analyzes the data for you
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <WorkspaceFeaturesCard
            className="fade-card"
            imgUrl={"/assets/features/feature_7.png"}
            title="Connect all your data sources"
            desc="Connect with data sources like databases, spreadsheets, and more"
          />

          <WorkspaceFeaturesCard
            className="fade-card"
            imgUrl={"/assets/features/feature_8.png"}
            title="Ask for analysis"
            desc="You provide the questions, Volt AI handles the analysis"
          />

          <WorkspaceFeaturesCard
            className="fade-card"
            imgUrl={"/assets/features/feature_9.png"}
            title="Get results, instantly"
            desc="Choose from charts, tables or full reports tailored to your data"
          />
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => redirectUserToUrl()}
            className="fade-cta flex items-center gap-2 bg-[#2563eb] hover:bg-blue-800 transition text-white font-semibold text-base md:text-lg rounded-md px-6 py-2 mx-auto cursor-pointer"
          >
            Get instant insights <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
