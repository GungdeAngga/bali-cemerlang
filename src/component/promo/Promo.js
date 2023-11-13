import React from 'react'

export default function Promo() {
  return (
    <div class='flex flex-col items-center'>
        <div class='text-center pt-20 w-[620px]'>
            <p className='font-bold'>Promo</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nec sed ligula ac tellus senectus ut. Ac.</p>
        </div>
        <div class='flex flex-row gap-8 pt-10'>
            <div class='flex items-center justify-center'>
                <img src='./asset/pesawat.png' alt='pesawat' class='rounded-lg'/>
                <div class='absolute pt-72'>
                    <p class='text-center text-3xl font-bold text-white'>50% Discount</p>
                    <p class='text-center text-white'>Flight Ticket to Singapore</p>
                </div>
            </div>
            <div class='flex items-center justify-center'>
                <img src='./asset/penjor.png' alt='penjor' class='rounded-lg'/>
                <div class='absolute pt-72'>
                    <p class='text-center text-3xl font-bold text-white'>Special Price</p>
                    <p class='text-center text-white'>Galungan Kuningan Day</p>
                </div>
            </div>
            <div class='flex items-center justify-center'>
                <img src='./asset/kolam.png' alt='diskon' class='rounded-lg'/>
                <div class='absolute pt-72'>
                    <p class='text-center text-3xl font-bold text-white'>40% Off</p>
                    <p class='text-center text-white'>Ubud Tour</p>
                </div>
            </div>
            <div class='flex items-center justify-center'>
                <img src='./asset/family.png' alt='family' class='rounded-lg'/>
                <div class='absolute pt-72'>
                    <p class='text-center text-3xl font-bold text-white'>Family Package</p>
                    <p class='text-center text-white'>Special Price</p>
                </div>
            </div>
        </div>
    </div>
  )
}
