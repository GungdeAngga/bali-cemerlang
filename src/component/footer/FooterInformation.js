import React from 'react'

export default function FooterInformation() {
  return (
    <div class='w-72'>
    <p class='text-white pt-3 font-bold'>Get In Touch</p>
    <div class="flex items-center pt-[15px]">
        <div className="flex flex-col">
            <div class='text-white'>
                <div class='flex items-center'>
                    <img src='/asset/email.png' alt='instagram' class='h-3 w-4 mr-1'/>
                    E-Mail
                </div>
                balicemerlangtours@gmail.com
            </div>
            <div class='text-white pt-5'>
                <div class='flex items-center'>
                    <img src='/asset/waFooter.png' alt='wa' class='h-3 w-4 mr-1'/>
                    WhatsApp
                </div>
                +62 812-3456-7890
            </div>
            <div class='text-white pt-5'>
                <p>Denpasar ID</p> 
                <p>Jl. Tukad Ayung No.5 Denpasar - Bali</p>
            </div>
        </div>
    </div>
</div>
  )
}
