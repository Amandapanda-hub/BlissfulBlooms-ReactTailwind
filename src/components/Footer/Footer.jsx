import React from 'react';
import { MdOutlineNaturePeople } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './FooterStyles.css'
import AppleStore from '../../assets/images/applestoreicon.png';
import GooglePlay from '../../assets/images/googleplayicon.png';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#F5F3F4] p-8 f-background">
      <div className="flex flex-col items-center justify-center space-y-8 w-full lg:w-1/2 mt-auto mb-auto pt-[7rem] ">
        <h1 className="text-3xl font-semibold tracking-wider leading-8 text-center md:text-2xl ">Sign Up To Make A Change</h1>
        <p className='text-2xl font-normal text-center tracking-wide w-full lg:w-[60%] sm:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className='flex space-x-9 justify-center lg:justify-start'>
          <button className="px-8 py-2 bg-[#DFAB90] text-white rounded">Sign Up</button>
          <button className="px-8 py-2 bg-[#3F2305] text-white rounded">Log In</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 w-full lg:w-1/2 mt-auto mb-auto text-2xl">
        <div className='w-20 h-20 rounded-full border border-[#3F2305] flex items-center justify-center'>
          <MdOutlineNaturePeople className="w-[50%] h-[50%] text-[#3F2305]"/>
        </div>
        <p className='text-center font-normal tracking-wide'>Download Our Free Mobile App</p>
        <div className='flex justify-center lg:justify-start space-x-9'>
          <img src={AppleStore} alt="Apple Store" className="w-40 h-auto"/>
          <img src={GooglePlay} alt="Google Play Store" className="w-40 h-auto"/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 justify-items-center w-full lg:w-[50%] mt-auto mb-10 text-sm sm:text-base text-[#3F2305]">
    <Link className="" to="/link1">About Us</Link>
    <Link className="" to="/link2">Services</Link>
    <Link className="" to="/link3">Shop</Link>
    <Link className="" to="/link4">Donate</Link>
    <Link className="" to="/link5">Contact Us</Link>
    <Link className="" to="/link6">Privacy Policy</Link>
</div>



      <p className="text-center mb-4">&copy; {new Date().getFullYear()} BLISSFUL BLOOMS.</p>
    </div>
  );
}

export default Footer;
