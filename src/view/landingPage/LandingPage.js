import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import TourMenu from '../../component/searchTour/TourMenu'
import SpecialOffer from '../../component/specialOffer/SpecialOffer'

export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className="max-w-screen mx-auto">
        <img src='/asset/background.png' alt='background' className='w-full bg-cover'/>
          <div>
            <div className="absolute top-[700px] left-0 w-full h-44 flex items-center justify-center">
              <div className="text-white p-4 text-4xl font-bold font-poppins">
                BOOK A UNIQUE EXPERIENCE ON BALI CEMERLANG TOURS TODAY
              </div>
            </div>
          </div>
      </div>
      <Navbar/>
      <TourMenu/>
      <SpecialOffer/>

    </div>
  )
}
