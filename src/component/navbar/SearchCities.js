import React, { useState } from 'react';

const SearchCities = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div>
      <label>Cities to Visit</label>
      <div className='relative block text-left'>
          <button onClick={toggleDropdown} className="rounded-lg border-Gray65 border-2 w-60 text-left pl-2 hover:bg-gray-200 focus:outline-none">
              Select Cities
              <img src='/asset/chevron-down.png' alt='bottomArrow' className='absolute right-0 top-1 pr-2'/>
          </button>
      </div>

          {isOpen && (
          <div className="absolute mt-2 p-2 w-60 bg-white border border-gray-300 rounded shadow-lg">
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

  )
}

export default SearchCities;