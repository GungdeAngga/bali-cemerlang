import React from 'react'

export default function RentalGold() {
  return (
    <div className='w-[500px] h-[200px] shadow-xl rounded-lg bg-LightGrayishViolet'>
      <div className='flex flex-row'>
        <div className='basis-2/3 pl-6 border-r-4 border-dashed h-[200px]'>
            <div className='font-bold text-2xl pt-3'>Gold Packages</div>
            <div className='flex pt-5'>
                <div className='bg-VividRed w-12 h-12 flex items-center justify-center rounded-xl'><img src='./asset/placeMap.svg' alt='map' className='w-7 h-7'/></div>
                <div>
                    <div className='pl-3'>Nusa Lembongan</div>
                    <div className='pl-3 text-gray-500'>13-Maret-20023</div>
                </div>
            </div>
            <div className='font-bold text-lg pt-5'>Benefit:</div>
            <div>Snorkling equipments</div>
        </div>

        <div className='basis-1/3 pl-3'>
            <div className='flex flex-col items-center justify-center'>
                <div className='font-bold text-2xl pt-6 pb-6'>18:00 PM</div>
                <button className='w-28 h-14 bg-VividRed font-bold text-lg text-white rounded-xl'>Buy Tiket</button>
            </div>
            <div className='text-gray-400 pt-4'>Price : <span className='text-VividRed font-bold'>Rp</span><span className='text-VividRed font-bold'>500.000,00</span></div>
        </div>
      </div>
    </div>
  )
}
