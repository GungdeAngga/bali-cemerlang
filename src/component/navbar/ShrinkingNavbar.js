import React, { useEffect, useState } from 'react';
import SearchImg from './SearchImg';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';

const ShrinkingNavbar = () => {
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
      <div class='flex'>
        <div class='flex-relative p-4 pl-28'>
          <Link to='/'>
            <img src='/asset/logoWeb.png' alt='Logo'/>
          </Link>
        </div>

        <div class="flex-1"></div>

        <div class="flex-relative p-9 pr-28">
          <div class="flex items-center">
            
              <ul className="flex space-x-6 md:space-x-24">
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300">
                  Home
                  </a>
              </li>
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300">
                  Packages
                  </a>
              </li>
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300">
                  news
                  </a>
              </li>
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300">
                  Gallery
                  </a>
              </li>
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300">
                  About Us
                  </a>
              </li>
            <li>
              <SearchImg/>
            </li>
            <li>
              <UserMenu/>
            </li>
              </ul>

          </div>
        </div>
      </div>

  </div>
  )
}

export default ShrinkingNavbar;