import React from 'react';

const Navbar = () => {
  return (
    <div class="bg-blue-900 p-4 w-full">
      <div class="container flex items-center justify-between">
      <img src='/asset/logoWeb.png' alt='Logo'/>
          
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Contacts
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          <div className="absolute top-2 right-3">
            <img src='/asset/search.png' alt='search'/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;