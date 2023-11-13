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
        <div className="absolute pt-4 right-0">
          search {/*need to edit*/}
        </div>
      )}
    </div>
  );
};

export default SearchImg;