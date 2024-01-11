import React from 'react'
import { Link } from 'react-router-dom'
import SearchPackage from '../Searchpackage/SearchPackage'
import RentalGold from './RentalGold'
import RentalPlatinum from './RentalPlatinum'
import RentalSilver from './RentalSilver'


export default function PackagesContent() {
  return (
    <div class='pt-44'>
      <Link to='/'>
        <img src='./asset/back.svg' alt='back' className='pl-[120px]'/>
      </Link>
      <div className='flex justify-center'>
        <img src='asset/icon-park-solid_ferris-wheel.png' alt='tour' className='pr-6'/>
        <div class='font-bold text-5xl text-VividRed'>Packages</div>
      </div>
      <div className='flex justify-center pt-8'>
        <div className='flex items-center justify-center w-[1500px] h-40 bg-LightGrayishViolet rounded-xl shadow-xl'>
          <SearchPackage/>
        </div>
      </div>
      <div class='flex justify-center item-center -mt-7'>
        <button class='h-14 w-[640px] bg-VividRed rounded-xl font-poppins text-xl text-white'>
          SEARCH
        </button>
      </div>
      
        
        
        <div class='pt-16 pb-36'>
            <div class='flex flex-row pl-24'>
              <div className='basis-1/3'>
                <RentalPlatinum/>
              </div>
              <div className='basis-1/3'>
                <RentalGold/>
              </div>
              <div className='basis-1/3'>
                <RentalSilver/>
              </div>
            </div>
        </div>
        
    </div>
  )
}
