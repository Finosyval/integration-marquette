import React from 'react';
import ordi from '../assets/ordinateur.png';
import Footer from './Footer';

const Training = () => {
  return (
    <section className="relative w-full">
      {/* Background SVG */}
      <div className="absolute inset-0 w-[120%] h-[130%] -top-20 -right-[10%] overflow-hidden">
        <svg 
          className="w-full h-full"
          viewBox="0 0 717 777" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path opacity="0.4" d="M88.25 172.948C76.1025 184.698 63.5809 201.028 62.9308 218.824C61.8761 247.695 95.546 572.416 107.349 615.134C110.004 624.744 114.259 633.737 119.927 641.939C139.151 669.762 172.255 684.582 205.813 680.387L578.545 633.793C599.811 631.134 618.453 618.291 628.513 599.366C633.772 589.472 636.419 578.399 636.204 567.197L632.715 185.908C632.072 152.502 615.152 121.516 587.397 102.914C565.705 88.3772 539.23 82.6948 513.478 87.0179L140.6 149.615C121.315 152.852 102.305 159.353 88.25 172.948Z" fill="url(#paint0_linear_10_112)"/>
          <path d="M202.208 680C202.208 680 291.208 577 251.208 539.5C211.208 502 65.4713 431.035 65.4713 431.035L76.3398 483.017L87.2083 535L112.708 629.5L129.708 649C129.708 649 121.208 643.5 138.708 657.5C156.208 671.5 165.708 680 181.708 680L202.208 680Z" fill="#FF6600" fillOpacity="0.15"/>
          <path d="M464.708 546.5C453.165 550.365 393.256 634.164 409.824 652.167C411.92 654.445 415.355 654.507 418.427 654.137L571.256 635.7L597.204 631.309C601.457 630.589 605.364 628.513 608.341 625.391L621.593 611.493C623.352 609.648 624.742 607.485 625.688 605.119L631.679 590.141C634.042 584.235 635.256 577.932 635.256 571.572L635.256 532.2C635.256 532.2 635.256 515 624.256 511C617.43 508.518 608.536 501.964 601.433 500.45C592.582 498.564 580.732 496.5 571.256 496.5C553.803 496.5 459.208 550.063 464.708 546.5Z" fill="#FF6600" fillOpacity="0.15"/>
          <defs>
            <linearGradient id="paint0_linear_10_112" x1="165.709" y1="313.338" x2="550.709" y2="173.838" gradientUnits="userSpaceOnUse">
              <stop offset="0.25" stopColor="#EE1C18"/>
              <stop offset="0.95" stopColor="#FF6600"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8 py-16 text-white">
        {/* Div 0 - Titre */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mt-6 mb-4">Les Formations aux métiers du CARGO</h2>
          <div className="text-xs space-y-1">
            <p>Encore et toujours un texte que</p>
            <p>je m'efforce de lire sans succès, ah décidément</p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {/* Div 1 - Texte + bouton */}
          <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/2">
            <p className="mb-4 text-lg">Notre IA vous aide à trouver la formation qui vous correspond.</p>
            <button className="bg-gradient-to-r from-blue-400 to-blue-800 text-white-600 px-4 py-2 rounded-lg shadow-md hover:bg-orange-50 transition">
              C'est parti
            </button>
          </div>

          {/* Div 2 - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src={ordi} alt="ordinateur" className="w-64 md:w-72 max-w-full" />
          </div>
        </div>

        {/* Bouton en bas centré */}
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-blue-400 to-blue-800 text-white-600 px-6 py-2 rounded-lg shadow-md hover:bg-orange-50 transition">
            il s'agit encore d'un texte que je n'arrive pas à lire
          </button>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Training;