"use client"
import { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import Content from "./Content";
import Hero from "./Hero";

export default function Designings() {
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
        <Hero></Hero>
        <Content></Content>
      </div>
    }
   </>
  );
}
