import React, { useEffect, useState } from 'react';
import ShrinkingNavbar from './ShrinkingNavbar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', () => {
        setIsScrolled(window.scrollY > 0);
      });
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', () => {
          setIsScrolled(window.scrollY > 0);
        });
      };
    }, []);

  return (
    <div
    className={`fixed top-0 left-0 w-full transition-all duration-300 ${
      isScrolled ? 'h-24 bg-VividRed' : 'h-24 bg-transparent'
    }`}
    >
      <ShrinkingNavbar/>
      </div>
  );
};

export default Navbar;
