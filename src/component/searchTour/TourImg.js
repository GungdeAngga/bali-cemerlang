import React from 'react'
import { Link } from 'react-router-dom'

export default function TourImg() {
  return (
    <div className='text-center'>
        <Link to='/'>
            <img src='asset/icon-park-solid_ferris-wheel.svg' alt='Tour'/>
            <div>
                <p>Tour</p>
            </div>
        </Link>
    </div>
  )
}
