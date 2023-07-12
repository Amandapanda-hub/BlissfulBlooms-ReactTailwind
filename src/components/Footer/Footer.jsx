import React from 'react';
import { MdOutlineNaturePeople } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './FooterStyles.css'
import AppleStore from '../../assets/images/applestoreicon.png';
import GooglePlay from '../../assets/images/googleplayicon.png';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#F5F3F4] p-8 f-background">

      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-8 w-full lg:w-1/2 mt-4 sm:mt-6 md:mt-auto mb-auto pt-4 sm:pt-6 md:pt-[7rem]">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold tracking-wider leading-8 text-center">Sign Up To Make A Change</h1>
        <p className='text-xl sm:text-2xl md:text-2xl font-normal text-center tracking-wide w-full lg:w-[60%]'>Join our community dedicated to preserving the environment. Together, we can make the world a greener place.</p>
          <div className='flex space-x-4 sm:space-x-6 md:space-x-9 lg:space-x-9 justify-center lg:justify-start'>
            <button className="px-4 sm:px-6 md:px-8 lg:px-8 py-1 sm:py-2 md:py-2 lg:py-2 bg-[#DFAB90] text-white rounded">Sign Up</button>
            <button className="px-4 sm:px-6 md:px-8 lg:px-8 py-1 sm:py-2 md:py-2 lg:py-2 bg-[#3F2305] text-white rounded">Log In</button>
          </div>
      </div>

      <div className="mt-8 space-y-4 lg:mt-auto mb-4 sm:mb-auto md:mb-auto text-xl sm:text-2xl lg:text-2xl xl:mb-2 flex flex-col items-center justify-center">
        <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 rounded-full border border-[#3F2305] flex items-center justify-center'>
          <MdOutlineNaturePeople className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 text-[#3F2305]"/>
        </div>
        <p className='text-center font-normal tracking-wide xl:mt-2'>Download Our Free Mobile App</p>
          <div className='flex justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-4'>
            <Link to='https://www.apple.com/app-store/developing-for-the-app-store/'><img src={AppleStore} alt="Apple Store" className="w-32 h-auto sm:w-36 lg:w-40"/></Link>
            <Link to='https://play.google.com/store/apps?hl=en_US&gl=US&pli=1'><img src={GooglePlay} alt="Google Play Store" className="w-32 h-auto sm:w-36 lg:w-40"/></Link>
          </div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 justify-items-center w-full lg:w-[50%] mt-auto mb-10 text-sm sm:text-base text-[#3F2305]">
        <Link className="" to="/">About Us</Link>
        <Link className="" to="/">Services</Link>
        <Link className="" to="/">Shop</Link>
        <Link className="" to="/">Donate</Link>
        <Link className="" to="/">Contact Us</Link>
        <Link className="" to="/">Privacy Policy</Link>
      </div>
        <p className="text-center mb-4">&copy; {new Date().getFullYear()} BLISSFUL BLOOMS.</p>

    </div>
  );
}

export default Footer;
