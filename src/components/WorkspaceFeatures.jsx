import React, { useRef } from "react";
import WorkspaceFeaturesCard from "./WorkspaceFeaturesCard";
import { ChevronRight } from "lucide-react";
import { redirectUserToUrl } from '../utility';
import { useFade } from "../hooks/useFade";

export default function WorkspaceFeatures() {
  const heroRef = useRef(null);

  // Apply fade animations
  useFade(heroRef, {
    trigger: "scroll",
    duration: 1,
    delay: 0.05
  });
  return (
    <section ref={heroRef}
      className="py-16 bg-white" id="discover">
      <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Results in seconds, not hours
        </h1>
        <p className="text-[#404040] md:text-lg font-medium max-w-2xl mx-auto mb-10">
          Ask for what you want & Volt AI analyzes the data for you
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <WorkspaceFeaturesCard
            imgUrl={"/assets/features/feature_7.png"}
            title="Connect all your data sources"
            desc="Connect with data sources like databases, spreadsheets, and more"
          />

          <WorkspaceFeaturesCard
            imgUrl={"/assets/features/feature_8.png"}
            title="Ask for analysis"
            desc="You provide the questions, Volt AI handles the analysis"
          />

          <WorkspaceFeaturesCard
            imgUrl={"/assets/features/feature_9.png"}
            title="Get results, instantly"
            desc="Choose from charts, tables or full reports tailored to your data"
          />
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button onClick={() => redirectUserToUrl()} className="flex items-center gap-2 bg-[#2563eb] hover:bg-blue-800 transition text-white font-semibold text-base md:text-lg rounded-md px-6 py-2 mx-auto cursor-pointer">
            Get instant insights <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
