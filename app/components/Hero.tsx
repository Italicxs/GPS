"use client"

import React, { useState, useEffect    } from "react";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("next/link"));

export default function Hero() {

  const [scrollTo, setScrollTo] = useState(null);
  const [isClient, setIsClient] = useState(false)

  const handleClick = (event: any, targetId: any) => {
    event.preventDefault();
    setScrollTo(targetId);

    const getTargetElement = () => {
      return document.getElementById(targetId);
    };

    const targetElement = getTargetElement();

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); 
    }
  };
  
  useEffect(() => { setIsClient(true) }, [])  
  
  return (
    <div className="relative min-h-[900px]">
      { isClient &&
      <video
        src="/hero-bg.webm"
        autoPlay
        loop
        muted
        playsInline 
        className="absolute inset-0 object-cover w-full h-full"
      > 
      </video>}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-5 bg-transparent w-full p-4 text-center text-white">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold uppercase">
            GAS SOLUTIONS & DESIGNS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Efficiency at every connection: Discover our gas plumbing solutions.
          </p>

          <Link href="#AboutUs" className="btn btn-primary" onClick={(event) => handleClick(event, "AboutUs")}>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-sm text-sm sm:text-base md:text-lg lg:text-xl">
            Discover
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}