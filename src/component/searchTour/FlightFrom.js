import React, { useState } from 'react'

const FlightFrom = () => {

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
    <div class=''>
        <button onClick={toggleMenu} class='flex items-center h-16'> 
            <img src='/asset/home-line.png' alt='home' class='pr-5 pl-3'/>
            <div class='flex flex-col text-left'>
                From
                <div class='font-bold'>
                    {selectedItem ? selectedItem : "Select Cities"}
                </div> {/*from back end*/}
            </div>
            <div class='flex items-center justify-center'>
                <img src='/asset/arrow-drop-down-line.png' alt='dropdown' class='absolute pl-'/>
            </div>
            
        </button>

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

export default FlightFrom;