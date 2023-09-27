'use client'
import { useState, useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
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
    <html lang="en">
      <Head>
      <title>GPS</title>
      <meta name="description" content="Gas Plum Solutions"/>
      <meta name="keywords" content="Gas Plumbing, Plumbing, Gas Plumber"/>
      </Head>
      <body className={inter.className}>
      {
      isLoading ?  <Loader></Loader> : 
      <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      </div>
    }
      </body>
    </html>
  )
}


