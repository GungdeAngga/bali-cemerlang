import React from 'react'
import TourImg from './TourImg'
import FlightImg from './FlightImg'

export default function TourAndFlight() {
  return (
    <div class='flex'>
      <div class='basis-1/4'>
        <div className='border-slate-500 h-28 border-2 rounded-lg shadow-lg bg-slate-50'>
          <div class='flex'>
            <div class='basis-1/2'>
              <button className='basis-1/2'>
                <TourImg/>
              </button>
            </div>
            <div class='basis-1/2'>
              <button>
                <FlightImg/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
