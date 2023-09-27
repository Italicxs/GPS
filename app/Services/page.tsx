"use client"
import { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import Analysis from "./Analysis";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Detection from "./Detection";
import GasInstallation from "./GasInstallation";
import Hero from "./Hero";
import Installation from "./Installation";
import Mainteinance from "./Mainteinance";
import Plans from "./Plans";

export default function Services(){

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
             <main>
           <Hero></Hero>
           <Cards></Cards>
           <Cards2></Cards2>
           <div id="Gas-Installation">
           <GasInstallation />
         </div>
           <div id="Analysis">
           <Analysis />
         </div>
         <div id="Design">
           <Plans />
         </div> 
         <div id="Detection">
         <Detection></Detection>
           </div>   
           <div id="Mainteinance">
           <Mainteinance></Mainteinance>
           </div>
           <div id="Install">
           <Installation></Installation>
           </div>
          </main>
         </div>
       }
      </>
    )
}



