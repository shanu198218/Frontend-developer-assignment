import React from 'react';
import mainImage from '../../../assets/images/containers.png';

const PortableSolutions = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="lg:w-1/2">
          <img
            src={mainImage}
            alt="Portable Cabin"
            className="w-full max-w-md mx-auto lg:mx-0"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-secondary font-semibold mb-2">
            Lorem ipsum dolor sit amet
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-snug mb-4">
            Leading the Future of Portable Solutions
          </h2>
          <p className="text-gray-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortableSolutions;
