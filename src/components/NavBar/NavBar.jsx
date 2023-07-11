import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#3F2305] ">
      <h1 className="w-full text-3xl font-bold text-[#3F2305]">BLISSFUL BLOOMS.</h1>
      <ul className="hidden md:flex">
      <li className="p-4 ">
    <Link to="/">Home</Link>
  </li>
  <li className="p-4 ">
    <Link to="/company">Shop</Link>
  </li>
  <li className="p-4">
    <Link to="/about">About</Link>
  </li>
  <li className="p-4">
    <Link to="/contact">Contact</Link>
  </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* mobile menu */}
      <div className={nav ? ' z-10 fixed left-0 top-0 w-screen h-full bg-[#4F5E4E] bg-opacity-100 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-3xl font-bold text-[#3F2305]">BLISSFUL BLOOMS.</h1>
          <div onClick={handleNav}>
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="justify-center uppercase p-4">
          <li className="p-4 border-b border-[#3F2305]">Home</li>
          <li className="p-4 border-b border-[#3F2305]">Company</li>
          <li className="p-4 border-b border-[#3F2305]">About</li>
          <li className="p-4 border-b border-[#3F2305]">Contact</li>
        </ul>
      </div>
    </div>
  );
};
