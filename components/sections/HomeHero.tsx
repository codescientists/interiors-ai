"use client"
import { useState } from "react";

export default function HomeHero() {
    const [moveX1, setMoveX1] = useState(0);
    const [moveY1, setMoveY1] = useState(0);
    const [moveX2, setMoveX2] = useState(0);
    const [moveY2, setMoveY2] = useState(0);
  
    const handleMouseMove = (e:any) => {
      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;
  
      // Different transformations for each image
      setMoveX1(x / 30);
      setMoveY1(y / 30);
  
      setMoveX2(-x / 40);
      setMoveY2(-y / 40);
    };
  

  return (
    <div 
        className="container relative w-full py-36" 
        style={{ backgroundImage: `linear-gradient( rgb(68, 255, 255), rgba(192, 205, 255, 0.41))`}} 
        onMouseMove={handleMouseMove}
    >
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-3/5 text-left">
          <h1 className="text-8xl font-bold mb-4">
            <p className="flex items-center text-xl space-x-2">
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to right, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}>
                </span>
                <span className="font-semibold text-2xl">
                AI-Powered Interior
                </span>
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}></span>
                <span className="text-8xl">AI Designs</span>
            </p>
            <p className="text-8xl !leading-[5rem]">That create the <br /> perfect room for <br /> you.</p>
          </h1>
          <p className="text-gray-900 text-xl font-medium my-8">
            Redesign your space with the help of advanced AI tools. Upload a
            photo, choose a style, <br /> and let AI create the perfect room for you.
          </p>
          <div className="flex space-x-4">
            <button 
              className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold" 
              style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)`}}>
              <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                Get Started Now
              </span>
              <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                Get Started Now
              </span>
            </button>
            <button className="group relative overflow-hidden border border-blue-600 text-black bg-[#9ef0ff] py-3 px-8 rounded-xl text-xl font-semibold">
              <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                More About us
              </span>
              <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                More About us
              </span>
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div
          className="lg:w-2/5 flex justify-center items-center mt-10 lg:mt-0"
        >
          <div className="relative w-full max-w-2xl">
            <div
              className="absolute -top-10 right-0 w-40 h-40 lg:w-[23rem] lg:h-64 bg-cover rounded-[4rem] border-8 border-cyan-300 z-10"
              style={{
                transform: `translate(${moveX1}px, ${moveY1}px)`,
                background:
                  "url('/hero/2.jpeg')",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            />
            <div
              className="absolute -bottom-10 left-0 w-40 h-40 lg:w-[23rem] lg:h-64 bg-cover rounded-[4rem] border-8 border-cyan-300 z-10"
              style={{
                transform: `translate(${moveX2}px, ${moveY2}px)`,
                background:
                  "url('/hero/3.jpeg')",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            />
            <div className="relative w-52 h-52 lg:w-[32rem] lg:h-[22rem] bg-cover rounded-l-[2.5rem] border-l-[15px] border-cyan-400"
              style={{
                background:
                  "url('/hero/1.jpeg')",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}>
            </div>

            <div className="absolute bottom-2 left-8 h-32 w-32 z-10">
                <div 
                    className="h-full w-full z-10 flex items-center justify-center animate-spin-slow" 
                    style={{
                        background:
                        "url('/hero/5.svg')",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                    
                ></div>
                <img src="/hero/4.svg" alt="" className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
