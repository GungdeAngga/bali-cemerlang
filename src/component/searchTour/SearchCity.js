import React from 'react'
import SearchMenu from '../navbar/SearchMenu'


export default function SearchCity() {
  return (
    <div class='flex justify-center item-center'>
      <div class='w-[1590px]'>
        <div class='h-60 bg-LightGrayishViolet rounded-lg shadow-lg'>
          <SearchMenu/> {/*change search menu style*/}
        </div>
      </div>
    </div>
  )
}
