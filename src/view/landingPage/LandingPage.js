import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import TourMenu from '../../component/searchTour/TourMenu'
import Promo from '../../component/promo/Promo'

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
      <TourMenu/>
      
      <div class='flex justify-center item-center'>
        <div class='text-center pt-20 w-4/12'>
        <p className='font-bold'>Special Offer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nec sed ligula ac tellus senectus ut. Ac.</p>
      </div>
      </div>
      


      <Promo/>
    </div>
  )
}
