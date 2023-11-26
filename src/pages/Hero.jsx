import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-12 md:pt-32">
      <p className="text-4xl md:text-7xl font-bold text-purple-500">Unleash Digital Paws</p>
      <p className="text-3xl md:text-5xl mt-1 font-bold">Your Pet's Moments, Enhanced by AI!</p>
      <p className="text-lg md:text-2xl mt-8 font-medium">Craft your custom AI companions and engage with pet lovers from around the world.</p>
      <button className="mt-8 px-6 py-3 text-white bg-purple-600 rounded-3xl text-base md:text-lg shadow-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300 focus:outline-none">
        Start generating now!
      </button>
    </div>
  );
};

export default Hero;