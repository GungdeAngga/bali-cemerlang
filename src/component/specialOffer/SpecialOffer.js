import React from 'react'
import ViewOffer from './ViewOffer';

const images = [
    './asset/lempuyang.png',
    './asset/nusaPenida.png',
    './asset/ubud.png',
    './asset/lempuyang.png',
    './asset/nusaPenida.png',
    './asset/ubud.png',
    './asset/lempuyang.png',
    './asset/nusaPenida.png',
    './asset/ubud.png',
    './asset/lempuyang.png',
    './asset/nusaPenida.png',
    './asset/ubud.png',
    './asset/lempuyang.png',
    './asset/nusaPenida.png',
    './asset/ubud.png',
    './asset/lempuyang.png',
    './asset/nusaPenida.png',
    './asset/ubud.png',
  // Add more image URLs as needed
];

export default function SpecialOffer() {
    
  return (
    <div class='flex flex-col items-center'>
        <div class='text-center pt-20 w-[620px]'>
            <p className='font-bold'>Special Offer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nec sed ligula ac tellus senectus ut. Ac.</p>
        </div>

        <div class='w-[1700px]'>
            <div class=''>
                <ViewOffer images={images} />
            </div>
        </div>

        <div>
          <button class='h-14 w-[400px] bg-VividRed rounded-full font-poppins text-xl text-white'>
            clik here to see more offers
          </button>
        </div>

    </div>
  )
}
