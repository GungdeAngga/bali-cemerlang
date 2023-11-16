import React from 'react'
import SearchCities from '../navbar/SearchCities'
import SearchDate from '../navbar/SearchDate'


export default function SearchInput() {
  return (
    <div className="flex items-center justify-center">

        <div class='flex'>
          <div class='basis-1/2'>
            <SearchCities/>
          </div>

          <div class='basis-1/2'>
            <SearchDate/>
          </div>

        </div>
           
    </div>
  )
}