import React from 'react'
import Navbar from '../../component/navbar/Navbar'


export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className="max-w-screen mx-auto">
        <img src='/asset/background.png' alt='background' className='w-full
         bg-cover'/>
      </div>
      <Navbar/>
    </div>
  )
}
