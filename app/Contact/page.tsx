"use client"
import { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import Content from "./Content";
import Hero from "./Hero";
import ContactForm from "./ContactForm";

export default function Company(){
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
          <main>
        <Hero></Hero>
        <Content></Content>
        <ContactForm></ContactForm>
          </main>
        </div>
      }
     </>
    );
}