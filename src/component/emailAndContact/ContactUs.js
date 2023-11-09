import React from 'react'

export default function ContactUs() {
  return (
    <div class='flex justify-center item-center h-52'>
        <div class='w-full  bg-LightShadeofGray'>
            <div class='pt-14'>
                <div class='text-center'>
                    <p className='font-bold text-xl'>Contact us for Payment</p>
                </div>
                <div class='flex justify-center item-center pt-8'>
                <button class='h-10 w-56 bg-VividRed rounded-full font-poppins text-xl text-white pl-10'>
                    <img src='./asset/Wa.png' alt='Wa' class='absolute pl-3'/>
                    Contact us
                </button>
                </div>
            </div>
        </div>
    </div> 
  )
}
