import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { redirectUserToUrl } from "../utility";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headingRef.current, subheadingRef.current, buttonRef.current], {
        autoAlpha: 0,
        y: 40,
        scale: 0.95
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.to(headingRef.current, { autoAlpha: 1, y: 0, scale: 1 })
        .to(subheadingRef.current, { autoAlpha: 1, y: 0, scale: 1 }, "+=0.2")
        .to(buttonRef.current, { autoAlpha: 1, y: 0, scale: 1 }, "+=0.2");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="mt-4 flex justify-center items-center p-7 md:p-20"
      style={{
        backgroundImage: `url('/assets/cta_footer.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col p-5">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-2xl md:text-[60px] font-[700] pb-2 md:pb-3 md:tracking-tighter text-center"
        >
          Start analyzing smarter, not harder
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-center text-xl md:tracking-tight md:font-medium md:text-[24px] pb-3 md:pb-6 font-medium text-[#404040]"
        >
          Join the future of data analysis. Let AI unlock insights from your SQL
          databases in seconds.
        </p>

        {/* Button */}
        <button
          ref={buttonRef}
          onClick={() => redirectUserToUrl()}
          className="cursor-pointer md:font-[600] md:text-[18px] flex bg-[#2563eb] hover:bg-blue-800 transition py-2 text-white font-medium rounded-md px-5"
        >
          Try Volt AI <ChevronRight />
        </button>
      </div>
    </section>
  );
}
