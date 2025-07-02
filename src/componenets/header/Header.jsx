import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { StoreContent } from '../../context/StoreContent';
import { assets } from '../../assets/assets';
import { BiX, BiMenu } from "react-icons/bi";

const Header = ({ login, cart }) => {
  const [yes, setyes] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { total } = useContext(StoreContent);

  return (
    <header className='w-full bg-white shadow-md z-50 relative'>
      <div className='flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-32 py-3'>

        <Link to='/'>
          <img src={assets.logo} alt="Logo" className='w-32 sm:w-40 md:w-52' />
        </Link>

       
        <nav className='hidden md:flex items-center gap-10 font-medium'>
          <Link to='/' onClick={() => setyes('Home')} className={yes === 'Home' ? 'active' : ''}>Home</Link>
          <a href='#exploremenu' onClick={() => setyes('Menu')} className={yes === 'Menu' ? 'active' : ''}>Menu</a>
          <a href='#app' onClick={() => setyes('Mobile app')} className={yes === 'Mobile app' ? 'active' : ''}>Mobile App</a>
          <a href='#footer' onClick={() => setyes('contact us')} className={yes === 'contact us' ? 'active' : ''}>Contact Us</a>
        </nav>

     
        <div className='hidden md:flex items-center gap-6'>
          <IoIosSearch size={26} className='cursor-pointer' />
          <div className='relative'>
            <Link to='/cart'>
              <FaBasketShopping size={26} className='cursor-pointer' />
            </Link>
            {total() > 0 && <div className='dot'></div>}
          </div>
          <button onClick={() => login(true)} className='border-2 border-red-500 px-5 py-2 rounded-xl hover:bg-red-500 hover:text-white transition-all' id='button'>
            Sign In
          </button>
        </div>

      
        <div className='md:hidden'>
          {menuOpen ? (
            <BiX className='text-3xl cursor-pointer' onClick={() => setMenuOpen(false)} />
          ) : (
            <BiMenu className='text-3xl cursor-pointer' onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden bg-black text-white flex flex-col gap-6 p-6 absolute w-full left-0 top-16 z-40'>
          <Link to='/' onClick={() => { setyes('Home'); setMenuOpen(false); }}>Home</Link>
          <a href='#exploremenu' onClick={() => setMenuOpen(false)}>Menu</a>
          <a href='#app' onClick={() => setMenuOpen(false)}>Mobile App</a>
          <a href='#footer' onClick={() => setMenuOpen(false)}>Contact Us</a>

          <div className='flex items-center gap-4 pt-4 border-t border-gray-700'>
            <IoIosSearch size={24} className='cursor-pointer' />
            <div className='relative'>
              <Link to='/cart'>
                <FaBasketShopping size={24} className='cursor-pointer' onClick={()=>{setMenuOpen(false)}} />
              </Link>
              {total() > 0 && <div className='dot'></div>}
            </div>
            <button onClick={() => { login(true); setMenuOpen(false); }} className='border border-white px-4 py-1 rounded-lg'>
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
