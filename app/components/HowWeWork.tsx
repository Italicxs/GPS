"use client"


  import { useState, useEffect, useCallback } from 'react';
  import slide1 from '@/public/IDENTIFY.webp';
  import slide2 from '@/public/ANALYZE.webp';
  import slide3 from '@/public/DESIGNING.webp';
  import slide4 from '@/public/VALIDATE.webp';
  import slide5 from '@/public/IMPLEMENT.webp';
  import slide6 from '@/public/EXECUTE.webp';


  export default function HowWeWork(){
    const slides = [
      {
        image: slide1,
        title: 'IDENTIFY',
        description: 'Our gas plumbing experts uncover hidden problems and provide accurate solutions. Every detail counts, trust us!',
      },
      {
        image: slide2,
        title: 'ANALYZE',
        description: 'Skilled at analyzing complex gas networks, we solve problems and understand their source. We guarantee solid and lasting solutions.',
      },
      {
        image: slide3,
        title: 'DESIGN',
        description: 'In gas plumbing, our team creates innovative and functional systems. Safety and performance are central to our design.',
      },
      {
        image: slide4,
        title: 'VALIDATE',
        description: 'We validate every step of the way with extensive testing and uncompromising standards. Our seal of quality gives you confidence.',
      },
      {
        image: slide5,
        title: 'IMPLEMENT',
        description: 'We transform ideas into reality, implementing solutions that change gas-fired plumbing. Innovation comes to life in our projects.',
      },
      {
        image: slide6,
        title: 'EXECUTE',
        description: 'We are unmatched in executing every task with surgeon-like precision. Every action is a step toward your well-being and peace of mind.',
      },
    ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [touchStartX, setTouchStartX] = useState(null);
      const [touchEndX, setTouchEndX] = useState(null);
    
      const prevSlide = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }, [currentIndex, slides.length]);
    
      const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, [currentIndex, slides.length]);
    
      useEffect(() => {
        const handleTouchStart = (e: any) => {
          setTouchStartX(e.touches[0].clientX);
        };
    
        const handleTouchMove = (e: any) => {
          setTouchEndX(e.touches[0].clientX);
        };
    
        const handleTouchEnd = () => {
          if (touchStartX && touchEndX) {
            const touchDiff = touchStartX - touchEndX;
            if (touchDiff > 50) {
              nextSlide();
            } else if (touchDiff < -50) {
              prevSlide();
            }
          }
    
          setTouchStartX(null);
          setTouchEndX(null);
        };
    
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
          
        return () => {
          window.removeEventListener('touchstart', handleTouchStart);
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('touchend', handleTouchEnd);
        };
      }, [touchStartX, touchEndX, prevSlide, nextSlide]);
    
      const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
      };
        return (
          
          <div>
            <div className="bg-white py-10">
              <div className="container mx-auto text-center">
                <h1 className="text-lg text-black lg:text-2xl font-light mb-4 uppercase">HOW WE WORK</h1>
              </div>
            </div>
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:space-x-8 p-3">
              <div className="lg:w-2/3 relative">
              <div
                style={{
                  backgroundImage: `url(${JSON.stringify(slides[currentIndex].image.src)})`,
                  transition: 'background-image .5s ease-in-out',
                }}
                className="w-full h-80 lg:h-[300px] rounded-xl bg-center bg-cover"
              ></div>
              <div
                className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"  
                onClick={prevSlide}
              >
                <svg
                fill="currentColor"
                viewBox="0 0 16 16" height="30px" width="30px">
                <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z"/></svg>
              </div> 
              <div
                className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                onClick={nextSlide}
              >
                <svg
                fill="currentColor"
                viewBox="0 0 16 16" height="30px" width="30px">
                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z"/>
                  </svg>
              </div>
              <div className="flex justify-center space-x-2 mt-4">  
              {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-2 w-2 rounded-full cursor-pointer ${
                      currentIndex === slideIndex
                        ? 'bg-black/80'
                        : 'bg-black/40'
                    }`}
                  ></div>
                ))}
              </div>
              </div>
      
              <div className="lg:w-1/3 mt-4 lg:mt-16">
                <h1 className="text-2xl lg:text-3xl font-semibold text-center text-black/60 uppercase">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-lg lg:text-base mt-2">
                  {slides[currentIndex].description}  
                </p>
              </div>
            </div>
          </div>
        );
      }
      
