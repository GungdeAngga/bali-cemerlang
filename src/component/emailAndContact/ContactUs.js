import React from 'react'

export default function ContactUs() {
    const openWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=628113971099', '_blank');
      };
  return (
    <div class='flex justify-center item-center h-52'>
        <div class='w-full  bg-LightShadeofGray'>
            <div class='pt-14'>
                <div class='text-center'>
                    <p className='font-bold text-xl'>Contact us for Payment</p>
                </div>
                <div class='flex justify-center item-center pt-3'>
                <button class='h-10 w-56 bg-VividRed rounded-full font-poppins text-xl text-white pl-10' onClick={openWhatsapp}>
                    <div class='flex'>
                       <img src='./asset/Wa.png' alt='Wa' class='pl-3 pr-2'/>
                        Contact us 
                    </div>
                </button>
                </div>
            </div>
        </div>
    </div> 
  )
}
