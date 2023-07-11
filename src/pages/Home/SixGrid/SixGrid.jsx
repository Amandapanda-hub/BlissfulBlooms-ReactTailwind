import React from "react";
import { ReactComponent as NatureWoman } from '../../../assets/SVG/nature_woman.svg';
import { ReactComponent as NatureBenefit } from '../../../assets/SVG/nature_benefits.svg';
import { ReactComponent as Nature } from '../../../assets/SVG/nature.svg';
import { ReactComponent as Cabin } from '../../../assets/SVG/cabin.svg';
import { ReactComponent as FarmGirl } from '../../../assets/SVG/farm_girl.svg';
import { ReactComponent as Environment } from '../../../assets/SVG/environment.svg';


const GridItem = ({ SvgComponent, title, description }) => (
    <div className="flex flex-col items-center">
      <div className="w-full h-full flex items-center justify-center">
        <SvgComponent className="w-full sm:w-[80%] md:w-[500px] md:h-[180px] lg:max-w-md h-[200px] mx-auto" />
      </div>
      <h1 className="font-bold text-xl sm:text-2xl text-center mt-8 h-[60px] tracking-wider">{title}</h1>
      <p className="text-center mt-1 text-md sm:text-lg font-medium w-full sm:w-80 mx-auto">{description}</p>
    </div>
);


const SixGrid = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffe3e3] px-4 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 place-items-center">
      <GridItem SvgComponent={Nature} title="Nature's Gift" description="Blissful Blooms believes in the power and beauty of nature. Our flowers and plants are cultivated in their most natural state, providing unparalleled freshness and quality." />
      <GridItem SvgComponent={NatureBenefit} title="Benefit From Nature" description=" Nature has so much to offer. Our mission is to help you discover its benefits through our selection of exquisite flowers, each handpicked with love and care." />
      <GridItem SvgComponent={NatureWoman} title="Nature and You" description="The connection between nature and humankind is deep and enriching. Our flowers and plants are here to strengthen that bond, adding a blissful touch to your life." />
    </div>
    <div className="w-full mb-20 p-4 bg-white shadow-lg rounded-md flex flex-col items-center mt-20">
      <h1 className="font-bold text-[20px] sm:text-[25px] text-center bg-[#fff]">CREATING A WONDERFUL WORLD</h1>
      <p className="text-center mt-1"></p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
      <GridItem SvgComponent={Cabin} title="Our Greenhouse" description="At the heart of Blissful Blooms is our greenhouse, a cabin of love where every bloom is nurtured to perfection. It's not just a greenhouse; it's our blissful retreat." />
      <GridItem SvgComponent={FarmGirl} title="Grown With Care" description=" Each flower at Blissful Blooms is personally cared for by our passionate gardeners, ensuring they grow healthy and beautiful. Their love and dedication are evident in every bloom." />
      <GridItem SvgComponent={Environment} title="Preserving Our Planet" description=" Blissful Blooms is not just about beautiful flowers. We're committed to sustainable practices that protect and preserve our environment, ensuring a blissful future for all." />
    </div>
  </div>
);

export default SixGrid;
