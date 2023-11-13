import React from 'react'

export default function FooterAboutUs() {
  return (
    <div class='w-72'>
        <p class='text-white pt-3 font-bold'>About Us</p>
        <div class="flex items-center pt-[15px]">
            <div className="flex flex-col">
                <a href='/' class='text-white'>
                    Privacy policy
                </a>
                <a href='/' class='text-white'>
                    Company profile
                </a>
                <a href='/' class='text-white'>
                    Terms & Conditions Contact
                </a>
            </div>
        </div>
    </div>
  )
}
