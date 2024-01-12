import React from 'react'

export default function RentalSilver() {
  const silverPackagesData = [
    {
      id: 1,
      title: 'Silver Package 1',
      location: 'Nusa Lembongan',
      date: '13-Maret-2023',
      benefits: 'Snorkeling equipments',
      time: '18:00 PM',
      price: '500.000,00',
    },
    {
      id: 2,
      title: 'Silver Package 2',
      location: 'Nusa Lembongan',
      date: '13-Maret-2023',
      benefits: 'Snorkeling equipments',
      time: '18:00 PM',
      price: '500.000,00',
    },
    // Add more items as needed
  ];
  return (
    <div className='space-y-6'>
    {silverPackagesData.map((silverPackages) => (
      <div key={silverPackages.id} className='w-[500px] h-[200px] shadow-xl rounded-lg bg-LightGrayishViolet'>
      <div className='flex flex-row'>
        <div className='basis-2/3 pl-12 border-r-4 border-dashed h-[200px]'>
            <div className='font-bold text-2xl pt-3'>{silverPackages.title}</div>
            <div className='flex pt-5'>
                <div className='bg-VividRed w-12 h-12 flex items-center justify-center rounded-xl'><img src='./asset/placeMap.svg' alt='map' className='w-7 h-7'/></div>
                <div>
                    <div className='pl-3'>{silverPackages.location}</div>
                    <div className='pl-3 text-gray-500'>{silverPackages.date}</div>
                </div>
            </div>
            <div className='font-bold text-lg pt-5'>Benefit:</div>
            <div>{silverPackages.benefits}</div>
        </div>

        <div className='basis-1/3 pl-3'>
            <div className='flex flex-col items-center justify-center'>
                <div className='font-bold text-2xl pt-6 pb-6'>{silverPackages.time}</div>
                <button className='w-28 h-14 bg-VividRed font-bold text-lg text-white rounded-xl'>Buy Tiket</button>
            </div>
            <div className='text-gray-400 pt-4'>Price : <span className='text-VividRed font-bold'>Rp</span><span className='text-VividRed font-bold'>{silverPackages.price}</span></div>
        </div>
      </div>
    </div>
    ))}
  </div>
  )
}
