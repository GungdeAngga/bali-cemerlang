import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import Footer from '../../component/footer/Footer'
import PackagesContent from '../../component/packages/PackagesContent'

export default function Packages() {
  return (
    <div>
        <StaticNavbar/>
        <PackagesContent/>
        <Footer/>
    </div>
  )
}
