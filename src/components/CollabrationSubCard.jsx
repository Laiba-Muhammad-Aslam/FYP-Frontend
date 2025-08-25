import React from "react";
import { ChevronRight } from 'lucide-react';


export default function CollabrationSubCard({ title, des, imgUrl }) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
      <div className="relative bg-sidesecondary h-[400px] lg:h-[448px] rounded-xl p-8 overflow-hidden">
        <h3 className="text-2xl text-center lg:text-left font-bold leading-none tracking-tight">
          {title}
        </h3>

        <p className="mt-4 text-md font-medium text-center lg:text-left text-muted-foreground leading-[140%] w-full lg:w-[240px]">
          {des}
        </p>

        <a className="mt-2 lg:mt-4 mx-auto lg:mx-0 group" href="#">
          <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg active:scale-95 duration-100 active:opacity-80 active:shadow-none hover:shadow-button h-9 group flex items-center text-card-foreground gap-1 w-fit bg-transparent hover:bg-transparent p-0 mt-2 lg:mt-4 mx-auto lg:mx-0">
            <span className="font-semibold tracking-tight text-xs sm:text-sm group-hover:underline">
              Try now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right group-hover:translate-x-1 translate-x-0 transition-transform size-4 sm:size-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </a>

        <img
          alt={title}
          loading="lazy"
          width={779}
          height={622}
          decoding="async"
          className="absolute min-w-[200%] md:min-w-[120%] lg:min-w-[150%] left-4 md:left-16 mt-8"
          style={{ color: "transparent" }}
          sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 600px, 779px"
          src={imgUrl}
        />
      </div>
    </div>
  );
}
