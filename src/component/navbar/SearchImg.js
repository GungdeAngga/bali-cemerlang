import React, { useState } from 'react';

const SearchImg = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  

  return (
    <div className="relative">
      <img
        src="/asset/search.png"
        alt="search"
        onClick={toggleMenu}
      />

{isMenuOpen && (
        <div className="absolute mt-2 p-2 bg-white border border-gray-300 rounded shadow-lg">
          <ul>
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-blue-200">Item 1</a>
            </li>
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-blue-200">Item 2</a>
            </li>
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-blue-200">Item 3</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchImg;