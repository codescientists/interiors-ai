"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const container = scrollContainerRef.current;
    const section = sectionRef.current;

    if (!container || !section) return; // Ensure these elements are present

    // @ts-ignore
    const horizontalScrollLength = container.scrollWidth - section.clientWidth;

    // GSAP horizontal scroll animation tied to vertical scroll
    gsap.to(container, {
      x: -horizontalScrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true, // Pin the section while the animation is playing
        scrub: true, // Smoothly map the scrolling to the animation
        // @ts-ignore
        end: () => `+=${container.scrollWidth}`, // End after scrolling horizontally
        invalidateOnRefresh: true, // Recalculate on window resize
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container py-20 relative min-h-screen h-fit overflow-hidden"
    >
      {/* Title and Button Section */}
      <div className="flex flex-col md:flex-row items-start mb-12 py-8">
        <div className="w-full md:w-1/2">
          <p className="flex items-center text-xl font-semibold">
            <span>Services</span>  <span className="w-14 h-[2px] ml-2" style={{ backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))` }}></span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Our Exclusive Suite of <br /> AI Image Services
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-xl font-medium mt-4 mb-6">
            Empower projects with cutting-edge AI services designed to amplify creativity and efficiency. Tailored solutions cover all needs.
          </p>

          <button
            className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold"
            style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)` }}>
            <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
              Explore All Services
            </span>
            <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
              Explore All Services
            </span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 w-max"
        >
          {/* Image Cards */}
          <div
            className="w-[25rem] h-[35rem] rounded-3xl bg-cover bg-center overflow-hidden"
          >
            <img src="/services/1.jpeg" className="h-full w-full rounded-3xl -z-10 object-cover" alt="" />
            <h2 className="text-5xl font-bold z-10">AI Interior Design</h2>
          </div>
          <div
            className="w-[25rem] h-[35rem] rounded-3xl bg-cover bg-center overflow-hidden"
          >
            <img src="/services/2.jpeg" className="h-[70%] w-full rounded-3xl -z-10 object-cover" alt="" />
            <h2 className="text-5xl font-bold z-10">AI Interior Design</h2>
          </div>
          <div
            className="w-[25rem] h-[35rem] rounded-3xl bg-cover bg-center overflow-hidden"
          >
            <img src="/services/3.jpeg" className="h-full w-full rounded-3xl -z-10 object-cover" alt="" />
            <h2 className="text-5xl font-bold z-10">AI Interior Design</h2>
          </div>
          <div
            className="w-[25rem] h-[35rem] rounded-3xl bg-cover bg-center overflow-hidden"
          >
            <img src="/services/4.jpeg" className="h-[70%] w-full rounded-3xl -z-10 object-cover" alt="" />
            <h2 className="text-5xl font-bold z-10">AI Interior Design</h2>
          </div>
          <div
            className="w-[25rem] h-[35rem] rounded-3xl bg-cover bg-center overflow-hidden"
          >
            <img src="/services/5.jpeg" className="h-full w-full rounded-3xl -z-10 object-cover" alt="" />
            <h2 className="text-5xl font-bold z-10">AI Interior Design</h2>
          </div>
          <div
            className="w-[25rem] h-[35rem] rounded-3xl bg-cover bg-center overflow-hidden"
          >
            <img src="/services/6.jpeg" className="h-[70%] w-full rounded-3xl -z-10 object-cover" alt="" />
            <h2 className="text-5xl font-bold z-10">AI Interior Design</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
