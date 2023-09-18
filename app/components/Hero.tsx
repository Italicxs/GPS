"use client"

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("next/link"));

export default function Hero() {

  const [scrollTo, setScrollTo] = useState(null);
  const targetElementRef = useRef(null);

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

  return (
    <div className="relative min-h-[900px]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={require('@/public/assets/hero-bg.webm')} type="video/webm" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-5 bg-transparent w-full p-4 text-center text-white">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            GAS SOLUTIONS & <span className="text-accent">DESIGNS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Efficiency at every connection: Discover our gas plumbing solutions.
          </p>

          <Link href="#AboutUs" className="btn btn-primary" onClick={(event) => handleClick(event, "AboutUs")} ref={targetElementRef}>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-sm text-sm sm:text-base md:text-lg lg:text-xl">
            Discover
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}