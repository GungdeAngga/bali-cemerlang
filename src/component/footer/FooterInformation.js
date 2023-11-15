import React from 'react'

export default function FooterInformation() {
    const email = 'info@balicemerlangtours.com';
    const phoneNumber = '628113971099';
    const BaliCemerlangRenon = 'Bali Cemerlang Tours in Renon'; // Replace with the actual place name or address
    // const BaliCemerlangKuta = 'Bali Cemerlang Tours in Kuta';

    const encodedPlace1 = encodeURIComponent(BaliCemerlangRenon);
    const googleMapsURL1 = `https://www.google.com/maps/search/?api=1&query=${encodedPlace1}`;

    // const encodedPlace2 = encodeURIComponent(BaliCemerlangKuta);
    // const googleMapsURL2 = `https://www.google.com/maps/search/?api=1&query=${encodedPlace2}`;
    
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
                <a href={`mailto:${email}`}>balicemerlangtours@gmail.com</a>
            </div>
            <div class='text-white pt-5'>
                <div class='flex items-center'>
                    <img src='/asset/waFooter.png' alt='wa' class='h-3 w-4 mr-1'/>
                    WhatsApp
                </div>
                <a href={`https://wa.me/${phoneNumber}`}>+62 812-3456-7890</a>
            </div>
            <div class='text-white pt-5'>
                <p>Denpasar ID</p> 
                <a href={googleMapsURL1} target="_blank" rel="noopener noreferrer">Jl. Tukad Ayung No.5, Denpasar - Bali</a><br/>
                {/* <p>Kuta ID</p>
                <a href={googleMapsURL2} target="_blank" rel="noopener noreferrer">Jl. By Pass Ngurah Rai Komplek Pertokoan Segi Tiga Mas No 25, Kuta - Bali</a> */}
            </div>
        </div>
    </div>
</div>
  )
}
