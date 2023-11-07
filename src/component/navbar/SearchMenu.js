import React from 'react'
import SearchCities from './SearchCities'
import SearchDate from './SearchDate'
import SearchButton from './SearchButton'

export default function SearchMenu() {
  return (
    <div class='flex'>
        <div class='basis-1/4'>
            <div className='border-slate-500 h-36 px-20 py-8 border-2 rounded-lg shadow-lg bg-slate-50'>
                <div class='flex'>
                    <div class='flex-relative'>
                        <SearchCities/>
                    </div>
                    <div class='flex-relative pl-3'>
                        <SearchDate/>
                    </div>
                    <div class='flex-relative pl-3'>
                        <SearchButton/>
                    </div>
                </div>
                <a href="/" class='text-VividRed font-poppins'>More Options</a>
            </div>
        </div>
    </div>
  )
}
