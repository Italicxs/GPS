"use client"
import { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import Hero from './Hero';
import Content from './Content';

export default function Processes(){
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
    return(
      <>
      {
         isLoading ?  <Loader></Loader> : 
         <div>
           <Hero></Hero>
           <Content></Content>
         </div>
       }
      </>
        
    )
}