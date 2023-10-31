import React from 'react'
import TourAndFlight from './TourAndFlight'
import SearchCity from './SearchCity'
import SearchButtonTour from './SearchButtonTour'

export default function TourMenu() {
  return (
    <div class='-mt-32'>
      <div class=''>

        <div class=''>
          <TourAndFlight/>
          </div>
        <div class='-mt-14'>
          <SearchCity/>
        </div>
        <div class='-mt-7'>
          <SearchButtonTour/>
        </div>
        
      </div>
    </div>
  )
}
