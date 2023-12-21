import React from 'react'
import TourImg from './TourImg'
import { Link } from 'react-router-dom'

export default function TourAndFlight() {
  return (
    <div class='flex justify-center item-center'>
      <div class='w-[1110px]'>
        <div className='bg-LightGrayishViolet h-36 rounded-lg shadow-2xl'>
          
          <div class='flex items-center justify-center'>
              <Link to='/'>
                <TourImg/>
              </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
