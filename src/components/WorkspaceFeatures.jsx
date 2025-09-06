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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse", // play once
        },
        defaults: { ease: "power3.out", duration: 1 },
      });

      // Heading
      tl.from(".workspace-heading", { opacity: 0, y: 30 });

      // Subheading
      tl.from(".workspace-subheading", { opacity: 0, y: 30 }, "-=0.5");

      // Cards (staggered)
      tl.from(
        ".workspace-card",
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
    <section ref={sectionRef} className="py-16 bg-white" id="discover">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
        {/* Heading */}
        <h1 className="workspa-heading text-2xl md:text-4xl font-bold mb-3">
          Results in seconds, not hours
        </h1>
        <p className="workspace-para text-[#404040] md:text-lg font-medium max-w-2xl mx-auto mb-10">
          Ask for what you want & Volt AI analyzes the data for you
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="workspace-card">

            <WorkspaceFeaturesCard
              imgUrl={"/assets/features/feature_7.png"}
              title="Connect all your data sources"
              desc="Connect with data sources like databases, spreadsheets, and more"
            />
          </div>
          <div className="workspace-card">


            <WorkspaceFeaturesCard
              className="workspace-card"
              imgUrl={"/assets/features/feature_8.png"}
              title="Ask for analysis"
              desc="You provide the questions, Volt AI handles the analysis"
            />
          </div>
          <div className="workspace-card">



            <WorkspaceFeaturesCard
              className="workspace-card"
              imgUrl={"/assets/features/feature_9.png"}
              title="Get results, instantly"
              desc="Choose from charts, tables or full reports tailored to your data"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="workspace-cta mt-10">
          <button
            onClick={() => redirectUserToUrl()}
            className=" flex items-center gap-2 bg-[#2563eb] hover:bg-blue-800 transition text-white font-semibold text-base md:text-lg rounded-md px-6 py-2 mx-auto cursor-pointer"
          >
            Get instant insights <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
