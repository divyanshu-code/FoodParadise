import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const LogIn = ({ login }) => {
  const [state, setState] = useState('Login');
  return (
    <div className='fixed inset-0 flex items-center justify-center  p-4 bg-opacity-50 z-50' id='log'>
      <form className='w-full max-w-md flex flex-col gap-5 bg-white p-6 rounded-xl shadow-2xl'>
        <div className='flex justify-between text-black font-bold text-lg'>
          <h2>{state}</h2>
          <RxCross2 className='w-6 h-6 cursor-pointer' onClick={() => login(false)} />
        </div>
        <div className='flex flex-col gap-4'>
          {state === 'Login' ? null : (
            <input className='border p-2 outline-none border-gray-700 rounded text-sm font-semibold' type='text' placeholder='Your name' required />
          )}
          <input className='border p-2 outline-none border-gray-700 rounded text-sm font-semibold' type='email' placeholder='Your email' required />
          <input className='border p-2 outline-none border-gray-700 rounded text-sm font-semibold' type='password' placeholder='Password' required />
        </div>
        <button className='border-none font-bold bg-red-600 w-full rounded p-2 text-white cursor-pointer'>
          {state === 'Sign Up' ? 'Create account' : 'Login'}
        </button>
        <div className='flex items-start gap-2 text-xs'>
          <input type='checkbox' required className='mt-0.5' />
          <p className='font-semibold'>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
        <div className='text-center'>
          {state === 'Login' ? (
            <p className='font-semibold'>
              Create a new account? <span className='text-red-500 cursor-pointer' onClick={() => setState('Sign Up')}>Click here</span>
            </p>
          ) : (
            <p className='font-semibold'>
              Already have an account? <span className='text-red-500 cursor-pointer' onClick={() => setState('Login')}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LogIn;
