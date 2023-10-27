import React from 'react';

const SearchDate = () => {

  return (
    <div className="relative block text-left font-poppins">
        <label htmlFor="date">
        Departures in
        </label>
            <input
            type="date"
            id="date"
            name="date"
            className="rounded-lg border-Gray65 border-2 w-60 text-left pl-2 hover:bg-gray-200 focus:outline-none"
            />
    </div>
    );
};

export default SearchDate;