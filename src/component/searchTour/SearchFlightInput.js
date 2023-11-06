import React from 'react'
import FlightFrom from './FlightFrom'
import FlightTo from './FlightTo'

export default function SearchFlightInput() {
  return (
    <div class='flex items-center justify-center h-60'>
        <div class='w-11/12 bg-white rounded-md'>
            <div class='grid grid-cols-5 divide-x'>
            <div class='h-16'><FlightFrom/></div>
            <div class='h-16'><FlightTo/></div>
            <div class='h-16'>03</div>
            <div class='h-16'>04</div>
            <div class='h-16'>05</div>
            </div>
        </div>
    </div>
  )
}
