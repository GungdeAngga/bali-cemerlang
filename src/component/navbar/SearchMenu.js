import React from 'react'
import SearchCities from './SearchCities'
import SearchDate from './SearchDate'
import SearchButton from './SearchButton'

export default function SearchMenu() {
  return (
    <div class='flex'>
        <div class="basis-1/4"></div>
        <div class='basis-1/2 px-10'>
            <div className='border-slate-500 h-36 px-20 py-8 border-2 rounded-lg shadow-lg'>
                <div class='flex'>
                    <div class='flex-relative'>
                        <SearchCities/>
                    </div>
                    <div class='flex-relative pl-6'>
                        <SearchDate/>
                    </div>
                    <div class='flex-relative'>
                        <SearchButton/>
                    </div>
                </div>
                <div class='text-VividRed'>More Options</div>
            </div>
        </div>
    </div>
  )
}
