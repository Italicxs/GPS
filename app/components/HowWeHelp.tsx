"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mpContent from '@/public/mapimg.webp';

const textData = [
  {
    title: 'INSTALLATION',
    description: [
      '-Gas pipeline',
      '-Installation of appliances',
      '-Valve and regulator replacement',
    ],
  },
  {
    title: 'MAINTEINANCE',
    description: [
      '-Leak Detection',
      '-Modernization of gas systems',
      '-Control and consumption meters',
    ],
  },
  {
    title: 'REGULATIONS',
    description: [
      '-Certifications and compliance with regulations',
      '-Inspection and testing',
      '-Education and awareness',
    ],
  },
];

const iconCoordinates = [
  { x: 249, y: 45 },
  { x: 280, y: 155 },
  { x: 70, y: 40 },
];

export default function HowWeHelp() {
  const [selectedPoint, setSelectedPoint] = useState(0);

  const handleIconClick = (index: any) => {
    setSelectedPoint(index);
  };

  const renderIcons = () => {
    return textData.map((item, index) => (
      <svg
        key={index}
        viewBox="0 0 512 512"
        fill="#ffbe0b"
        onClick={() => handleIconClick(index)}
        width="30"
        height="30"
        style={{
          position: 'absolute',
          left: `${iconCoordinates[index].x}px`,
          top: `${iconCoordinates[index].y}px`,
          cursor: 'pointer',
        }}
      >
        <path fill="none" d="M240 304h32l6-160h-44l6 160z" />
        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z" />
      </svg>
    ));
  };

  return (
<div className="bg-gray-100 py-10">
  <div className="container mx-auto text-center p-3">
    <h1 className="text-lg text-black lg:text-2xl font-light mb-4 uppercase">HOW WE CAN HELP</h1>
    <h3 className="text-2xl font-semibold mb-4 text-black/60 uppercase">OUR AREAS OF EXPERTISE</h3>
    <div className="flex flex-wrap items-center">
      <div className="md:w-1/2 mt-4 md:max-w-md mx-auto relative">
        <Image
          src={mpContent}
          alt="Map"
          className="object-contain max-w-full h-auto rounded-sm"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
        />
        {renderIcons()}
      </div>

      <div className="w-full sm:w-full sm:pl-0 md:w-1/2 md:pl-8">
        {selectedPoint !== null && (
          <div className="text-black">
            <h2 className="text-2xl font-semibold text-black/60 uppercase sm:text-center">
              {textData[selectedPoint].title}
            </h2>
            <ul className="lg:text-xl sm:text-lg text-left mt-4">
              {textData[selectedPoint].description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    <Link href="/Services">
      <button className="bg-blue-500 text-white px-4 py-2 mt-10 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl">
        Read more
      </button>
    </Link>
  </div>
</div>

  );
}
