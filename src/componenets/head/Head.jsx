import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div id='head' className='relative min-h-[50vh] sm:min-h-[50vh] md:min-h-screen flex flex-col justify-center px-4 py-8 sm:px-8 md:px-12 lg:px-20'>
      <img src={assets.back} alt='error' className='absolute top-0 left-0 w-full h-full object-cover mt-5 rounded-xl -z-10' />
      <div className='max-w-4xl text-white text-left space-y-6 ml-5'>
        <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Order your favorite food here
        </h1>
        <p className='text-sm sm:text-base md:text-lg font-semibold text-shadow-5 '>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <a href="#exploremenu">
          <button className='border px-6 py-3 rounded-3xl bg-white text-black border-white text-sm sm:text-base hover:bg-gray-200 transition'>
            View Menu
          </button>
        </a>
      </div>
    </div>
  );
};

export default Head;
