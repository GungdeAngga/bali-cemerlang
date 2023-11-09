import React from 'react'

export default function EmailSub() {
  const handleSubscribe = () => {
    // Handle the subscription logic here, e.g., sending the email to a server.
    // You can add your specific functionality here.
    alert('Subscribed with email: ' + document.getElementById('email').value);
  };
  return (
    <div class='flex justify-center item-center h-72'>
      <div class='w-full'>
        <div class='text-center pt-14'>
          <p class='text-2xl font-bold pb-2'>Enter Your Email</p>
          <p>Join our newsletter to receive our latest special offers.</p>
        </div>
        <div class='flex justify-center item-center pt-6'>
          <input
          className="border-2 rounded-xl w-[420px] py-2 px-3 text-gray-700 leading-tight"
          id="email"
          type="email"
          placeholder="Enter your email"
          />
          <button
          onClick={handleSubscribe}
          className="bg-VividRed hover:bg-VividRed2 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline -ml-7"
           >
            Subscripe
           </button>
        </div>
        <div class='text-center pt-2'>
          by subscribing you have agreed our <a href='/' class="inline text-DarkBlue">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}
