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
    <div class='w-[800px] h-60 bg-LightGrayishViolet rounded-xl'>
      <div class='flex flex-col justify-center items-cente p-16 pt-[65px]'>
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
        <div class="pl-[64px] ">
          <ul className="absolute -mt-[64px] p-2 w-[650px] z-30 bg-white border border-gray-300 rounded-lg shadow-lg">
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
        </div>

          
        )}


    </div>

  )
}

export default SearchCities;