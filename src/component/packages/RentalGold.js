import React from 'react'

export default function RentalGold() {
  return (
    <div>
        <div class='flex justify-center'>
            <img src='./asset/rentalGold.png' alt='visa' class='rounded-xl'/>
            <div class='absolute pt-[350px]'>
                <div class='flex flex-col items-center h-24 w-60 bg-white rounded-xl '>
                    <div class='pt-3 pb-2 text-xl font-bold'>
                        <p>Rental (Gold)</p>
                    </div>
                    <button class='bg-VividRed w-32 h-9 rounded-full text-white font-bold'>Show More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
