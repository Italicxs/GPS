import React from 'react';
import Image from 'next/image';
import Sketched from '@/public/Plumbing.jpg'
import Implemented from '@/public/Plumbing-.jpg'

export default function Content(){
    return(
        <div className="bg-white py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-light mb-6 text-[#4A60A1] text-center uppercase">
          3D WALKTHROUGHT
          </h1>
  
          <div className="text-lg text-black p-4 text-left">
            Imagine the future of your projects with GPS: visualize, experiment,
            and decide before you build! At GPS, we dont just present solutions;
            we make them tangible for you. More than two-dimensional plans and
            sketches, we invite you to enter into your project, walking through
            every corner virtually. Through our visualization tool, after the
            concept presentation, you will be able to explore your solution with
            any standard browser.
            <br />
            <br />
  
            <strong className='capitalize'>Essential Benefits:</strong>
            <ul className="list-disc pl-5">
              <li>                        
                Revolutionized Review: We simplify the review of solutions by 
                allowing you to explore them in detail before building.
              </li>
              <li>
                Elevated Engagement: We facilitate presentations and decision
                making by presenting our company through cutting-edge technology.
              </li>
              <li>
                Enhanced Insight: We expand your ability to examine minute details
                and review after the presentation.
              </li>
              <li>
                Validation Made Easy: We give you the opportunity to validate
                consistency between design and execution.
              </li>
            </ul>
            <br />
  
            Discover our commitment to detail through every model. Not only do we
            show you plumbing systems and appliances, but we also provide you with
            a precise location for each element. Experience the future today with
            GPS.
            <br />
            </div>
  
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-880 h-740">
                <Image
                  src={Sketched} 
                  alt="Sketched"
                  width={880}
                  height={740}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center uppercase">SKETCHED</h2>
                </div>
              </div>
            </div>
  
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-880 h-740">
                <Image
                  src={Implemented} 
                  alt="Implemented"
                  width={880}
                  height={740}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center uppercase">IMPLEMENTED</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}