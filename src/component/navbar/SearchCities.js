import React, { useState } from 'react';

const SearchCities = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setMenuOpen(false);
  };
  
  const menuItems = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <label className='font-poppins'>Cities to Visit</label>
      <div className='relative block text-left'>
          <button onClick={toggleMenu} className="rounded-lg border-Gray65 border-2 w-60 text-left pl-2 hover:bg-gray-200 focus:outline-none">
              <img src='/asset/chevron-down.png' alt='bottomArrow' className='absolute right-0 top-1 pr-2'/>
          {selectedItem ? selectedItem : "Select Cities"}
          </button>
          
      </div>

      {isMenuOpen && (
          <ul className="absolute mt-2 p-2 w-60 bg-white border border-gray-300 rounded shadow-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className="font-poppins block px-4 py-2 hover:bg-blue-200 w-full text-left"
                  onClick={() => selectItem(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}


    </div>

  )
}

export default SearchCities;