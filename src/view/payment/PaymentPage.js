import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import Footer from '../../component/footer/Footer'
import Payment from '../../component/packages/Payment'

export default function PaymentPage() {
  return (
    <div>
        <StaticNavbar/>
        <Payment/>
        <Footer/>
    </div>
  )
}
