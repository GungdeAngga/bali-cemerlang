import React from 'react'

export default function SearchPackage() {
  return (
    
        <div className='flex'>
          <div className='absolute pt-5 pl-4'>
            <img src='./asset/search1.svg' alt='search' className='w-7'/>
          </div>
            <input type='text' placeholder='search' className='border-Gray65 border-2 w-[1300px] h-16 text-left pl-14 rounded-lg hover:bg-gray-200 focus:outline-none'/>
        </div>

  )
}