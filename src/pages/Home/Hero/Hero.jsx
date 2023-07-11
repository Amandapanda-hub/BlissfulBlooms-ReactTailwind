import React from 'react';
import FlowerOutline from '../../../assets/images/blockyflower.png';
import { TypeAnimation } from 'react-type-animation';
import "./HeroStyles.css";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 bg-[#F5F3F4] flex-grow flex flex-col items-center justify-center space-y-10 sm:pb-5">
        <h1 className="sm:text-3xl md:text-4xl text-5xl font-bold text-[#4F5E4E] bg-clip-text">
          One Seed
        </h1>
        <div className="items-center justify-center bg-[#F5F3F4] sm:text-2xl sm:mt-3"> 
        <h1 className="text-5xl md:text-3xl font-bold text-[#DFAB90] bg-clip-text overlay sm:pb-5 md:pb-10 lg:pb-0">
            <TypeAnimation
                sequence={[
                    'Brings Joy',
                    1000,
                    'Inspires Change',
                    1000,
                    'Creates Blissful Blooms',
                    1000
                ]}
                wrapper = 'span'
                speed={30}
                className="outline-text type-animation-text"
                style={{ fontSize: '2rem', display: 'inline-block', background: '#F5F3F4'}}
                repeat={Infinity}
                />
        </h1>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex-grow flex items-center justify-center relative">
        <div className='h-full w-full flex'>
          <img
            src={FlowerOutline}
            alt="Flower Blooming"
            className="w-1/2 h-full object-cover transform scale-100"
          />
          <img
            src={FlowerOutline}
            alt="Flower Blooming"
            className="w-1/2 h-full transform scale-x-[-1] scale-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
