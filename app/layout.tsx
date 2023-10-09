import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import type { Metadata } from 'next'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gas Plum Solutions',
  description: 'Soluciones a Gas Panama.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href='./favicon.ico'/>
      </Head>
      <>
      <body className={inter.className}>
      <Navbar></Navbar>
      <main>
      {children}
      </main>
      <Footer></Footer>
      </body>
      </>
    </html>
  )
}


