import React from 'react'
import Navbar from '../../component/navbar/Navbar'


export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className="max-w-screen mx-auto">
        <img src='/asset/background.png' alt='background' className='w-full bg-cover'/>
          <div className="absolute top-1/3 left-0 w-full h-full flex items-center justify-center">
            <div className="text-white p-4 text-4xl font-bold font-poppins">
              BOOK A UNIQUE EXPERIENCE ON BALI CEMERLANG TOURS TODAY
            </div>
          </div>
      </div>
      <Navbar/>
      
    </div>
  )
}
