'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import Card from './components/card'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);


  const [isSticky, setIsSticky] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if(currentScrollY > 828) setIsSticky(true);
      else setIsSticky(false);
  
      // setLastScrollY(currentScrollY);
    };
    if(window.scrollY > 828) setIsSticky(true);
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen flex items-center justify-center flex-col">

      {/* hero section */}

      <div className="hero min-h-screen flex flex-col items-center justify-center space-y-8 lg:space-y-0 lg:flex-row-reverse">
        <div className="video-container w-full flex justify-center mt-4 lg:mt-0">
          <video className="w-11/12 max-w-[550px] h-auto lg:w-[650px] lg:h-[680px] object-cover" src="Rocket_dark.webm" autoPlay loop muted/>
        </div>

        <div className=" text-center lg:text-left px-4 lg:px-2">
          <h1 className="text-4xl lg:text-8xl px-2">Welcome to OrbitalEdge</h1>
          <p className={`mt-4 text-base lg:text-lg font-mono pl-2 z-10 relative ${ isMobile ? "" : "typewriter"}`}>
            Embark on an Interstellar Journey - Explore, Learn, and Expand Your Horizons.
          </p>
        </div>
      </div>



      {/* blogs section */}

      <div className="blog section">
        <div className={`flex items-center justify-center font-mono ${ isSticky
          ? 'fixed bg-black top-0 left-0 w-full z-50 shadow-lg mt-0 '
          : 'relative mt-[150px]'
        }`} id="explore-blogs">
          <h1 className="text-4xl py-6">Explore Blogs</h1>

          {isSticky && (
            <Link href="/signup" className="button1 hover-3 text-md px-4 py-2 absolute right-4 top-1/2 transform -translate-y-1/2">
              
                Create your own!
             
            </Link>
          )}
        </div>


        <div className={`${isSticky ? 'mt-[425px]' : 'min-h-screen p-8 mt-[150px] '}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
          </div>
        </div>
      </div>






    </div>
  );
}

