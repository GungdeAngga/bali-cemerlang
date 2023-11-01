import React from 'react'
import FlightTiketButton from './FlightTiketButton'
import SearchFlight from './SearchFlight'
import TourAndFlight from './TourAndFlight'

export default function FlightMenu() {
  return (
    <div>
      <div class=''>
          <TourAndFlight/>
          </div>
        <div class=''>
          <SearchFlight/>
        </div>
        <div class=''>
          <FlightTiketButton/>
        </div>
    </div>
  )
}
