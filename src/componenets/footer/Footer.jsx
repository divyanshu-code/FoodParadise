import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white p-6 mt-12' id='footer'>
      <div className='flex flex-col lg:flex-row justify-between gap-10'>
        <div className='lg:w-1/3 text-center lg:text-left  p-10'>
         <a href="/"> <img src={assets.photo} alt='error' className='w-40 mx-auto lg:mx-0 bg-gray-800 border-none cursor-pointer' /></a> 
          <p className='mt-4 text-sm'>
            Welcome to Food Paradise, your ultimate destination for delectable and wholesome home-cooked meals in Sector-62, Noida. Our tiffin service caters to a diverse clientele, including those residing in PG accommodations.
          </p>
          <div className='flex justify-center lg:justify-start gap-4 mt-4 cursor-pointer'>
            <FaFacebook className='w-8 h-8' />
            <FaInstagramSquare className='w-8 h-8' />
            <FaMapLocationDot
              className='w-8 h-8'
              onClick={() => {
                window.open(
                  'https://www.google.com/viewer/place?sca_esv=b22bf8643ac1f672&output=search&mid=/g/11tf41gb92&pip=ChRmb29kIHBhcmFkaXNlIHNlYyA2MhAC&lqi=ChRmb29kIHBhcmFkaXNlIHNlYyA2Mkii0tzAtLmAgAhaJhAAEAEQAhADGAAYARgCGAMiFGZvb2QgcGFyYWRpc2Ugc2VjIDYykgESYm94X2x1bmNoX3N1cHBsaWVyqgFPEAEqESINZm9vZCBwYXJhZGlzZSgAMh4QASIax-MRo2gP7mFQfUgeLCyFLQLa7-cFY6aYV8IyGBACIhRmb29kIHBhcmFkaXNlIHNlYyA2Mg&phdesc=LTLoZcNs51E&sa=X&ved=2ahUKEwiUv-TR_Z2LAxXVa_UHHTCECmMQkbkFKAB6BAgOEAg',
                  '_blank'
                );
              }}
            />
          </div>
        </div>

        <div className='lg:w-1/3 text-center p-10'>
          <h2 className='font-extrabold text-lg'>COMPANY</h2>
          <ul className='mt-3 space-y-2'>
           <a href="/"><li>Home</li></a>   
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='lg:w-1/3 text-center lg:text-left p-10'>
          <h2 className='font-extrabold text-lg'>GET IN TOUCH</h2>
          <ul className='mt-3 space-y-2'>
            <li>+91 9899630323</li>
            <li>
              56, NCR, Block B, Industrial Area, Sector 62, Noida, Ghaziabad <br /> Uttar Pradesh 201309
            </li>
           <a href="mailto:foodparadisenoida@gmail.com"> <li >foodparadisenoida@gmail.com</li></a> 
          </ul>
        </div>
      </div>

      <hr className='my-6 border-gray-600' />

      <div className='text-center text-sm'>
        <p>Copyright 2024 © FoodParadise.com - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
