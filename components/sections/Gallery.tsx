// @ts-nocheck

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const firstSliderRef = useRef(null);
  const secondSliderRef = useRef(null);

  useEffect(() => {
    const firstSlider = firstSliderRef.current;
    const secondSlider = secondSliderRef.current;

    // First slider (Scroll to the right)
    const firstSliderTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlider,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onLeave: () => {
          // Stop vertical scrolling
          gsap.to(window, { scrollTo: { y: firstSlider.offsetHeight }, duration: 0 });
        },
        onEnterBack: () => {
          // Stop vertical scrolling when scrolling back
          gsap.to(window, { scrollTo: { y: 0 }, duration: 0 });
        },
      },
    });

    firstSliderTimeline.fromTo(
      firstSlider,
      { x: "0%" },
      { x: "-50%", ease: "none" }
    );

    // Second slider (Scroll to the left)
    const secondSliderTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: secondSlider,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onLeave: () => {
          // Stop vertical scrolling
          gsap.to(window, { scrollTo: { y: secondSlider.offsetHeight }, duration: 0 });
        },
        onEnterBack: () => {
          // Stop vertical scrolling when scrolling back
          gsap.to(window, { scrollTo: { y: 0 }, duration: 0 });
        },
      },
    });

    secondSliderTimeline.fromTo(
      secondSlider,
      { x: "-50%" },
      { x: "0%", ease: "none" }
    );

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className="container py-16 px-8">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="flex items-center justify-center text-xl space-x-2">
            <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to right, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}>
            </span>
            <span className="font-semibold text-2xl">
            Gallery
            </span>
            <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}></span>
        </p>
        <h2 className="text-6xl max-w-3xl mx-auto font-bold mb-4">
          Explore a collection of stunning AI-generated designs
        </h2>
        <p className="text-xl max-w-2xl mx-auto font-medium">
        Check out some of our most successful projects, designed and executed using our platform. Whether it’s a cozy home renovation, a retail store layout, or a corporate office redesign, these projects showcase the flexibility and power of AI-driven designs.
        </p>
      </div>

      <div className="bg-slate-100 px-6 py-10 rounded-3xl">
        {/* First Slider (Scrolls to the right) */}
        <div className="overflow-hidden mb-12">
        <div
          className="flex space-x-10 w-max"
          ref={firstSliderRef}
        >
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/1.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/2.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/3.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/4.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/1.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/2.png')" }}
            ></div>
          </div>
        </div>

        {/* Second Slider (Scrolls to the left) */}
        <div className="overflow-hidden">
          <div
            className="flex space-x-10 w-max"
            ref={secondSliderRef}
          >
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/6.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/5.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/8.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/7.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/6.png')" }}
            ></div>
            <div
              className="w-[28rem] h-72 rounded-3xl shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/5.png')" }}
            ></div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Gallery;
