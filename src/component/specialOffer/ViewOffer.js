import React, { useState } from 'react';

const ViewOffer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-[1700px] py-9">
      <div className="overflow-x-hidden relative" style={{ width: `${100 * images.length / 3}%`}}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(100 / (images.length / 3)) * currentIndex}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/3 p-1">
              <img src={image} alt={`Image ${index}`} className="w-full" />
              <div className="">
                <h2 className="text-red-500 text-2xl">Tour to Lempuyang Temple</h2>
                <p className="text-red-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum a mattis platea sit velit feugiat.</p>
              </div>

            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white">
        &#8249;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white">
        &#8250;
      </button>
    </div>
  );
};

export default ViewOffer;
