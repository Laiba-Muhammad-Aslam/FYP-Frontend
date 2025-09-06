import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Collaboration() {
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
      tl.from(".collab-heading", { opacity: 0, y: 30 });

      // Subheading
      tl.from(".collab-subheading", { opacity: 0, y: 30 }, "-=0.5");

      // Cards (staggered)
      tl.from(
        ".collab-card",
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
    <section ref={sectionRef} className="py-16 bg-white" id="workspace">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md md:max-w-lg sm:text-center z-50">
          <h2 className="collab-heading text-2xl md:text-4xl font-bold mb-3 text-center">
            Explore. Iterate. Automate.
          </h2>
          <p className="collab-subheading text-[#404040] md:text-lg font-medium max-w-2xl mx-auto mb-10 text-center">
            A powerful and easy-to-use AI workspace built for collaboration.
          </p>
        </div>

        <div className="mx-auto mt-6 md:mt-8 flex flex-col max-w-2xl gap-4 text-sm lg:max-w-none">
          {/* Card 1 */}
          <div className="collab-card relative bg-secondary lg:h-[448px] rounded-xl px-8 py-8 lg:py-10 lg:px-8 overflow-hidden">
            <div className="mb-8 flex flex-col justify-normal w-full lg:w-[300px] lg:h-full">
              <h3 className="text-2xl lg:text-4xl text-center lg:text-left font-bold mt-0 lg:mt-8 leading-none tracking-tight">
                Flexible building blocks
              </h3>
              <p className="mt-4 text-md font-medium text-center lg:text-left text-muted-foreground leading-[140%] w-full lg:w-[240px]">
                Add, remove, or edit analysis steps as you work.
              </p>
              <a className="mt-1 lg:mt-2 mx-auto lg:mx-0 group w-fit " href="#">
                <button
                  className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg active:scale-95 duration-100 active:opacity-80 active:shadow-none h-9 group flex items-center text-card-foreground gap-1 w-fit bg-transparent hover:bg-transparent p-0 mt-1 lg:mt-2 mx-auto lg:mx-0"
                  data-event="landing_tertiary_cta"
                  data-cy="landing_tertiary_cta"
                >
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
            </div>

            <img
              alt="A line graph comparing scaffolding and brickwork hours."
              loading="lazy"
              width="580"
              height="347"
              decoding="async"
              className="shadow-bigDropshadow relative lg:absolute w-full lg:w-auto max-w-[400px] mx-auto lg:max-w-[580px] h-auto lg:max-h-[350px] lg:-right-8 translate-y-0 lg:translate-y-1/2 lg:bottom-1/2"
              style={{ color: "transparent" }}
              src="https://julius.ai/_next/image?url=https%3A%2F%2Fjulius-public.s3.amazonaws.com%2Fpublic%2Fevolution-of-unemployment-rate-by-region.webp&w=640&q=75"
            />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
            <div className="collab-card relative bg-sidesecondary h-[400px] lg:h-[448px] rounded-xl p-8 overflow-hidden">
              <h3 className="text-2xl text-center lg:text-left font-bold leading-none tracking-tight">
                Work Smarter, Not Harder
              </h3>
              <p className="mt-4 text-md font-medium text-center lg:text-left text-muted-foreground leading-[140%] w-full lg:w-[240px]">
                Let AI handle the heavy lifting while you focus on insights that
                matter.
              </p>
              <a className="mt-2 lg:mt-4 mx-auto lg:mx-0 group w-fit " href="#">
                <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg active:scale-95 duration-100 active:opacity-80 active:shadow-none h-9 group flex items-center text-card-foreground gap-1 w-fit bg-transparent hover:bg-transparent p-0 mt-2 lg:mt-4 mx-auto lg:mx-0">
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
                alt="A bar graph analyzing healthcare data trends."
                loading="lazy"
                width="779"
                height="622"
                decoding="async"
                className="absolute min-w-[200%] md:min-w-[120%] lg:min-w-[150%] left-4 md:left-16 mt-8"
                style={{ color: "transparent" }}
                src="https://julius.ai/_next/image?url=https%3A%2F%2Fjulius-public.s3.amazonaws.com%2Fpublic%2Fbenefits-manage.webp&w=750&q=50"
              />
            </div>
            <div className="collab-card relative bg-secondary h-[400px] lg:h-[448px] rounded-xl p-8 overflow-hidden">
              <h3 className="text-2xl text-center lg:text-left font-bold leading-none tracking-tight">
                Insights You Can Rely On
              </h3>
              <p className="mt-4 text-md font-medium text-center lg:text-left text-muted-foreground leading-[140%] w-full lg:w-[240px]">
                Harness AI to deliver accurate, repeatable, and bias-free
                analysis every time.
              </p>
              <a className="mt-2 lg:mt-4 mx-auto lg:mx-0 group w-fit" href="#">
                <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg active:scale-95 duration-100 active:opacity-80 active:shadow-none h-9 group flex items-center text-card-foreground gap-1 w-fit bg-transparent hover:bg-transparent p-0 mt-2 lg:mt-4 mx-auto lg:mx-0">
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
                alt="A bar graph analyzing healthcare data trends."
                loading="lazy"
                width="779"
                height="622"
                decoding="async"
                className="absolute min-w-[200%] md:min-w-[120%] lg:min-w-[150%] left-4 md:left-16 mt-8"
                style={{ color: "transparent" }}
                src="https://julius.ai/_next/image?url=https%3A%2F%2Fjulius-public.s3.amazonaws.com%2Fpublic%2Fbenefits-insights.webp&w=1080&q=50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
