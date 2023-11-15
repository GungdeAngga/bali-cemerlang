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
    <div class='flex justify-center items-center h-60'>
      <div class='w-[650px]'>
        <label className='font-poppins text-xl'>Cities to Visit</label>
        <div className='block text-left'>
          <button onClick={toggleMenu} className="rounded-lg border-Gray65 border-2 w-[650px] h-16 text-left pl-2 hover:bg-gray-200 focus:outline-none">
              <div class='flex'>
                {selectedItem ? selectedItem : "Select Cities"}
                <img src='/asset/chevron-down.png' alt='bottomArrow' className='pl-[520px]'/>
              </div>
          </button>
        </div>
      </div>
      

      {isMenuOpen && (
          <ul className="absolute mt-60 p-2 w-[650px] bg-white border border-gray-300 rounded shadow-lg">
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