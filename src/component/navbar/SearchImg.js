import React, { useState } from 'react';
import SearchPackage from '../Searchpackage/SearchPackage';

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
        <div className="absolute pt-4 right-0">
          <SearchPackage/> {/*need to edit*/}
        </div>
      )}
    </div>
  );
};

export default SearchImg;