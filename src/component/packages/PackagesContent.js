import React from 'react'
import VisaPackages from './VisaPackages'
import RentalSilver from './RentalSilver'
import RentalGold from './RentalGold'
import RentalPlatinum from './RentalPlatinum'

export default function PackagesContent() {
  return (
    <div class='pt-44'>
        <div class='text-center font-bold text-5xl'>Packges</div>
        <div class='pt-16 pb-36'>
            <div class='flex flex-row px-28'>
                <div class='basis-1/4'><VisaPackages/></div>
                <div class='basis-1/4'><RentalSilver/></div>
                <div class='basis-1/4'><RentalGold/></div>
                <div class='basis-1/4'><RentalPlatinum/></div>
            </div>
        </div>
        
    </div>
  )
}
