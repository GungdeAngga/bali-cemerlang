import React from 'react'
import TourAndFlight from './TourAndFlight'
import SearchCity from './SearchCity'
import SearchButtonTour from './SearchButtonTour'

export default function TourMenu() {
  return (
    <div>

        <div class='-mt-14'>
          <SearchCity/>
          </div>
        <div class='-mt-[340px]'>
          <TourAndFlight/>
        </div>
        <div class='mt-[168px]'>
          <SearchButtonTour/>
        </div>
        
    </div>
  )
}
