// hooks/useFade.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useFade = (ref, options = {}) => {
    console.log(ref)
    useEffect(() => {
        console.log(';alaskaSKA')
        if (!ref.current) return;

        const element = ref.current;

        const {
            duration = 1,
            delay = 0,
            y = 350,
            x = 0,
            scale = 1,
            opacity = 0,
            trigger = "scroll", // "scroll" or "load"
            start = "top 93%",
            ease = "power2.out",
            stagger = 0
        } = options;

        // Set initial state
        gsap.set(element, {
            opacity,
            y,
            x,
            scale: scale === 1 ? 1 : scale
        });

        if (trigger === "load") {
            // Animate immediately on load
            gsap.to(element, {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration,
                delay,
                ease
            });
        } else {
            // Animate on scroll
            gsap.to(element, {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration,
                delay,
                ease,
                scrollTrigger: {
                    trigger: element,
                    start,
                    toggleActions: "play none none reverse"
                }
            });
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(st => {
                if (st.trigger === element) {
                    st.kill();
                }
            });
        };
    }, [ref, options]);
};