import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import TourMenu from '../../component/searchTour/TourMenu'
import SpecialOffer from '../../component/specialOffer/SpecialOffer'
import WhyBaliCemerlang from '../../component/whyBaliCemerlang/WhyBaliCemerlang'
import Promo from '../../component/promo/Promo'
import OurPartner from '../../component/emailAndContact/OurPartner'
import ContactUs from '../../component/emailAndContact/ContactUs'
import EmailSub from '../../component/emailAndContact/EmailSub'
import Footer from '../../component/footer/Footer'


export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className="max-w-screen mx-auto">
        <img src='/asset/background.png' alt='background' className='w-full bg-cover'/>
      </div>
      <Navbar/>
      <TourMenu/>
      <SpecialOffer/>
      <WhyBaliCemerlang/>
      <Promo/>
      <OurPartner/>
      <EmailSub/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
