import React from 'react'
import SearchPackage from '../Searchpackage/SearchPackage'


export default function SearchInput() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1500px] h-60 bg-LightGrayishViolet rounded-xl">
        <div className="flex flex-col p-16">
          <div class='flex'>
            <SearchPackage/>
          </div>
        </div>
      </div>
    </div>
  )
}