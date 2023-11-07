import React, { useState } from 'react';

const SearchDate = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Function to format the date as "dd/mm/yyyy"
  // const formatDate = (date) => {
  //   const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  //   return new Date(date).toLocaleDateString('en-GB', options);
  // };

  return (
    <div className="flex justify-center items-center h-60">
      <div className="block text-left font-poppins w-[650px]">
         <label class="text-xl">
        Departures in
        </label>
            <input
            type="date"
            placeholder="dd/mm/yyyy"
            className="rounded-lg border-Gray65 border-2 w-[650px] h-16 text-left pl-2 hover:bg-gray-200 focus:outline-none"
            value={selectedDate}
            onChange={handleDateChange}
            />
            {/* <p className="mt-2">Formatted Date: {formatDate(selectedDate)}</p> data date dd/mm/yyyy*/}
      </div>
    </div>
    );
};

export default SearchDate;