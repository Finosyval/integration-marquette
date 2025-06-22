import React from 'react';
import cargo from '@/assets/cargo.png';
import adidas from '@/assets/adidas.png';
import mcdo from '@/assets/mcdo.png';
import ubereats from '@/assets/ubereats.png';

const Footer = () => {
  const logos = [cargo, adidas, mcdo, ubereats];

  return (
    <footer className="py-6 sm:py-10">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-full flex justify-center px-1 sm:px-4">
              <img 
                src={logo} 
                alt="partner logo" 
                className="h-6 sm:h-10 md:h-12 object-contain hover:opacity-80 transition-opacity" 
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
