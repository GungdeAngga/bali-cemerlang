import React from 'react';
import SearchImg from './SearchImg';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';

const ShrinkingNavbar = () => {
    
  return (
      <div class='flex'>
        <div class='flex-relative p-4 pl-28'>
          <Link to='/'>
            <img src='/asset/logoWeb.png' alt='Logo'/>
          </Link>
        </div>

        <div class="flex-1"></div>

        <div class="flex-relative p-9 pr-28">
          <div class="flex items-center">
            
              <ul className="flex space-x-6 lg:space-x-24">
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
                  <a href="/AboutUs" className="font-poppins text-white hover:text-gray-300">
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
  )
}

export default ShrinkingNavbar;