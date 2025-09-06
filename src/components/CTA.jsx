import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { redirectUserToUrl } from "../utility";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
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
      tl.from(".cta-heading", { opacity: 0, y: 30 });

      // Subheading
      tl.from(".cta-subheading", { opacity: 0, y: 30 }, "-=0.5");

      // Cards (staggered)
      tl.from(
        ".cta-cta",
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
    <section
      ref={sectionRef}
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
          className="cta-heading text-2xl md:text-[60px] font-[700] pb-2 md:pb-3 md:tracking-tighter text-center"
        >
          Start analyzing smarter, not harder
        </h1>

        {/* Subheading */}
        <p
          className="cta-subheading text-center text-xl md:tracking-tight md:font-medium md:text-[24px] pb-3 md:pb-6 font-medium text-[#404040]"
        >
          Join the future of data analysis. Let AI unlock insights from your SQL
          databases in seconds.
        </p>

        {/* Button */}
        <div className="cta-cta">
          <button
            onClick={() => redirectUserToUrl()}
            className="cursor-pointer md:font-[600] md:text-[18px] flex bg-[#2563eb] hover:bg-blue-800 transition py-2 text-white font-medium rounded-md px-5"
          >
            Try Volt AI <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
