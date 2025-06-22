import React from 'react';
import cargo from '@/assets/cargo.png';
import adidas from '@/assets/adidas.png';
import mcdo from '@/assets/mcdo.png';
import ubereats from '@/assets/ubereats.png';

const Footer = () => {
  const logos = [
    cargo,
   adidas, mcdo,ubereats
  ];

  return (
    <footer className=" py-10 text-center">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="partner logo" className="h-12 object-contain mx-12 " />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
