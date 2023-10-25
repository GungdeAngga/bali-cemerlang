import React, { useState } from 'react';

const SearchImg = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      <img
        src="/asset/search.png"
        alt="search"
        onClick={toggleInput}
      />

      {showInput ? (
        <input
          type="text"
          placeholder="Enter text"
          className="ml-4 border border-gray-300 p-2 rounded"
        />
      ) : null}
    </div>
  );
};

export default SearchImg;