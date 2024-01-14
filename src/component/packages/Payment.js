import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


export default function Payment() {
    // const { id } = useParams();
    // const selectedPlatinumPackage = ;

    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleItemClick = (item) => {
        setSelectedOption(item);
        setIsDropdownOpen(false);
    };

  return (
    <div className='px-[120px]'>
        <div className='flex'>
            <div className='basis-1/2'> 
                <div class='pt-44 pb-10'>
                    <Link to='/Packages'>
                        <img src='./asset/back.svg' alt='back'/>
                    </Link>
                    <div className='flex pl-28 -mt-9'>
                        <div class='font-bold text-lg text-VividRed'>Passenger Data</div>
                    </div>
                    </div>

                    <div className='w-[900px] h-[420px] bg-red-200 border-4 border-gray-400 rounded-xl shadow-xl'>
                        <div className='px-12 pt-7'>
                            <div className='pb-2'>
                                <label className='font-bold'>Passenger Name</label>
                            </div>
                            <input type='text' placeholder='Passenger Name' className='border-Gray65 border-2 w-[800px] h-16 text-left pl-5 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl'/>
                            <div className='pb-4 pt-7'>

                                <div className='flex flex-row'>
                                    <div className='basis-1/2'>
                                        <div className='pb-2'>
                                            <label className='font-bold'>No. Identity (No. KTP / No. Paspor)</label>
                                        </div>
                                        <input type='text' placeholder='Passenger Name' className='border-Gray65 border-2 w-[380px] h-16 text-left pl-5 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl'/>
                                    </div>
                                    <div className='basis-1/2 pl-[40px]'>
                                        <div>
                                            <label className='font-bold'>Sex</label>
                                            <div className='pt-2'>
                                                <button
                                                    onClick={handleToggleDropdown}
                                                    className="border-Gray65 bg-white border-2 w-[380px] h-16 text-left pl-5 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl"
                                                >
                                                    {selectedOption || 'Sex'}
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className="absolute w-[380px] bg-white border rounded shadow-md">
                                                    <ul>
                                                        <li onClick={() => handleItemClick('Male')} className="py-2 px-4 cursor-pointer">
                                                        Male
                                                        </li>
                                                        <li onClick={() => handleItemClick('Female')} className="py-2 px-4 cursor-pointer">
                                                        Female
                                                        </li>
                                                    </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='pt-7'>
                                    <div className='pb-2'>
                                        <span className='font-bold'>Email</span> *(Used to send the booking code)
                                    </div>
                                    <input type='text' placeholder='Email' className='border-Gray65 border-2 w-[800px] h-16 text-left pl-5 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-10'>
                        <div className='flex text-4xl w-[900px] h-[100px] border-4 border-gray-400 rounded-xl'>
                            <div className='font-bold pt-6 pl-10'>Payment</div>
                            <span className='pt-6 pl-[490px]'>Rp.</span><span className='pt-6'>500.000</span>
                        </div>
                    </div>
                    
                    <div className='pl-36 pt-10 pb-20'>
                        <button className='h-14 w-[600px] bg-VividRed rounded-xl font-poppins text-xl text-white'>Booking</button>
                    </div>
                </div>

                <div className='basis-1/2 pt-[248px] pl-32'>
                    <div className='flex flex-col w-[300px] h-[240px] bg-white rounded-xl border-4 shadow-xl border-gray-400 '>
                        <div className='flex flex-col justify-center items-center border-b-4 border-dashed border-VividRed'>
                            <div className='pt-4 font-bold text-3xl'>Bali To Jakarta</div>
                            <div className='pt-2 font-bold text-VividRed '>Saturday, 4 March 2023</div>
                            <div className='pt-2 font-bold pb-4'>07:00 PM</div>
                        </div>
                        <div className='flex justify-center pt-5'>
                            <div className='bg-VividRed w-12 h-12 flex items-center justify-center rounded-xl'><img src='./asset/placeMap.svg' alt='map' className='w-7 h-7'/></div>
                            <div>
                                <div className='pl-3'>Bali, Indonesia</div>
                                <div className='pl-3 text-gray-500'>3-March-2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
    </div>
  )
}
