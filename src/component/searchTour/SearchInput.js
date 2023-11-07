import React, { useState } from 'react'

const SearchInput = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
      // Handle the search logic using the 'query' state.
      console.log('Searching for:', query);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };

  return (
    <div className="flex items-center justify-center pt-28 h-36">
        <div class='flex items-center justify-center '>
            <img src="/asset/eva_search-fill.svg" alt="search" class=''/>
        </div>

        <input
            type="text"
            placeholder="Search by City"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress} // Listen for the "Enter" key press
            className="w-[1325px] p-2 border border-gray-300 rounded-lg pl-24 h-16 text-Poppins text-xl"
        />
        
    </div>
  )
}

export default SearchInput;