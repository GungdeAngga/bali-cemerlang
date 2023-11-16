import React from 'react'

export default function AboutUsContent() {
  return (
    <div class='pt-52 pb-36 px-28 w-full'>
      <div class='text-5xl pb-10 flex justify-center'><span class='font-bold'>About</span> Us</div>
      <div class='flex flex-row'>
        <div class='basis-1/2'>
            <div>
              <p class='text-xl font-bold'>OUR GOAL & MISSION</p>
              <p>Our goal is to make our valued customers to feel safe and comfort. All our product can be costumed tailored to meet every details your requirements and objectives.</p>
            </div>
            <div class='pt-10'>
              <p class='text-xl font-bold'>WHAT WE DO</p>
              <p>Ticketing: To be an accredited I.A.T.A travel company, we manage your need for air travel with various choice of time and type of aircrfat of any airline companies for seamless experience , worry – free from any troubles and annoyance, so that you can enjoy and focus to the accomplishment of travel objectives.</p>
            </div>
            <div class='pt-10 font-bold'>
              <p class='text-xl '>TRAVEL DOCUMENT</p>
              <ol>
                <li>1.Airline Tickets</li>
                <li>2.Visa</li>
                <li>3.Travel Insurance</li>
                <li>4.Europass/Rail</li>
                <li>5.Cruise</li>
              </ol>
            </div>
           
        </div>
        <div class='basis-1/2 pl-10'>
            <img src='/asset/aboutUs.png' alt='aboutUs' />
        </div>
      </div> 
        <div class='pt-10'>
          <p class='text-xl font-bold'>M.I.CE</p>
            <ul>
              <li>- Utilize our extensive experience and ‘eager to help team, to organize event from your perspectives to achieve the highest quality gain.</li>
              <li>- We can Provide welcome service at airports and hotels, and operate dedicated service desks at hotels for attentive support. </li>
              <li>- Arrange experienced guides to assist in visiting amazing sightseeing destinations. </li>
              <li>- Arrange decorations, production, attractions, and gifts for welcome and farewell parties and awards ceremonies. </li>
              <li>- Arrange the optimal transportation to meet the client's needs including bus, chartered car, rail, air, and more.</li>
              <li>- Provide highly attentive care and schedule management for VIPs requiring special arrangements. </li>
            </ul>
          </div>
        <div class='pt-10'>Team,</div>
        <div>Bali Cemerlang</div> 
    </div>
  )
}
