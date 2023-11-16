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

        <div class="absolute flex right-0 p-9 pr-28">
          <div class="flex items-center">
            
              <ul className="flex">
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300 pl-16">
                  Home
                  </a>
              </li>
              <li>
                  <a href="/Packges" className="font-poppins text-white hover:text-gray-300 pl-16">
                  Packages
                  </a>
              </li>
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300 pl-16">
                  News
                  </a>
              </li>
              <li>
                  <a href="/" className="font-poppins text-white hover:text-gray-300 pl-16">
                  Gallery
                  </a>
              </li>
              <li>
                  <a href="/AboutUs" className="font-poppins text-white hover:text-gray-300 pl-16">
                  About Us
                  </a>
              </li>
            <li>
              <div class='pl-16'>
                <SearchImg/>
              </div>
            </li>
            <li>
              <div class='pl-16'>
                <UserMenu/>
              </div>
            </li>
              </ul>

          </div>
        </div>
      </div>
  )
}

export default ShrinkingNavbar;
