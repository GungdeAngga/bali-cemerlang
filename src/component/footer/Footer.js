import React from 'react'
import FooterAboutUs from './FooterAboutUs'
import FooterSearch from './FooterSearch'
import FooterInformation from './FooterInformation'

export default function Footer() {
  return (
    <div class='bottom-0 w-full bg-VividRed h-[480px]'>
        <div class='px-24 pt-24 pb-12'>
            <div class='flex flex-row'>
                <div class='w-[650px]'>
                    <img src='/asset/logoWeb.png' alt='Logo' class='w-[39px] h-[39px]'/>
                    <p class='text-white pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus adipiscing maecenas turpis fringilla cursus mi, fermentum.</p>
                    <div class="flex items-center pt-6">
                        <ul className="flex space-x-6">
                        <li>
                            <div class='w-6 h-6 bg-white flex items-center justify-center'>
                                <img src='/asset/instagram.png' alt='instagram' class='w-5 h-5'/>
                            </div>
                        </li>
                        <li>
                            <div class='w-6 h-6 bg-white flex items-center justify-center'>
                                <img src='/asset/facebook-f.png' alt='facebook' class='w-5 h-5'/>
                            </div>
                        </li>
                        <li>
                            <div class='w-6 h-6 bg-white flex items-center justify-center'>
                                <img src='/asset/linkedin-in.png' alt='linkin'class='w-5 h-5' />
                            </div>
                        </li>
                        <li>
                            <div class='w-6 h-6 bg-white flex items-center justify-center'>
                                <img src='/asset/youtube.png' alt='youtube' class='w-5 h-5'/>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class='flex pl-72'>
                    <div class='w-[300px]'>
                    <FooterAboutUs/>
                    </div>
                    <div class='w-[200px]'>
                        <FooterSearch/>
                    </div>
                    <div class='w-[300px]'>
                        <FooterInformation/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <div class='flex items-center justify-center'>
            <img src='/asset/line1.png' alt='line' class='w-[1711px]'/>
        </div>
        <p class='text-white text-right pr-[96px]'>created with ♥ by cvmaiharta</p>
        
    </div>
  )
}
