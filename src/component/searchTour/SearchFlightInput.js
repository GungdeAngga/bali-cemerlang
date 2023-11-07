import React from 'react'
import FlightFrom from './FlightFrom'
import FlightTo from './FlightTo'
import FlightCheckIn from './FlightCheckIn'


export default function SearchFlightInput() {
  return (
    <div class='flex items-center justify-center h-60'>
        <div class='w-11/12 bg-white rounded-md'>
            <div class='flex flex-row divide-x'>
            <div class='h-16 w-80'><FlightFrom/></div>
            <div class='h-16 w-80'><FlightTo/></div>
            <div class='h-16 w-64'><FlightCheckIn/></div>
            <div class='h-16 w-64'>04</div>
            <div class='h-16'>05</div>
            </div>
        </div>
    </div>
  )
}
