import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import TourAndFlight from '../../component/searchTour/TourAndFlight'


export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className="max-w-screen mx-auto">
        <img src='/asset/background.png' alt='background' className='w-full bg-cover'/>
          <div>
            <div className="absolute top-3/4 left-0 w-full h-1/5 flex items-center justify-center">
              <div className="text-white p-4 text-4xl font-bold font-poppins">
                BOOK A UNIQUE EXPERIENCE ON BALI CEMERLANG TOURS TODAY
              </div>
            </div>
          </div>
      </div>
      <Navbar/>
      <TourAndFlight/>
    </div>
  )
}
