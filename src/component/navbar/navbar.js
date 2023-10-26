import React from 'react';
import ShrinkingNavbar from './ShrinkingNavbar';
import SearchMenu from './SearchMenu';

const Navbar = () => {
  return (
    <div class='w-full'>
      <ShrinkingNavbar/>
      <div class='pt-28'>
      <SearchMenu/>
      </div>
  </div>
  );
};

export default Navbar;