import React from 'react'
import TourAndFlight from './TourAndFlight'
import SearchButtonTour from './SearchButtonTour'
import SearchInput from './SearchInput'

export default function TourMenu() {
  return (
    <div>
        <div className="absolute -mt-80 left-0 w-full h-44 flex items-center justify-center">
          <div className="text-white p-4 text-4xl font-bold font-poppins">
            BOOK A UNIQUE EXPERIENCE ON BALI CEMERLANG TOURS TODAY
          </div>
        </div>
        <div class='-mt-14'>
          <SearchInput/>
          </div>
        <div class='-mt-[340px]'>
          <TourAndFlight/>
        </div>
        <div class='mt-[118px]'>
          <SearchButtonTour/>
        </div>
        
    </div>
  )
}
