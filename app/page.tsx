"use client"
import { useState, useEffect } from 'react'
import Loader from './components/Loader';

import Hero from '@/app/components/Hero'
import AboutUs from '@/app/components/AboutUs'
import Services from '@/app/components/Services'
import HowWeWork from './components/HowWeWork';
import WhoAre from './components/WhoAre';
import WhoWeHelp from './components/HowWeHelp';
import WhyUs from './components/WhyUs';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoading(false);
        observer.disconnect();
      }
    }, {
      threshold: 0,
    });
    observer.observe(document.body);
  }, []);
  return (
    <>
    {
       isLoading ?  <Loader></Loader> : 
       <div>
      <Hero />
      <div id='AboutUs'>
      <AboutUs></AboutUs>
      </div>
      <Services></Services>
      <HowWeWork></HowWeWork>
      <WhoAre></WhoAre>
      <WhoWeHelp></WhoWeHelp>
      <WhyUs></WhyUs>
       </div>
     }
    </>
   );
}

