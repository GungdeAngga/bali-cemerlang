import React from 'react'
import TourImg from './TourImg'
import FlightImg from './FlightImg'
import { Link } from 'react-router-dom'

export default function TourAndFlight() {
  return (
    <div class='flex justify-center item-center'>
      <div class='basis-7/12'>
        <div className='bg-LightGrayishViolet h-36 rounded-lg shadow-2xl'>
          
          <div class='flex'>
            <div class='basis-1/2'>
              <Link to='/'>
                <TourImg/>
              </Link>
            </div>
            
            <div>
              <img src='asset/Line2.png' alt='Tour' class='pt-7'/>
            </div>

            <div class='basis-1/2'>
              <Link to='/'>
                <FlightImg/>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
